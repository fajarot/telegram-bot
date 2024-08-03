module.exports = {
    apps: [{
        name: "telebot",
        script: "npm",
        args: "dev",
        env: {
            JENKINS_ENV: "production",
        },
        env_jenkins: {
            JENKINS_ENV: "jenkins",
        }
    }]
}

