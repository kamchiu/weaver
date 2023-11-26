const antfu = require('@antfu/eslint-config').default

const apps = 'apps/'
const nuxtPath = `${apps}/nuxt`

module.exports = antfu({
  extends: ['custom'],
  root: true,
  overrides: [
    // Package Overrides
    {
      files: ['./packages/**/*.{js,ts,vue}'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },

    // Nuxt Overrides
    {
      files: [`${nuxtPath}/components/**/*.{js,ts,vue}`, `${nuxtPath}/pages/**/*.{js,ts,vue}`, `${nuxtPath}/layouts/**/*.{js,ts,vue}`],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
})
