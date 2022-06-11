


export default function Appbar() {
  
  return (
      <nav style={{backgroundColor: "#0D0D0D"}} class="relative w-full flex flex-wrap items-center justify-between py-1 text-gray-500  ">
          <div class=" w-full  flex flex-wrap items-center justify-between px-2">
            <div class="container-fluid">
              <a class=" text-black" href="/">
                <img src='/logo.png' alt='logo' />
              </a>
            </div>
            
            <div class="flex items-center">

     
                <a class=" text-xs text-white mx-2" href="#">Lorem</a>
                <a class="text-xs text-white mx-2" href="#">Lorem</a>
                <a class="text-xs text-white mx-2" href="#">Lorem</a>
            
            </div>
          </div>
      </nav>  
  )
}