import React from 'react'
import{FaFacebook ,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa6";
function Footer(){
  return (
   <>
   <hr/>
   <footer className='py-12 '>
     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20px'>
      <div className=' flex flex-col items-center justify-center space-x-4 '>
        <div className='flex space-x-4'>
        <FaFacebook size={24} />
        <FaTwitter size={24}/>
        <FaInstagram size={24}/>
        <FaLinkedinIn size={24}/>
        </div>
        <div className='mt-8 border-t border-gray-700  pt-8 items-center'>
          <p className='text-sm'>
            &copy; 2024 your Company all Right Recived
          </p>
          <p className='text-sm mx-10'>Supportive Partner ❤️ Ankush</p>
        </div>
      </div>
     </div>
  </footer>
   </>
  )
}

export default Footer
