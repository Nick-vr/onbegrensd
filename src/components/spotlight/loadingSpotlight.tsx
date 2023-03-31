import Image from 'next/image'
// components
// assets
import Trui from '@/public/trui.png'
// styles
import S from './spotlight.module.scss'

const LoadingSpotlightItem = () => {
  return (
    <div className={S.spotlightPlaceholder}>
      <div className={S.spotlightItemName}></div>
      <div className={S.spotlightItemPrice}></div>
      <div className={S.spotlightItemInsideWrapper}>
        <Image src={Trui} alt="trui" />
        <button className={S.spotlightItemButton} disabled></button>
      </div>
    </div>
  )
}

const LoadingSpotlight = () => {
  return (
    <>
      <LoadingSpotlightItem />
      <LoadingSpotlightItem />
      <LoadingSpotlightItem />
    </>
  )
}

export default LoadingSpotlight
