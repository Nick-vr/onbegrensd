'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Space_Grotesk } from '@next/font/google'
// components
// assets
import trui from '@/public/trui.png'
// styles
import S from './categoryItem.module.scss'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: '300',
})

type Props = {
  name: String
}

interface Color {
  name: string
  hex: string
}

const colors: Color[] = [
  { name: 'Black', hex: '#080808' },
  { name: 'Charcoal Heather', hex: '#463e3d' },
  { name: 'Carbon Grey', hex: '#c7c3be' },
  { name: 'Navy Blazer', hex: '#171f2c' },
  { name: 'White', hex: '#ffffff' },
]
const sizes = ['S', 'M', 'L', 'XL']

// Size component
const Size = () => {
  const [sizeClicked, setSizeClicked] = useState({})
  const handleClick = (index) => {
    setSizeClicked((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }))
  }

  return (
    <div className={S.wrapper}>
      <span className={S.text}>MAAT</span>
      <div className={S.listWrapper}>
        {sizes.map((item: String, index) => (
          <div
            className={sizeClicked ? S.sizeClicked : S.size}
            key={index}
            onClick={handleClick}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Color component
const Color = () => {
  // const [clicked, setClicked] = useState(false)

  // const handleClick = () => {
  //   console.log('clicked')
  //   setClicked(!clicked)
  // }

  return (
    <div className={S.wrapper}>
      <span className={S.text}>KLEUR</span>
      <div className={S.listWrapper}>
        {colors.map((item: Color, id) => (
          <div
            style={{
              backgroundColor: `${item.hex}`,
              border: '1px solid #232323',
            }}
            className={S.color}
            key={id}
          >
            <span className={S.colorHover}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// main component
const CategoryItem = ({ name }: Props) => {
  // Set up the API request to get the product variants
  // const apiKey = process.env.NEXT_PUBLIC_PRINTFUL_KEY || ''
  // const apiUrl = process.env.NEXT_PUBLIC_PRINTFUL_URL
  // const requestUrl = `${apiUrl}/products/${productId}/variants`
  // const requestOptions = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`,
  //   },
  // }

  // const fetchProduct = async () => {
  //   // Make the API request
  //   fetch(requestUrl, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Extract the available color options from the response
  //       const availableColors = data.result.map((variant) => variant.color)
  //       console.log(availableColors)
  //     })
  //     .catch((error) => console.error(error))
  // }

  // useEffect(() => {
  //   fetchProduct().catch(console.error)
  // }, [])

  return (
    <div className={`${S.card} ${S.bgBlackBox} ${spaceGrotesk.className}`}>
      <h5>{name}</h5>
      <span className={S.price}>€ 69</span>
      <Image src={trui} alt="trui" width={229} height={306} />
      <Size />
      <Color />
      <button className={S.button}>In mijn winkelwagen</button>
    </div>
  )
}

export default CategoryItem
