// components
// assets
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
    </div>
  )
}

export default Custom
