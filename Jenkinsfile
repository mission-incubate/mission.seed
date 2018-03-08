pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
    }
    
  }
  stages {
    stage('Dev') {
      steps {
        sh 'npm run build'
      }
    }
  }
  environment {
    env = 'dev'
  }
}