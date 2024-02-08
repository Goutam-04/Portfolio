import './globals.css'
import { Inter } from 'next/font/google'
import { joinClassNames } from "../classes/Constants";
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  const isMobile = 0;
  return (
<div className={joinClassNames("App", isMobile ? "Mobile" : "Desktop")}>
  <Footer/>
</div>
  )
}
