import Image from 'next/image'
import Link from 'next/link'

const Search = () => {

  return (
    <div className=" w-[400px] mr-4 justify-center ">
    
      <label className="flex items-center bg-lowdark py-1  rounded-lg px-2">

        <svg xmlns="http://www.w3.org/2000/svg" className="mx-1" viewBox="0 0 24 24" width="17" height="17"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(162,162,162,1)"/></svg>
        <input type="email" name="email" 
        className="mt-1  px-2 pb-1 focus:outline-none border-0 font-semibold bg-lowdark text-lowpink w-full  sm:text-sm" placeholder="Lorem ipsum" />
      </label>
    </div>
  )
}


export default function Appbar() {
  
  return (
      <nav  className="relative  bg-deepblack ">
          <div className="  w-full  flex flex-wrap items-center justify-between p-4">
            
              <Link className="   text-black" href="/">
              
                <Image className="max-w-full h-5" width="195px" height="23px" src='/logo.png' alt='logo' />
              </a>
            
            
            <div className="flex items-center">

              <Search />

     
              <a  className='text-white font-extrabold mx-2  text-sm' href="#">Lorem</a>
              <a  className='text-white font-extrabold mx-3  text-sm  ' href="#">Lorem</a>
              <a  className='text-white font-extrabold mx-2 text-sm  ' href="#">Lorem</a>
            
            </div>
          </div>
      </nav>  
  )
}