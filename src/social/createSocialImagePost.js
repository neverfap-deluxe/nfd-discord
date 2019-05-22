// const pinterestBoard = '';
// const sizeOf = require('image-size');

// // const http = require("http");
// // const file = fs.createWriteStream("file.docx");

// // http.get("http://www.example.com/test.docx", response => {
// //   response.pipe(file);
// // });


// const sendPinterestImagePost = (text, fullImageUrl) => {
//   try {
//     pinterest.setUserToken(userToken);
//     const response = pinterest.pins.createPin({
//       board: pinterestBoard, // 'pideveloper/board-2',
//       note: text,
//       image_url: fullImageUrl
//     });
//   } catch (error) {
//     throw new Error(`sendPinterestPost - ${error}`)
//   }
// }

// const sendFacebookImagePost = (text, fullImageUrl) => {
//   try {
//     // sizeOf('images/funny-cats.png', function (err, dimensions) {
//     //   console.log(dimensions.width, dimensions.height);
//     // });

//     const dimensions = sizeOf('images/funny-cats.png');
//     console.log(dimensions.width, dimensions.height);

//     const image = {
//       height: '',
//       source: '',
//       width: '',
//     };

//     var wallPost = {
//       message: text,
//       images: [image]
//     };

//     // A Page access token with manage_pages and publish_pages permissions

//     graph.post("/photos", wallPost, function(err, res) {
//       // returns the post id
//       console.log(res); // { id: xxxxx}
//     });

//     // graph.post("/feed", wallPost, function(err, res) {
//     //   // returns the post id
//     //   console.log(res); // { id: xxxxx}
//     // });

//   } catch (error) {
//     throw new Error(`sendFacebookPost - ${error}`)
//   }
// }

// const sendRedditImagePost = (text, fullImageUrl) => {
//   try {
//     r.getSubreddit('NeverFapDeluxe').submitLink({
//       title: text,
//       url: fullImageUrl,
//     })
//     .assignFlair({text: 'Daily Thread flair text', css_class: 'daily-thread'})
// } catch (error) {
//     throw new Error(`sendRedditPost - ${error}`)
//   }
// }

// const sendTwitterImagePost = (text, fullImageUrl) => {
//   try {
//     var b64content = fs.readFileSync('/path/to/img', { encoding: 'base64' })

//   // T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   //   console.log(data)
//   // })

//   T.post('media/upload', { media_data: b64content }, function (err, data, response) {
//     // now we can assign alt text to the media, for use by screen readers and
//     // other text-based presentations and interpreters
//     var mediaIdStr = data.media_id_string
//     var altText = "Small flowers in a planter on a sunny balcony, blossoming."
//     var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

//     T.post('media/metadata/create', meta_params, function (err, data, response) {
//       if (!err) {
//         // now we can reference the media and post a tweet (media will attach to the tweet)
//         var params = { status: 'loving life #nofilter', media_ids: [mediaIdStr] }

//         T.post('statuses/update', params, function (err, data, response) {
//           console.log(data)
//         })
//       }
//     })
//   })

//   } catch (error) {
//     throw new Error(`sendRedditPost - ${error}`)
//   }
// }

// const sendTumblrImagePost = (text, fullImageUrl) => {
// // tags in options.
// // client.createTextPost(blogName, options, callback);
// // client.createPhotoPost(blogName, options, callback);
// // client.createQuotePost(blogName, options, callback);
// // client.createLinkPost(blogName, options, callback);
// }

// const sendInstagramImagePost = (text, fullImageUrl) => {
// //   .get('tags/search', { access_token: accessToken, q: 'paris' })
// //   .then(data => {
// //     console.log(data);
// //   });
// //   media
// //   ?image_url=https//www.example.com/images/bronz-fonz.jpg
// //   &caption=#BronzFonz


// //   POST graph.facebook.com/17841405822304914/media_publish
// //   ?creation_id=17889455560051444
// }


// module.export = {
//   sendPinterestImagePost,
//   sendFacebookImagePost,
//   sendRedditImagePost,
//   sendTwitterImagePost,
//   sendTumblrImagePost,
//   sendInstagramImagePost,
// }
