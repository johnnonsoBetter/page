import Link from 'next/link'

export default function Modal({openModal, setModalOpen, }) {
  
  return (
    <div 
    
    className="fixed animate-in  zoom-in zoom-out duration-300 fade-in z-40 top-0 right-0  bottom-0 h-[100vh] w-full   text-white  justify-center items-center flex z-50 outline-none focus:outline-none"
      style={{
        
        backgroundColor: "rgb(30 0 0 / 15%)", backdropFilter: "blur(3px)",
        
      }}
    >
    
   <div className="w-[60%]  py-5 drop-shadow-lg rounded-xl bg-darkpurple text-center" >
   
      <Link href='#' >
          <div className="text-sm border-b font-extrabold py-2" >
            Lorem ipsum 
          
          </div>
      </Link>
      
        <Link href='#' >
          <div className="text-sm border-b font-extrabold py-3" >
            Lorem ipsum 
          
          </div>
      </Link>
      
        <Link href='#' >
          <div className="text-sm border-b font-extrabold py-3" >
            Lorem ipsum 
          
          </div>
      </Link>
      
        
          <button onClick={()=> setModalOpen(false) } className="text-sm text-lightred  font-extrabold py-2" >
            Cancel
          
          </button>
      
      
      
      
      </div>
  
        
        
        
    </div>
  )
}