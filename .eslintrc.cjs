module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'standard',
    'plugin:astro/recommended'
  ],
  overrides: [
    {
      // Archivos .astro
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // ejemplo: permitir variables no usadas en Astro frontmatter
        'no-unused-vars': 'off'
      }
    }
  ]
}
