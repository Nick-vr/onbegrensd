'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
// components
// assets
// styles
import S from './burgerMenu.module.scss'

const BurgerMenu = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => setClicked(!clicked)

  useEffect(() => {
    clicked
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [clicked])

  return (
    <>
      <div className={S.burger} onClick={handleClick}>
        <div className={clicked ? S.burgerLinesClicked : S.burgerLines}></div>
      </div>
      <div className={clicked ? S.burgerMenuClicked : S.burgerMenu}>
        <ul>
          <Link href="/" onClick={handleClick}>
            <li>home</li>
          </Link>
          <div className={S.shopWrapper}>
            <li className={S.noEffect}>shop</li>
            <ul>
              <Link href="/hoodies" onClick={handleClick}>
                <li>Hoodies</li>
              </Link>
              <Link href="/truien" onClick={handleClick}>
                <li>Truien</li>
              </Link>
              <Link href="/t-shirts" onClick={handleClick}>
                <li>T-shirts</li>
              </Link>
            </ul>
          </div>
          <Link href="/hij">
            <li>over ons</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default BurgerMenu
