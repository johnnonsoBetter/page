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
                      <div key={url} class='bg-black px-4 py-2 rounded ' > 
                     <div class="flex space-x-2 items-center justify-center" >
                
                <i class={url}></i>

                <span class='font-small text-1xs text-white'>
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