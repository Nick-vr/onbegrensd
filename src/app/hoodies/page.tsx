'use client'
import { useEffect, useState } from 'react'
import type { Metadata } from 'next'
import pb from 'src/utils/initPocketbase'
import { Rajdhani } from '@next/font/google'
// components
import CategoryItem from '@/components/categoryItem/categoryItem'
// assets
// styles
import S from './hoodies.module.scss'
import CategoryItems from '@/components/categoryItems/categoryItems'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '300',
})

const HoodiesPage = () => {
  useEffect(() => {
    document.title = 'Hoodies - ONBEGRENSD'
  })

  return (
    <div className={`${S.wrapper} ${rajdhani.className}`}>
      <h1 className={S.h1}>Hoodies</h1>
      <div className={S.itemWrapper}>
        <CategoryItems />
      </div>
    </div>
  )
}

export default HoodiesPage
