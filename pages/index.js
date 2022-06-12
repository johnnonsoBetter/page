import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Appbar from '../components/Appbar'
import Accordion from '../components/Accordion'
import HotLinks from '../components/HotLinks'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Test Project</title>
        <meta name="description" content="Test task project" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet" />
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
        
        
        <HotLinks />
        
        
        
        <div class="grid text-center  mt-20 px-6 gap-4 grid-cols-2 grid-rows-3">
          
            <div >
              <Accordion />
            </div>
            
              <div >
                <Accordion />
            </div>
            
            <div >
              column 3 
            </div>
        </div>
      </main>
      
    

      
    </div>
  )
}
