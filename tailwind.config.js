module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
        accent: 'var(--accent)',
      },
      minHeight: {
        frame: 'calc(100vh - 78px - 48px)',
      },
      fontFamily: {
        code: 'Source Code Pro,monospace',
      },
    },
  },
};
