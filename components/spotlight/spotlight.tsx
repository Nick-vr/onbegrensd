import { useEffect, useState } from 'react'
import pb from '../../utils/initPocketbase'

// components
// assets
import SpotlightItem from './spotlightItem'
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
    console.log(records)
    setSpotlight(records)
    setLoading(false)
  }

  useEffect(() => {
    fetchSpotlight().catch(console.error)
  }, [])

  return (
    <section className={S.spotlightWrapper}>
      <h3 id="spotlight">In de spotlight</h3>
      {loading ? <LoadingSpotlight /> : <SpotlightItem spotlight={spotlight} />}
    </section>
  )
}

export default Spotlight
