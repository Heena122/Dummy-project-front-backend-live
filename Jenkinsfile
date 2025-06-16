pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    tools {
        nodejs 'NodeJS_18'  // name must match your Jenkins NodeJS tool config ghh
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
        sh '''
            echo "Deploying frontend to /var/www/html..."
            sudo cp -r frontend/build/* /var/www/html/

            echo "Deploying backend to /home/ubuntu/backend/..."
            sudo mkdir -p /home/ubuntu/backend/
            sudo cp -r backend/* /home/ubuntu/backend/
        '''
    }
}

//         stage('Deploy') {
//     steps {
//         sshagent (credentials: ['your-ssh-cred-id']) {
//             sh '''
//                 echo "Deploying frontend..."
//                 scp -o StrictHostKeyChecking=no -r frontend/build/* ubuntu@13.52.240.167:/var/www/html/

//                 echo "Deploying backend..."
//                 scp -o StrictHostKeyChecking=no -r backend/* ubuntu@13.52.240.167:/home/ubuntu/backend/
//             '''
//         }
//     }
// }

      
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
