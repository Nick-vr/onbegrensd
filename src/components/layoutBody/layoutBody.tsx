'use client'
import { ReactNode, useState } from 'react'
import Script from 'next/script'
import AppContext from '@/app/appContext'

// components
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
// assets
import { theme } from '@/app/globals/theme'
// styles

type Props = {
  children?: ReactNode
}
export default function LayoutBody({ children }: Props) {
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <AppContext.Provider value={theme}>
          <Header />
          <main style={{ overflowX: 'hidden' }}>{children}</main>
          <Footer />
        </AppContext.Provider>
      </div>
      <Script src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
      <div
        hidden
        id="snipcart"
        data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
      ></div>
    </>
  )
}
