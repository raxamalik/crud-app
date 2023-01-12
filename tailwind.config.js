/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      backgroundImage: {
        "deskimage":"linear-gradient(to bottom, #28282d9c, #28282d9c),url('https://images.ctfassets.net/lzny33ho1g45/47dSUoEKwNr6dpT3HiAObc/26f3e583bc1c65e1372785e41b1587ae/ideal_workspace?w=1400')"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
