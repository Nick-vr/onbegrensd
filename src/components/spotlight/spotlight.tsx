import { useEffect, useState } from 'react'
import pb from 'src/utils/initPocketbase'

// components
// assets
import SpotlightItems from './spotlightItems'
import LoadingSpotlight from './loadingSpotlight'
// styles
import S from './spotlight.module.scss'

const Spotlight = () => {
  const [spotlight, setSpotlight] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchSpotlight = async () => {
    const records = await pb
      .collection('spotlight')
      .getFullList(200 /* batch size */, {
        expand: 'product_id',
      })
    setSpotlight(records)
    setLoading(false)
  }

  useEffect(() => {
    fetchSpotlight().catch(console.error)
  }, [])

  return (
    <section className={S.spotlightWrapper}>
      <div id="spotlight" className={S.spotlight} />
      {loading ? (
        <LoadingSpotlight />
      ) : (
        <SpotlightItems spotlight={spotlight} />
      )}
    </section>
  )
}

export default Spotlight
