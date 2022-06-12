const iconUrls = [
  'ri-numbers-line',
  'ri-apps-2-line',
  'ri-price-tag-line'
]


export default function HotLinks() {
  
  return (
          
        <div class=' flex justify-center flex-wrap mt-7 space-x-3 text-white' >  
            
            {
              iconUrls.map(url => {
                
                return (
                      <div key={url} class={url === 'ri-apps-2-line' ? 'h-[50px] w-[184px] flex items-center justify-center  bg-deepblack  rounded '  : 'bg-tpblack h-[50px] w-[184px] flex items-center justify-center rounded '}    > 
                     <div class="flex space-x-2 items-center justify-center" >
                
                <i class={url}></i>

                <span class='font-extrabold  text-1xs text-white'>
                  Lorem ipsum
                </span>
          
            </div>
          </div>
                )
              })
            }
        
        
        
      
        </div>
  )
}