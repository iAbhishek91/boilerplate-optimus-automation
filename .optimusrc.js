/*
  NOTE: Guide for customOptions
  Refer: https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md
  This object is consumed by command-line-args.
  Hence each object can have below defined keys:
  - name(required): [type: string] name of the command line.
  - type(optional): [type: function] type of the data. Default to String.
  - alias(optional): [type: string] define one character shortcuts of the command.
  - multiple(optional): [type: boolean] the command line will accept multiple value as array.
  - lazyMultiple(optional): [type: boolean] Identical to multiple but with greedy parsing disabled.
  - defaultOption(optional): [type: boolean] name of the command line.
  - defaultValue(optional): [type: any] default value of the parameter.
  - group(optional): [string|Array of string] Gouping few option under a parent options.
*/
const path = require('path');
const { OUTPUT_DIRECTORY_NAME } = require('./dist/constants');

module.exports = {
  customOptions: [
    { name: 'environment', alias: 'e' },
    { name: 'project', alias: 'p' },
    { name: 'device', defaultValue: 'desktop' },
  ],
  frameworkOptions: {
    outputDir: OUTPUT_DIRECTORY_NAME,
    isReportsPersistent: false,
  }, 
  cucumberOptions: {
    featureRootDir: path.join(process.cwd(), 'features'),
    featurePath: '**',
    featureFilename: '*',
    reportName: 'cucumberReport',
    require: 'dist/step_definitions/**/*.js',
    format: 'json',
    parallel: false,
  },
  seleniumOptions: {
    arch: process.arch,
    seleniumBaseURL: 'https://selenium-release.storage.googleapis.com',
    seleniumVersion: '3.141.5',
    chromeBaseURL: 'https://chromedriver.storage.googleapis.com',
    chromeVersion: '2.43',
    ieBaseURL: 'https://selenium-release.storage.googleapis.com',
    ieVersion: '3.14.0',
    firefoxBaseURL: 'https://github.com/mozilla/geckodriver/releases/download',
    firefoxVersion: '0.23.0',
    edgeVersion: '17134',
  }
};
