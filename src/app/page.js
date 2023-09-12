import Main from '@/components/Main'
import Topside from '@/components/Topside'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full flex flex-col'>
      <Topside />
      <Main />
    </main>
  )
}
