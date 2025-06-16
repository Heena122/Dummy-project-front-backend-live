pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    tools {
        nodejs 'NodeJS_18'  // name must match your Jenkins NodeJS tool config ghhsdfsdf
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
        steps {
            dir('frontend') {
                sh '''
                    npm install
                    npm install -g vite
                '''
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
        sh '''
            echo "Deploying frontend to /var/www/html..."
            sudo cp -r frontend/build/* /var/www/html/

            echo "Deploying backend to /home/ubuntu/backend/..."
            sudo mkdir -p /home/ubuntu/backend/
            sudo cp -r backend/* /home/ubuntu/backend/
        '''
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
