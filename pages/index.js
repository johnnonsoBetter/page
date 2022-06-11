import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Appbar from '../components/Appbar'
import AccordionDetail from '../components/AccordionDetail'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Test task project" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"/>
      </Head>
      
      <Appbar />
      
   
    
      <main class='border-0' >
        <div class='border-0 p-1' 
      style={{
          background: "linear-gradient(to right,  #665AEF 6.04%, #FC364C 88.42%);"

        }}
        >
        </div>
        
        <div class='p-6 relative' >
          <div class=" w-full">
            <img src='/image1.png' alt='image' class="object-fit rounded h-48 w-full" />
          </div>
          <div  class='w-full relative flex justify-center'>
             <img src='/elipse.jpg' alt='image' class="absolute  max-w-sm w-28 -bottom-16 rounded-full border-0 " />
          </div>
          
        </div>
        
        <div class='text-center h-48 flex items-center flex-col justify-center mt-10' >
          <h1 class='text-white font-extrabold font-medium text-3xl mt-2 '> 
            Lorem ipsum
          </h1>
          
          <p class='text-white font-medium text-1xl mt-2 mb-2' >
          Created by:
          <span class='text-red-900' > Lorem ipsum </span>
          
          </p>
          
           <p class='text-white  font-medium text-1xl mt-2 mb-2' >
          how are we going to make 
          the same timer that we 
          </p>
          
  
        </div>
        
        
        
        <div class=' flex justify-center flex-wrap mt-10 space-x-12 text-white' >  
          <div class='bg-black   px-5 py-2 rounded ' > 
            <div class="flex space-x-4 items-center justify-center" >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cat" class="w-6 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
            </svg>
            
                <p class='text-white   ' >
          Lorem ipsum
          </p>
            
            
  
            </div>
          </div>
          
          
               <div class='bg-black   px-5 py-2 rounded ' > 
            <div class="flex space-x-4 items-center justify-around" >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cat" class="w-8 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
            </svg>
            
                <p class='text-white   ' >
          Lorem ipsum
          </p>
            
            
  
            </div>
          </div>
          
               <div class='bg-black   px-5 py-2 rounded ' > 
            <div class="flex space-x-4 items-center justify-around" >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cat" class="w-8 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
            </svg>
            
                <p class='text-white   ' >
          Lorem ipsum
          </p>
            
            
  
            </div>
          </div>
      
        </div>
        
        
        
        <div class="grid text-center  mt-20 px-6 gap-4 grid-cols-2 grid-rows-3">
          
            <div >
              <AccordionDetail />
            </div>
            
              <div >
                <AccordionDetail />
            </div>
            
            <div >
              column 3 
            </div>
        </div>
      </main>
      
    

      
    </div>
  )
}
