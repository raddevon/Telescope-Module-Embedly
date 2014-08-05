getEmbedlyData = function (url) {
  var data = {}
  var extractBase = 'http://api.embed.ly/1/extract';
  var embedlyKey = getSetting('embedlyKey');

  try {
    
    if(!embedlyKey)
      throw new Error("Couldn't find an Embedly API key! Please add it to your Telescope settings.")

    var result = Meteor.http.get(extractBase, {
      params: {
        key: embedlyKey,
        url: url,
        image_width: 200,
        image_height: 150,
        image_method: 'crop'
      }
    });

    if(!result.data.images.length)
      throw new Error("Couldn't find an image!");

    data.thumbnailUrl = result.data.images[0].url;

    if(typeof result.data.media !== 'undefined')
      data.media = result.data.media

    return data;
  } catch (error) {
    console.log(error)
    return null;
  }
}

Meteor.methods({
  testGetEmbedlyData: function (url) {
    console.log(getEmbedlyData(url))
  }
});

var extendPost = function (post) {
  if(post.url){
    var data = getEmbedlyData(post.url);
    if(!!data){
      if(!!data.thumbnailUrl)
        post.thumbnailUrl = data.thumbnailUrl;
      if(!!data.media.html)
        post.media = data.media
    }
  }
  return post;
}

postSubmitServerCallbacks.push(extendPost);