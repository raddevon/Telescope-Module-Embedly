Package.describe({summary: "Telescope Embedly module package"});

Package.on_use(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

  api.use(['http'], ['server']);

  api.use(['templating'], ['client']);

  api.add_files(['lib/embedly.js'], ['client', 'server']);

  api.add_files(['lib/server/get_embedly_data.js'], ['server']);

  api.add_files([
    'lib/client/post_thumbnail.html', 
    'lib/client/post_thumbnail.js', 
    'lib/client/post_thumbnail.css',
    'lib/client/post_video.html',
    'lib/client/post_video.js'
  ], ['client']);
});