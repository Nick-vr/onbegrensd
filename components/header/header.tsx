// 'use client'
// import { useContext } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import AppContext from '../../app/appContext'

// import OnbegrensdLogoLight from '../../public/onbegrensd-small-light.svg'
// import OnbegrensdLogoDark from '../../public/onbegrensd-small-dark.svg'
// import OnbegrensdOutlineLogoLight from '../../public/onbegrensd-logo-white.svg'
// import OnbegrensdOutlineLogoDark from '../../public/onbegrensd-logo-black.svg'
// import Basket from '../../public/basket.svg'

// import S from './header.module.scss'
// // import BurgerMenu from '../BurgerMenu/BurgerMenu'

// const Header = () => {
//   const theme = useContext(AppContext)
//   console.log(theme.primary)
//   window.location.pathname === '/'
//     ? (theme.primary = true)
//     : (theme.primary = false)

//   return (
//     <header>
//       {/* <BurgerMenu /> */}
//       <div>
//         <Link href="/">
//           <Image
//             src={
//               theme.primary
//                 ? OnbegrensdOutlineLogoLight
//                 : OnbegrensdOutlineLogoDark
//             }
//             alt="onbegrensd"
//             height={40}
//           />
//         </Link>
//       </div>
//       {/* <S.BasketWrapper>
//         <Image src={Basket} alt="basket" />
//       </S.BasketWrapper> */}
//     </header>
//   )
// }

// export default Header
