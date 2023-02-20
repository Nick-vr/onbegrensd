'use client'
import Image from 'next/image'

// components
import ShopButton from '../components/shopButton/shopButton'
import Spotlight from '../components/spotlight/spotlight'
// assets
import ArrowDown from '../public/arrow-down.svg'
// styles
import S from './page.module.scss'

const Home = () => {
  return (
    <>
      <section className={S.heroSection}>
        <div className={S.heroTextWrapper}>
          <h3>
            Onbegrensde keuzes
            <br />
            kies zelf wat je wil
          </h3>
          <ShopButton />
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
      <div className={S.wrapper}>
        <Spotlight />
      </div>
    </>
  )
}

export default Home
