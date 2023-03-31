'use client'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import AppContext from '@/app/appContext'
import { Rajdhani } from '@next/font/google'
// components
// assets
// styles
import S from './burgerMenu.module.scss'
// import { theme } from '../../app/globals/theme'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '300',
})

type Props = {
  clicked?: boolean
  handleClick: Function
}

const BurgerLinesLight = ({ clicked, handleClick }: Props) => {
  return (
    <>
      <div className={S.burger} onClick={handleClick}>
        <div className={clicked ? S.burgerLinesClicked : S.burgerLines}></div>
      </div>
    </>
  )
}

const BurgerLinesDark = ({ clicked, handleClick }: Props) => {
  return (
    <>
      <div className={S.burger} onClick={handleClick}>
        <div className={clicked ? S.burgerLinesDark : S.burgerLines}></div>
      </div>
    </>
  )
}

const BurgerMenu = () => {
  const theme = useContext(AppContext)
  const [clicked, setClicked] = useState(false)
  const handleClick = () => setClicked(!clicked)

  useEffect(() => {
    clicked
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [clicked])

  return (
    <>
      {theme.primary ? (
        <BurgerLinesLight clicked={clicked} handleClick={handleClick} />
      ) : (
        <BurgerLinesDark clicked={clicked} handleClick={handleClick} />
      )}

      <div className={clicked ? S.burgerMenuClicked : S.burgerMenu}>
        <ul className={rajdhani.className}>
          <Link href="/" onClick={handleClick}>
            <li>home</li>
          </Link>
          <div className={S.shopWrapper}>
            <Link className={S.noMargin} href="/shop-all" onClick={handleClick}>
              <li>shop</li>
            </Link>

            <ul>
              <Link href="/hoodies" onClick={handleClick}>
                <li>Hoodies</li>
              </Link>
              <Link href="/sweaters" onClick={handleClick}>
                <li>Sweaters</li>
              </Link>
              <Link href="/t-shirts" onClick={handleClick}>
                <li>T-shirts</li>
              </Link>
              <Link href="/custom" onClick={handleClick}>
                <li>Custom</li>
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
