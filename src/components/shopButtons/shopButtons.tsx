import Link from 'next/link'
import S from './shopButtons.module.scss'

const ShopButton = () => {
  return (
    <>
      <Link href="/shop-all">
        <button className={S.shopButton}>
          shop
          <br />
          nu
        </button>
      </Link>
      <Link href="/custom">
        <button className={S.shopButton}>
          Creëer
          <br />
          zelf
        </button>
      </Link>
    </>
  )
}

export default ShopButton
