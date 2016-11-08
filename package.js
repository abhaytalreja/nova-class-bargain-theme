Package.describe({
  name: "abhaytalreja:nova-class-bargain-theme",
  summary: "Telescope Nova Class Bargain Theme",
  version: "0.0.1",
  git: "https://github.com/abhaytalreja/nova-class-bargain-theme"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core@0.27.3-nova',
    'nova:base-components@0.27.3-nova',
    'nova:posts@0.27.3-nova',
    'nova:users@0.27.3-nova',
    'fourseven:scss@3.9.0'
  ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/stylesheets/custom.scss'
  ], ['client']);

  // api.addAssets([
  //   'lib/images/classbargains.png',
  //   'lib/images/logo.png',
  // ], ['client']);

  // api.addFiles([
  // ], ['server']);

  // api.addAssets([
  //   'lib/server/emails/customNewPost.handlebars',
  //   'lib/server/emails/customEmail.handlebars'
  // ], ['server']);

});
