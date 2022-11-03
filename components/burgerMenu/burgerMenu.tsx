import { useEffect, useState } from 'react'
import Link from 'next/link'
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
      <S.Burger clicked={clicked} onClick={handleClick}>
        <div className="burger-lines"></div>
      </S.Burger>
      <S.BurgerMenu clicked={clicked}>
        <ul>
          <Link href="/" onClick={handleClick}>
            <li>home</li>
          </Link>
          <Link href="/test">
            <li>shop</li>
          </Link>
          <ul>
            <Link href="/kids">
              <li>Hoodies</li>
            </Link>
            <Link href="/kids">
              <li>Truien</li>
            </Link>
            <Link href="/kids">
              <li>T-shirts</li>
            </Link>
          </ul>
          <Link href="/hij">
            <li>over ons</li>
          </Link>
        </ul>
      </S.BurgerMenu>
    </>
  )
}

export default BurgerMenu
