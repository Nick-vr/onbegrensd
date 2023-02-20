import Image from 'next/image'
// components
// assets
import Selfie from '../../public/custom-selfie.svg'
// styles
import S from './custom.module.scss'

const Custom = () => {
  return (
    <div className={S.customWrapper}>
      <h1 className={S.title}>Custom</h1>
      <p className={S.intro}>
        Kies een kledingstuk. <br />
        Creëer je eigen stijl.
      </p>
      <button>Aan de slag</button>
      <Image src={Selfie} alt="selfie" />
    </div>
  )
}

export default Custom
