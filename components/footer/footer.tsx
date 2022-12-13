import Link from 'next/link'
import Image from 'next/image'
// components
// assets
import OnbegrensdLogo from '../../public/onbegrensd.svg'
// styles
import S from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={S.footer}>
      <Link href="/">
        <Image src={OnbegrensdLogo} alt="onbegrensd" width={300} />
      </Link>
      <nav className={S.nav}>
        <ul>

          <li>
            <Link href="/">
              Home
            </Link>
          </li>

          <li><Link href="/over-ons">
            Over ons
          </Link></li>

<li>          <Link href="/contact">
            Contact
          </Link></li>

          <Link href="/gebruiksvoorwaarden">
            Gebruiksvoorwaarden
          </Link>

          <Link href="/verzendingen-en-retouren">
            Verzendingen en retouren
          </Link>

          <Link href="/privacybeleid">
            Privacybeleid
          </Link>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
