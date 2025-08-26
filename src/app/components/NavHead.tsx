import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

function NavHead() {
  return (
    <main className='bg-surface'>
      <div className='max-w-7xl mx-auto flex py-2 justify-between'>
      {/* left  */}
      <div className='flex items-center gap-4'>
        {/* contract  */}
        <div className='flex items-center gap-1'>
          <MdOutlineEmail />
          <h5>text@gmail.com</h5>
        </div>
        {/* phon number */}
        <div className='flex items-center gap-1'>
          <FaPhoneAlt />
          <h5>+880 123456789</h5>
        </div>
      </div>
      {/* right  */}
      <div className='flex items-center gap-4'>
        {/* socal icon */}
        <Link href={"/"}><FaFacebookF /></Link>
        <Link href={"/"}><FaTwitter /></Link>
        <Link href={"/"}><FaInstagram /></Link>
        <Link href={"/"}><FaLinkedin /></Link>
      </div>
    </div>
    </main>
  )
}

export default NavHead