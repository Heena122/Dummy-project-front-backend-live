pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    tools {
        nodejs 'NodeJS_18'  // name must match your Jenkins NodeJS tool config
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master',
                    credentialsId: 'github-credentials',
                    url: 'https://github.com/Heena122/Dummy-project-front-backend-live'
            }
        }

        stage('Install Frontend Dependencies') {
            workingDir 'frontend'
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Test Backend') {
            steps {
                dir('backend') {
                    sh 'npm test'  // optional: replace or remove if no tests
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step goes here...'
                // Example:
                // sh 'scp -r backend/* user@server:/path/to/backend'
                // sh 'scp -r frontend/build/* user@server:/var/www/html'
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline Completed Successfully!'
        }
        failure {
            echo '❌ CI/CD Pipeline Failed!'
        }
    }
}
