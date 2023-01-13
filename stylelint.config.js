module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
 // rules: {vue:multi-word-component-names},
}

{
  "rules"; {
    "selector-class-pattern"; "^[a-z][a-z0-9-]+$",
    "selector-id-pattern"; "^[a-z][a-z0-9-]+$"
  }
}
{
  "rules"; {
    "selector-class-pattern"; "^[a-z][a-z0-9_-]+$",
    "selector-id-pattern"; "^[a-z][a-z0-9_-]+$"
  }
}


