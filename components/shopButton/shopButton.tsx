import Link from 'next/link'
import S from './shopButton.module.scss'

const ShopButton = () => {
  return (
    <>
      <Link href="/shop-all">
        <button className={S.shopButton}>Shop nu</button>
      </Link>
    </>
  )
}

export default ShopButton
