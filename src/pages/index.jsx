import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl">Amazing charts template</h1>
        </div>
    )
}
