import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold underline text-brand">
        Hello world!
      </h1>
    </>
  )
}
