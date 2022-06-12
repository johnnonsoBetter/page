import React, {useState, useRef} from 'react' 


export default function Accordion({contentToRender, showHelpIcon}) {
  
  const [height, setHeight] = useState('0px')
  const [active, setActive] = useState(false)
  const [rotate, setRotate] = useState('transform-duration-700 ease')
  
  const contentArea = useRef(null)
  
  function toggleAccordion() {
    setActive((prevState) => !prevState)
    setHeight(active ? '0px' : `${contentArea.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }
  
  return (
      <div  className="flex rounded p-2 flex-col">
      <button
        className="py-6 box-border bg-dark-900  appearance-none cursor-pointer focus:outline-none flex items-center justify-start"
        onClick={toggleAccordion}
      >
      <i class="ri-apps-2-line"></i>
        <p className="inline-block text-footnote text-white light">Hello</p>
        
        {
          active ?
          <i class="ri-arrow-down-s-line"></i>
          :
          <i class="ri-arrow-up-s-line"></i>
        }
        
      </button>
      <div
        ref={contentArea}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto text-white text-left  transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-10">
          Please how do you expect me to send all of the whole money at once and make the same stages that we can stay from the same perspective that we are going to stay and make some really cool impact
        </div>
      </div>
    </div>
  )
}