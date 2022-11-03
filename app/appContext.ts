import { createContext, ReactNode } from 'react'

const AppContext = createContext({})

export default AppContext

// 'use client'
// import { createContext, ReactNode } from 'react'
// import { theme } from '../components/theme'

// const AppContext = createContext({})

// type Props = {
//   children?: ReactNode
// }

// export default function ThemeProvider({ children }: Props) {
//   return <AppContext.Provider value={theme}>{children}</AppContext.Provider>
// }
