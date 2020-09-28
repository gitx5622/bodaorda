pipeline {
environment {
registry = "gits5622/boda_orda"
registryCredential = 'docker-hub'
dockerImage = ''
}
agent any
stages {
stage('Cloning our Git') {
steps {
git 'https://github.com/gitx5622/boda_orda.git'
}
}
stage('Building our image') {
steps{
script {
dockerImage = docker.build registry + ":$BUILD_NUMBER"
}
}
}
stage('Deploy our image') {
steps{
script {
docker.withRegistry( '', registryCredential ) {
dockerImage.push()
}
}
}
}

}
}