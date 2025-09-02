import { useContext, useState } from 'react'
import { ContextFilters } from '../context/Filters'

export function Filters () {
  const { changeFilter, filters } = useContext(ContextFilters)
  const [price, setPrice] = useState(0)

  const handleChangePrice = (e) => {
    setPrice(e.target.value)
    changeFilter({ price: parseInt(e.target.value) })
  }

  console.log(filters)
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='w-[90%] ring-2 shadow-2xl shadow-black/30 ring-white space-grotesk flex flex-col lg:flex-row justify-center items-center mt-1 md:mt-5  lg:p-8 lg:gap-5 bg-[#FD70A7] rounded-4xl '>
        <label className='dancing-script text-white text-xl md:text-2xl' htmlFor='1452'>Productos</label>
        <select onChange={(e) => changeFilter({ products: e.target.value })} className='bg-white rounded cursor-pointer  text-[#FD70A7]' name='Productos' id='1452'>
          <option value='all'>All</option>
          <option value='donuts'>Donuts</option>
          <option value='strawberriesAndCream'>Fresas con crema</option>
        </select>
        <label className='dancing-script text-white text-2xl' htmlFor='321'>Precio</label>
        <input onChange={handleChangePrice} defaultValue={0} className='range-slider w-[150px]' type='range' min='0' max='20000' name='precio' id='321' />
        <span className='space-grotesk w-[20px] text-white text-center'>{price}$</span>
      </div>

    </section>
  )
}
