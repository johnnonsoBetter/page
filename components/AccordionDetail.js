import React, {useState} from 'react' 

export default function AccordionDetail() {
    
    const [show, setOpen] = useState(true)
  
    return (
      
<div class="flex py-20 h-screen md:-mx-4">
      <div x-data={show:false}>
        <p class="flex">
          <a x-on:click.prevent="show=!show" class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 cursor-pointer focus:outline-none mr-2">
            Link with href
          </a>
          <button  @click="show=!show" class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 text-sm focus:outline-none" type="button">
            Button with data-target
          </button>
        </p> 
        <div x-show="show" class="border px-4 py-3 my-2 text-gray-700">
          This is an example of tailwind css collapse with alpine js and tailwindcss. This collapse is toggle by either the above button or a href anochor tags.
        </div>
    </div>
  </div>
    )
}




