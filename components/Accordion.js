import React, {useState, useRef, useEffect} from 'react' 


export default function Accordion({contentToRender, showHelpIcon = false, activateOnFirstRender=true}) {
  
  const contentArea = useRef(null)
  const [height, setHeight] = useState('0px')
  const [active, setActive] = useState(false)
  const [rotate, setRotate] = useState('transform-duration-700 ease')


  useEffect(() => {


    if(activateOnFirstRender && contentToRender){
      setActive(activateOnFirstRender)
      setHeight(`${contentArea.current.scrollHeight}px`)
      setRotate('transform duration-700 ease rotate-180')


    }
    
  }, [])
  
  
  
  function toggleAccordion() {

    if (!contentToRender)
      return
    setActive((prevState) => !prevState)
    setHeight(active ? '0px' : `${contentArea.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }
  
  return (
      <div  className="flex rounded px-7 py-7 justify-center bg-tpblack flex-col" style={{background: "rgba(13, 13, 13, 0.5);"}}>
      <button
        className=" box-border  appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
      <div className="flex items-center">

      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zM9 9V6.75A2.25 2.25 0 1 0 6.75 9H9zm-2.25 4H11v4.25A4.25 4.25 0 1 1 6.75 13zm0 2A2.25 2.25 0 1 0 9 17.25V15H6.75zm10.5-12.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zm0 6.5A2.25 2.25 0 1 0 15 6.75V9h2.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13zm2 2v2.25A2.25 2.25 0 1 0 17.25 15H15z" fill="rgba(243,243,243,1)"/></svg>

        <p className="inline-block text-footnote font-extrabold text-white light">Lorem ipsum</p>
       
        {
          showHelpIcon &&  <i className="ri-question-line ml-1" style={{color: '#A2A2A2'}}></i>
        }

      </div>
      {
          active ?
          <i className="ri-arrow-up-s-line text-white font-extrabold"></i>
          :
          <i className="ri-arrow-down-s-line text-white"></i>
        }
      
        
      </button>
      <div
        ref={contentArea}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto text-white text-left  transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-10 mt-5">
          {contentToRender}
        </div>
      </div>
    </div>
  )
}