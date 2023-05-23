import Link from "next/link";
import {GithubLogo, YoutubeLogo} from "phosphor-react";

export default function Home() {
  return (
    <div className='flex flex-col gap-y-6 h-screen md:w-screen px-5 sm:px-20 lg:px-80 py-24 bg-white'>
        <header className='flex justify-between mb-40'>
            <p className='text-xl font-bold'>Proyecto AdmonDB</p>
            <nav className='flex gap-x-8'>
                <Link className='hover:underline hover:text-sm' href='/login'>Ingresar</Link>
                <Link className='hover:underline hover:text-sm' href='/sign-up'>Registrarse</Link>
            </nav>
        </header>
        <h1 className='text-5xl'>Proyecto AdmonDB</h1>
    </div>
  )
}
