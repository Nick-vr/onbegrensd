import { Rajdhani } from '@next/font/google'

// components
// assets
// styles
import S from './glitch.module.scss'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '300',
})

export default function Glitch() {
  return (
    <aside className={`${S.wrapper} ${rajdhani.className}`}>
      <div className={S.glitchBlock}>
        <p className={S.text}>ONBEGRENSD</p>
        <p className={S.glitchedAnim}>ONBEGRENSD</p>
        <p className={S.glitchedAnim}>ONBEGRENSD</p>
        <p className={S.glitchedAnim}>ONBEGRENSD</p>
      </div>
    </aside>
  )
}
