
const contents = [
	{
		name: 'Accesories & Ears',
		percent: 9
	},
	{
		name: 'Arms',
		percent: 15
	},
	{
		name: 'Background',
		percent: 2
	},
	{
		name: 'Eye',
		percent: 32
	},
	{
		name: 'Glasses',
		percent: 3
	},
	{
		name: 'Hair & Hats',
		percent: 9
	},
	{
		name: 'Head',
		percent: 92
	},
	{
		name: 'Legs & Clothes',
		percent: 2
	},
	{
		name: 'Mouth',
		percent: 46
	}
	
]


export default function Content2() {


	return (
		<div className="grid  grid-cols-2 md:grid-cols-3 gap-4 h-[438px]">

		  {
		  	contents.map((content, index) => {

		  		const {name, percent} = content

		  		return (
		  			<button className="bg-deepblack flex flex-col items-center justify-center rounded-md text-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1200 " key={`${name}${index}`} >

		  				<p className='font-normal text-lightgray  text-xs '> {name} </p>
		  				<p className='font-extrabold text-xs    sm:text-base my-1'> Lorem ipsum </p>
		  				<p className='font-normal text-lightgray text-xs '> {percent}% </p>

		  			</button>
		  		)
		  	})
		  }
		</div>
	)
}