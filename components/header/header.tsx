'use client'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AppContext from '../../app/appContext'

// components
import BurgerMenu from '../burgerMenu/burgerMenu'
// assets
import OnbegrensdOutlineLogoLight from '../../public/onbegrensd-logo-white.svg'
import OnbegrensdOutlineLogoDark from '../../public/onbegrensd-logo-black.svg'
import Basket from '../../public/basket.svg'
// styles
import S from './header.module.scss'

const Header = () => {
  const theme = useContext(AppContext)

  useEffect(() => {
    window.location.pathname === ''
      ? (theme.primary = true)
      : (theme.primary = false)
  })

  return (
    <header className={theme.primary ? S.header : S.headerDark}>
      <div className={S.logoWrapper}>
        <Link href="/">
          <Image
            src={
              theme.primary
                ? OnbegrensdOutlineLogoLight
                : OnbegrensdOutlineLogoDark
            }
            alt="onbegrensd"
            height={40}
            width={40}
          />
        </Link>
      </div>
      <div className={S.basketBurgerWrapper}>
        <Image
          className="snipcart-checkout"
          src={Basket}
          alt="basket"
          width={28}
        />
        <BurgerMenu />
      </div>
    </header>
  )
}

export default Header
