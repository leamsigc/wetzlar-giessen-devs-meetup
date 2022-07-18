module.exports = {
  apps: [
    {
      name: 'Giessen-Wetzlar-devs',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
