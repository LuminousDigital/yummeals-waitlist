import localFont from 'next/font/local'

export const torusPro = localFont({
  src: [
    {
      path: '../public/fonts/TorusPro-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/TorusPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-torus-pro',
  display: 'swap',
  preload: true
})


