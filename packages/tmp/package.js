Package.describe({
  name: 'lw:tmp',
  version: '0.0.1',
  summary: 'Wrapper for all packages, that requires in projects',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.4');
  api.use('ecmascript');
  api.mainModule('tmp.js');
});