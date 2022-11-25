'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'

// components
import ShopButton from '../components/shopButton/shopButton'
import Spotlight from '../components/spotlight/spotlight'
// assets
import ArrowDown from '../public/arrow-down.svg'
// styles
import S from './page.module.scss'

export default function Home() {
  // const fetchData = async () => {
  //   // const authData = await pb.admins.authWithPassword(
  //   //   pocketbaseEmail,
  //   //   pocketbasePass
  //   // )
  //   const result = await pb
  //     .collection('product')
  //     .getFullList(200 /* batch size */, {
  //       sort: '-created',
  //     })

  //   console.log(pb.authStore.isValid)
  //   console.log(pb.authStore.model)
  //   console.log(result)
  // }
  // useEffect(() => {
  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error)
  // }, [])
  return (
    <>
      <section className={S.heroSection}>
        <div className={S.heroTextWrapper}>
          <h3>
            Wat je niet wist
            <br />
            dat je nodig had
          </h3>
          <ShopButton />
        </div>
        <div className={S.arrowDownWrapper}>
          <Link href="/#spotlight">
            <span>
              <h4>Spotlight</h4>
              <Image src={ArrowDown} alt="arrow down" />
            </span>
          </Link>
        </div>
        <div className={S.heroBackground}></div>
      </section>
      <div className={S.wrapper}>
        <Spotlight />
      </div>
    </>
  )
}
