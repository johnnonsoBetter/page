import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Appbar from '../components/Appbar'
import Accordion from '../components/Accordion'
import HotLinks from '../components/HotLinks'
import Content1 from '../components/Content1'
import Content2 from '../components/Content2'


export default function Home() {
  return (
    <div >
    <Head>
    <title>Test Project</title>
    <meta name="description" content="Test task project" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    
    <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"/>
    </Head>
    
    <Appbar />
    
    
    
    <main className='border-0 'style={{
      
      background: "linear-gradient(15.74deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(58, 39, 63, 0.6) 47.55%, #181818 90.7%)"

    }}  >
    <div className='border-0 h-[6px] ' 
    style={{
      
      background: "linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%)"

    }}
    >
    </div>
    
    <div className='p-6 relative' >
    <div className=" w-full">
    <Image src='/image1.png' width={1750} height={400} alt='image' className="object-cover rounded  w-full" />
    </div>
    <div  className='w-full relative flex justify-center'>
    <div className=" absolute   w-[149] -bottom-16 rounded-full border-0 
    " >
    
          <Image src='/elipse.jpg' width={149} height={149} alt='image' className="absolute   w-[149] -bottom-1 top-9 rounded-full border-0 " />
    
    </div>

    </div>
    
    </div>
    
    <div className='text-center  h-48 flex items-center flex-col justify-center mt-10' >
    <h1 className='text-white font-extrabold  text-4xl mt-2 '> 
    Lorem ipsum
    </h1>
    
    <p className='text-white text-sm font-normal  mt-2 mb-2' >
    Created by:
    <span className='text-lightred text-sm' > Lorem ipsum </span>
    
    </p>
    
    <p className='text-white  font-normal text-sm mt-2 mb-2' >
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
    </p>
    
    
    </div>
    
    
    <HotLinks />


    <div className=' w-full flex justify-center mt-20' >

    <div className="grid w-[80%]   gap-4 grid-cols-2 ">
    
    <div  >
    <Accordion activateOnFirstRender={true} contentToRender={<Content1 />}  />
    </div>
    
    <div >
    <Accordion showHelpIcon activateOnFirstRender={true} contentToRender={<Content2 />} />
    </div>

    <div className="col-start-1 col-end-7  grid  grid-cols-1" >
    <div className="col-start-1 col-end-7"> </div>
    
    </div>

    
    
    
    </div>

    </div>
    
    
    
    <div className=' w-full flex justify-center mt-10' >

    <div className="grid w-[80%]   gap-4 grid-cols-2 ">
    
    <div  >
    
    </div>
    
    <div >
    <Accordion   />
    </div>

    <div className="col-start-1 col-end-7  grid  grid-cols-1" >
    <div className="col-start-1 col-end-7"> </div>
    
    </div>

    
    
    
    </div>

    </div>

    

    </main>

    <footer className="h-[120px] flex items-center justify-center">
    
    
    <Image src="/lightlogo.png" alt=" Logo" width={195} height={23} />
    
    
    </footer>
    
    

    
    </div>
    )
}
