import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white p-4">
      <Link href={"/"} className='text-2xl p-3 rounded-2xl hover:bg-violet-600'>
      Juamaya26
      </Link>
      <Link href={"/create"} className="inline-flex items-center px-4 py-2 font-medium text-center rounded-2xl bg-violet-400 hover:bg-violet-500">Create Student</Link>
      
   </nav>
  )
}

export default NavBar