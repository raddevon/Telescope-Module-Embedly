Template[getTemplate('postThumbnail')].helpers({
  postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  }
});