'use client'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// import AppContext from '@/app/appContext'

// components
import BurgerMenu from '../burgerMenu/burgerMenu'
// assets
import OnbegrensdOutlineLogoLight from '@/public/onbegrensd-logo-white.svg'
import OnbegrensdOutlineLogoDark from '@/public/onbegrensd-logo-black.svg'
import Basket from '@/public/basket.svg'
// styles
import S from './header.module.scss'

const Header = () => {
  const pathname = usePathname()
  const [dark, setDark] = useState(false)
  const [clicked, setClicked] = useState(false)
  const handleClick = () => setClicked(!clicked)

  useEffect(() => {
    pathname === '/' ? setDark(true) : setDark(false)
  })

  return (
    <header className={S.header}>
      <div className={S.logoWrapper}>
        <Link href="/">
          <Image
            src={dark ? OnbegrensdOutlineLogoLight : OnbegrensdOutlineLogoDark}
            alt="onbegrensd"
            height={40}
            width={40}
          />
        </Link>
      </div>
      <div className={S.basketBurgerWrapper}>
        <Image
          className={
            dark ? `snipcart-checkout` : `snipcart-checkout ${S.checkout}`
          }
          src={Basket}
          alt="basket"
          width={28}
        />
        <BurgerMenu clicked={clicked} handleClick={handleClick} dark={dark} />
      </div>
    </header>
  )
}

export default Header
