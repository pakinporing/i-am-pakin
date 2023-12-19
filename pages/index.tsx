import Image from 'next/image'
import { Inter } from 'next/font/google'
import DetialSlide from '@/components/DetialSlide'
import UserSlide from '@/components/UserSlide'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col flex-1 w-full h-full gap-6 mx-auto xl:gap-10 xl:flex-row ${inter.className}`}
    >
      <UserSlide />
      <DetialSlide />
      {/* <div className=' flex w-full '>
        <Footer />
      </div> */}
    </main>
  )
}
