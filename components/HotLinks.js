

const iconUrls = [
  {
    id: 'fhsifsihfsdfs',
    svg: ()=> (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 18H4v-8h5v8zm-2-2v-4H6v4h1zm6 0V8h-1v8h1zm2 2h-5V6h5v12zm4-2V4h-1v12h1zm2 2h-5V2h5v16zm1 4H3v-2h19v2z" fill="rgba(243,243,243,1)"/></svg>) ,
     isItem: false

  },
  {
    id: '45fgsftwersdf',
    svg: ()=> (<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zM9 9V6.75A2.25 2.25 0 1 0 6.75 9H9zm-2.25 4H11v4.25A4.25 4.25 0 1 1 6.75 13zm0 2A2.25 2.25 0 1 0 9 17.25V15H6.75zm10.5-12.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zm0 6.5A2.25 2.25 0 1 0 15 6.75V9h2.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13zm2 2v2.25A2.25 2.25 0 1 0 17.25 15H15z" fill="rgba(243,243,243,1)"/></svg>)
    , isItem: true

  },
  
  {
    id: '22edwewrwe',
    svg: ()=> (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 7l8.445-5.63a1 1 0 0 1 1.11 0L21 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7zm2 1.07V20h14V8.07l-7-4.666L5 8.07zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(243,243,243,1)"/></svg>)
    , isItem: false

  }
]


export default function HotLinks() {
  
  return (
          
        <div className=' flex justify-center flex-wrap mt-5 space-x-1 text-white' >  
            
            {
              iconUrls.map(content => {

                const {id, svg, isItem} = content
                
                return (
                       
                         <div key={id} className={"flex flex-col sm:flex-row justify-between items-center  sm:justify-start p-3 rounded-md  " + (isItem ? 'bg-deepblack' : 'bg-tpblack')} >
                    
                            
                            <div className="sm:mr-2 text-center">
                            {svg()}
                            </div>
                            
                              <div className='font-extrabold  text-xs sm:text-sm text-white'>
                                Lorem ipsum
                              </div>
                        
                          
                        </div>
                )
              })
            }
        
        
        
      
        </div>
  )
}