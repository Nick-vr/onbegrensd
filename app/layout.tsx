import { ReactNode } from 'react'
import { Space_Grotesk } from '@next/font/google'

// components
import LayoutBody from '../components/layoutBody/layoutBody'
// assets
// styles
import 'normalize.css/normalize.css'
import './globals/globals.scss'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
})

type Props = {
  children?: ReactNode
}

export const metadata = {
  title: 'ONBGRENSD',
  description: 'onbegrensd custom clothing webshop',
  icons: {
    icon: '/favicon-16x16.png',
    shortcut: '/favicon-16x16.png',
  },
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="nl" className={spaceGrotesk.className}>
      <body>
        <LayoutBody children={children} />
      </body>
    </html>
  )
}
