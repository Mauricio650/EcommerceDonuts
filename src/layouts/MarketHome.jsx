import { SpinnerLoading } from '../components/SpinnerLoading'
import '../components/css/marketHome.css'
import { useGetProduct } from '../hooks/useGetProducts'
import { Filters } from '../components/marketHome/Filters'
import { useContext } from 'react'
import { ContextFilters } from '../context/Filters'
import { CardProduct } from '../components/MarketHome/CardProduct'

export function MarketHome () {
  const { products, loading, error } = useGetProduct()
  const { filters } = useContext(ContextFilters)

  const filteredProducts = [...products].filter((p) => {
    return (
      (filters.products === 'all' && filters.price === 0) ||
      (filters.products === p.type || filters.products === 'all') &&
      (filters.price === 0 || p.priceProduct <= filters.price)
    )
  })


  return (
    <section className='bg-[#FCAAC8] w-full h-full p-2 sm:p-5 ring-3 ring-white rounded-4xl shadow-2xl shadow-black/70'>
      <section className='relative w-full h-full bg-[#FECBDE] rounded-4xl shadow-md shadow-black/20'>

        <Filters />

        <section className='container-grid w-full max-h-[600px] overflow-y-auto p-5'>
          {loading && <SpinnerLoading />}
          {error && console.error(error)}
          {filteredProducts.map(p => {
            return <CardProduct key={p.id} {...p} />
          })}
        </section>

      </section>
    </section>
  )
}
