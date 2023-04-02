import Image from 'next/image'
import { Space_Grotesk } from '@next/font/google'
// components
// assets
import trui from '@/public/trui.png'
// styles
import S from './categoryItem.module.scss'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
})

type Props = {
  name: String
}

const CategoryItem = ({ name }: Props) => {
  return (
    <>
      <div className={S.card}>
        <div
          className={`${S.containerCard} ${S.bgBlackBox} ${spaceGrotesk.className}`}
        >
          <h5>{name}</h5>
          <Image src={trui} alt="trui" width={229} height={306} />
        </div>
      </div>
    </>
  )
}

export default CategoryItem
