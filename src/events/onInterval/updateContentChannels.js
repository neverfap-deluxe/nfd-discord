const _ = require('lodash');
const axios = require('axios');
const Diff = require('diff');

const ARTICLES_URL = 'https://neverfapdeluxe.netlify.com/articles/index.json';
const PRACTICES_URL = 'https://neverfapdeluxe.netlify.com/practices/index.json';
const PODCASTS_URL = 'https://neverfapdeluxe.netlify.com/podcast/index.json';
// const MEDITATIONS_URL = 'https://neverfapdeluxe.netlify.com/meditations/index.json';

// Diff library
// https://github.com/kpdecker/jsdiff

const updateContentChannels = async (client, logger, juliusReade) => {
  try {
    console.log('yeah');

    // Articles
    const articlesChannel = client.channels.get(process.env.ARTICLES_CONTENT_CHANNEL_ID);    
    const articlesResponse = await axios.get(ARTICLES_URL);
    const articles = articlesResponse.data.data.articles;
    let finalArticlesList = '***NeverFap Deluxe Articles List***\n';
        finalArticlesList += 'Articles: https://neverfapdeluxe.com/articles\n\n'

    console.log('yo');
    for (const article of articles) {
      finalArticlesList += `**${article.title}**\n`;
      finalArticlesList += `${article.date}\n`;
      finalArticlesList += `${article.permalink}\n\n`;
    }
    const lastMessageIDArticles = _.get(articlesChannel, 'lastMessageID');
    const lastMessageArticles = await articlesChannel.fetchMessage(lastMessageIDArticles);

    const articlesContentsHasChanged = Diff.diffWords(_.get(lastMessageArticles, 'content'), finalArticlesList);
    if (articlesContentsHasChanged.length > 0) {
      const fetched = await channel.fetchMessages({limit: 100});
      
      await articlesChannel.delete(lastMessageIDArticles);
      await articlesChannel.send(finalArticlesList);  
    } else {
      console.log('updateContentChannels - articlesContentsHasNotChanged');
    }  

    // Practices
    const practicesChannel = client.channels.get(process.env.PRACTICES_CONTENT_CHANNEL_ID);    
    const practicesResponse = await axios.get(PRACTICES_URL);
    const practices = practicesResponse.data.data.practices;
    let finalPracticesList = '***NeverFap Deluxe Practices List***\n';
        finalPracticesList += 'Practices: https://neverfapdeluxe.com/practices\n\n';

    for (const practice of practices) {
      finalPracticesList += `**${practice.title}**\n`;
      finalPracticesList += `${practice.date}\n`;
      finalPracticesList += `${practice.permalink}\n\n`;
    }
    const lastMessageIDPractices = _.get(practicesChannel, 'lastMessageID');
    const lastMessagePractices = await practicesChannel.fetchMessage(lastMessageIDPractices);

    const practicesContentsHasChanged = Diff.diffWords(_.get(lastMessagePractices, 'content'), finalPracticesList); // todo - diff with lastMessagePractices and finalPracticesList. 
    if (practicesContentsHasChanged.length > 0) {
      await practicesChannel.delete(lastMessageIDPractices);
      await practicesChannel.send(finalPracticesList);
    } else {
      console.log('updateContentChannels - practicesContentsHasNotChanged');
    }  

    // Podcasts
    const podcastsChannel = client.channels.get(process.env.PODCASTS_CONTENT_CHANNEL_ID);    
    const podcastsResponse = await axios.get(PODCASTS_URL);
    const podcasts = podcastsResponse.data.data.podcasts;
    let finalPodcastsList = '***NeverFap Deluxe Podcasts List***\n';
        finalPodcastsList += 'Podcasts: https://neverfapdeluxe.com/podcasts\n\n';

    for (const podcast of podcasts) {
      finalPodcastsList += `**${podcast.title}**\n`;
      finalPodcastsList += `${podcast.date}\n`;
      finalPodcastsList += `${podcast.permalink}\n\n`;
    }
    const lastMessageIDPodcasts = _.get(podcastsChannel, 'lastMessageID');
    const lastMessagePodcasts = await podcastsChannel.fetchMessage(lastMessageIDPodcasts);

    const podcastsContentsHasChanged = Diff.diffWords(_.get(lastMessagePodcasts, 'content'), finalPodcastsList); // todo - diff with lastMessagePodcasts and finalPodcastsList. 
    if (podcastsContentsHasChanged) {
      await podcastsChannel.send(finalPodcastsList);
    } else {
      console.log('updateContentChannels - podcastsContentsHasNotChanged');
    }  
  } catch(error) {
    await juliusReade.send(`updateContentChannels - ${error}`);
    logger.error(`updateContentChannels - ${error}`)
    throw new Error(`updateContentChannels - ${error}`);
  }
};

module.exports = updateContentChannels;