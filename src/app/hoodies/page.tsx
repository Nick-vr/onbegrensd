'use client'
import { Rajdhani } from '@next/font/google'
// components
import CategoryItem from '@/components/categoryItem/categoryItem'
// assets
// styles
import S from './hoodies.module.scss'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '300',
})

const HoodiesPage = () => {
  return (
    <div className={`${S.wrapper} ${rajdhani.className}`}>
      <h1 className={S.h1}>Hoodies</h1>
      <CategoryItem name="Unisex Hoodie" />
      <CategoryItem name="Crop Hoodie" />
      <CategoryItem name="Kids Hoodie" />
    </div>
  )
}

export default HoodiesPage
