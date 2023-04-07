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

// mini component
const Size = () => {
  const sizes = ['S', 'M', 'L', 'XL']

  return (
    <div className={S.sizeWrapper}>
      <span className={S.sizeText}>MAAT</span>
      <div className={S.sizeListWrapper}>
        {sizes.map((item: String, id) => (
          <div className={S.size} key={id}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// mini component
const Color = () => {
  const colors = {
    red: 'red',
    blue: 'blue',
  }
  return (
    <div className={S.colorWrapper}>
      <span className={S.colorText}>KLEUR</span>
      <div className={S.sizeListWrapper}>
        {/* {colors.map((item: String, id) => (
          <div className={S.size} key={id}>
            <span>{item}</span>
          </div>
        ))} */}
      </div>
    </div>
  )
}

// main component
const CategoryItem = ({ name }: Props) => {
  return (
    <>
      <div className={S.card}>
        <div
          className={`${S.containerCard} ${S.bgBlackBox} ${spaceGrotesk.className}`}
        >
          <h5>{name}</h5>
          <span className={S.price}>€ 69</span>
          <Image src={trui} alt="trui" width={229} height={306} />
          <Size />
          <Color />
          <button>In mijn winkelwagen</button>
        </div>
      </div>
    </>
  )
}

export default CategoryItem
