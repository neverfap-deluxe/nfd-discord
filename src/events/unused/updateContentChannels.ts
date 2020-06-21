// import get from '../channels/onInterval/automatedMessages/node_modules/lodash/get';
// import axios from 'axios';
// import Diff from 'diff';

// const ARTICLES_URL = 'https://neverfapdeluxe.netlify.com/articles/index.json';
// const PRACTICES_URL = 'https://neverfapdeluxe.netlify.com/practices/index.json';
// const PODCASTS_URL = 'https://neverfapdeluxe.netlify.com/podcast/index.json';
// // const MEDITATIONS_URL = 'https://neverfapdeluxe.netlify.com/meditations/index.json';

// // Diff library
// // https://github.com/kpdecker/jsdiff

// const updateContentChannels = async (client: Client, logger: Logger, juliusReade) => {
//   try {
//     // TODO: Essentially what it would do is:
//     // you would have one article per message.
//     // it would go through all the messages to see if an article was already posted. If not, it will post the article to the channel.

//     // Articles
//     const articlesChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
//     const articlesChannelMessages = await articlesChannel.messages.fetchs({ limit: 100 });
//     const articlesResponse = await axios.get(ARTICLES_URL);
//     const articles = articlesResponse.data.data.articles.map(article => ({ title: article.title, permalink: article.permalink }));
//     let finalArticlesList = '***NeverFap Deluxe Articles List***\n';
//         finalArticlesList += 'Articles: https://neverfapdeluxe.com/articles\n\n'

//     for (const article of articles) {

//       articlesChannelMessages.find();

//       finalArticlesList += `**${article.title}**\n`;
//       finalArticlesList += `${article.date}\n`;
//       finalArticlesList += `${article.permalink}\n\n`;
//     }
//     const lastMessageIDArticles = get(articlesChannel, 'lastMessageID');
//     const lastMessageArticles = await articlesChannel.messages.fetch(lastMessageIDArticles);

//     const articlesContentsHasChanged = Diff.diffWords(get(lastMessageArticles, 'content'), finalArticlesList);
//     if (articlesContentsHasChanged.length > 0) {
//       const fetched = await channel.messages.fetchs({limit: 100});

//       await articlesChannel.delete(lastMessageIDArticles);
//       await articlesChannel.send(finalArticlesList);
//     } else {
//       console.log('updateContentChannels - articlesContentsHasNotChanged');
//     }

//     // Practices
//     const practicesChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
//     const practicesChannelMessages = await practicesChannel.messages.fetchs({ limit: 100 });
//     const practicesResponse = await axios.get(PRACTICES_URL);
//     const practices = practicesResponse.data.data.practices.map(practice => ({ title: practice.title, permalink: practice.permalink }));;
//     let finalPracticesList = '***NeverFap Deluxe Practices List***\n';
//         finalPracticesList += 'Practices: https://neverfapdeluxe.com/practices\n\n';

//     for (const practice of practices) {


//       // finalPracticesList += `**${practice.title}**\n`;
//       // finalPracticesList += `${practice.date}\n`;
//       // finalPracticesList += `${practice.permalink}\n\n`;
//     }
//     const lastMessageIDPractices = get(practicesChannel, 'lastMessageID');
//     const lastMessagePractices = await practicesChannel.messages.fetch(lastMessageIDPractices);

//     const practicesContentsHasChanged = Diff.diffWords(get(lastMessagePractices, 'content'), finalPracticesList); // todo - diff with lastMessagePractices and finalPracticesList.
//     if (practicesContentsHasChanged.length > 0) {
//       await practicesChannel.delete(lastMessageIDPractices);
//       await practicesChannel.send(finalPracticesList);
//     } else {
//       console.log('updateContentChannels - practicesContentsHasNotChanged');
//     }

//     // Podcasts
//     const podcastsChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_Accountability);
//     const podcastsResponse = await axios.get(PODCASTS_URL);
//     const podcasts = podcastsResponse.data.data.podcasts.map(article => ({ title: article.title, permalink: article.permalink }));;
//     let finalPodcastsList = '***NeverFap Deluxe Podcasts List***\n';
//         finalPodcastsList += 'Podcasts: https://neverfapdeluxe.com/podcasts\n\n';

//     for (const podcast of podcasts) {
//       finalPodcastsList += `**${podcast.title}**\n`;
//       finalPodcastsList += `${podcast.date}\n`;
//       finalPodcastsList += `${podcast.permalink}\n\n`;
//     }
//     const lastMessageIDPodcasts = get(podcastsChannel, 'lastMessageID');
//     const lastMessagePodcasts = await podcastsChannel.messages.fetch(lastMessageIDPodcasts);

//     const podcastsContentsHasChanged = Diff.diffWords(get(lastMessagePodcasts, 'content'), finalPodcastsList); // todo - diff with lastMessagePodcasts and finalPodcastsList.
//     if (podcastsContentsHasChanged) {
//       await podcastsChannel.send(finalPodcastsList);
//     } else {
//       console.log('updateContentChannels - podcastsContentsHasNotChanged');
//     }
//   } catch(error) {
//     await juliusReade.send(`updateContentChannels - ${error}`);
//     logger.error(`updateContentChannels - ${error}`)
//     throw new Error(`updateContentChannels - ${error}`);
//   }
// };

// export default updateContentChannels;