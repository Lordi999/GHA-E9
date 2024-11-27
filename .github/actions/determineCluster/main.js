const core = require('@actions/core');

function run() {
  const environment = core.getInput('environment');
  const possibleClusters = core.getInput('clusters')
  var determinedCluster = 'Unknown';

  // Split the clusters string into an array
  const clusterArray = possibleClusters.split(',').map(cluster => cluster.trim());

  // Check if any cluster is a prefix of the environment string
  for (let cluster of clusterArray) {
      if (environment.startsWith(cluster)) {
        determinedCluster = cluster;
      }
  }

  core.setOutput('cluster', determinedCluster);
}

run();