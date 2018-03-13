pipeline {
  agent {
    node {
      label 'seed'
    }
    
  }
  stages {
    stage('Dev') {
      steps {
        sh 'npm run build'
      }
    }
  }
}