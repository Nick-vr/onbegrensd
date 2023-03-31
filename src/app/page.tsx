'use client'
import Image from 'next/image'

// components
import ShopButtons from '@/components/shopButtons/shopButtons'
import Spotlight from '@/components/spotlight/spotlight'
import Glitch from '@/components/glitch/glitch'
// assets
import ArrowDown from '@/public/arrow-down.svg'
// styles
import S from './page.module.scss'

const Home = () => {
  return (
    <>
      <section className={S.heroSection}>
        <div className={S.heroButtonsWrapper}>
          <ShopButtons />
        </div>
        <div className={S.arrowDownWrapper}>
          <a href="/#spotlight">
            <span>
              <h4>Spotlight</h4>
              <Image src={ArrowDown} alt="arrow down" />
            </span>
          </a>
        </div>
        <div className={S.heroBackground}></div>
      </section>
      <Glitch />
      <div className={S.wrapper}>
        <Spotlight />
      </div>
    </>
  )
}

export default Home
