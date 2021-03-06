Package.describe({
  "summary": "Server Side Rendering for Meteor with Blaze",
  "version": "2.0.0",
  "git": "https://github.com/meteorhacks/meteor-ssr",
  "name": "meteorhacks:ssr"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(['Template', 'SSR'], ['server']);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], 'server');
  
  api.addFiles([
    
  ], 'server');
});

function configurePackage(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use(['blaze', 'spacebars', 'spacebars-compiler'], 'server');
  api.addFiles([
    'lib/overrides.js',
    'lib/template.js',
    'lib/dynamic.js',
    'lib/api.js',
  ], 'server');
}
