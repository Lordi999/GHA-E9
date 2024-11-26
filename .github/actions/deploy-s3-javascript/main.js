const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  const bucketName = core.getInput('bucket');

  core.notice('JS Action - BucketName=' + bucketName );

  core.setOutput('url', 'Test :)');
}

run();