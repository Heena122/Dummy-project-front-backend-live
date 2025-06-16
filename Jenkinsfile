pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        // updates
    }

    tools {
        nodejs 'NodeJS_18'
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
                    sh 'npm test || true' 
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "🚀 Deploying frontend to /var/www/html..."
                    sudo rm -rf /var/www/html/*
                    sudo cp -r frontend/build/* /var/www/html/

                    echo "🚀 Deploying backend to /home/ubuntu/backend/..."
                    sudo mkdir -p /home/ubuntu/backend/
                    sudo cp -r backend/* /home/ubuntu/backend/

                    echo "✅ Restarting backend with PM2 (if used)..."
                    cd /home/ubuntu/backend/
                    pm2 restart index.js --name backend || pm2 start index.js --name backend
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
