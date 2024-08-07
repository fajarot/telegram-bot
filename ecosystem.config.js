module.exports = {
  apps: [
    {
      name: "telebot",
      script: "npm",
      args: "run jenkins",
      env: {
        JENKINS_ENV: "production",
      },
      env_jenkins: {
        JENKINS_ENV: "jenkins",
      },
      autorestart: true,
    },
    /*{
      name: "telebot-build",
      script: "npm",
      args: "run build",
      env: {
        JENKINS_ENV: "production",
        NODE_ENV: "production",
      },
      autorestart: false,
      watch: false,
    },*/
  ],
};
