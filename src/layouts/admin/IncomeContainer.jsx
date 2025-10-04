import { IncomeCard } from '../../components/admin/IncomeCard'
import { SpinnerLoading } from '../../components/SpinnerLoading'
import { useFetchTotalSales } from '../../hooks/usefetchTotalSales'

export function Income () {
  const { loading, totalSales } = useFetchTotalSales()

  return (
    <section className='w-full flex flex-col sm:flex-row gap-5'>

      {loading
        ? <div className='w-full h-full flex justify-center items-center'>
          <SpinnerLoading />
        </div>
        : <>
          <IncomeCard incomeValue={totalSales.salesTotalByMonth} pathImg='/img/ingresos.webp' title='Ingresos totales' color='green' />
          <IncomeCard incomeValue={totalSales.donut_total} pathImg='/img/donas.webp' title='Ingresos donuts' color='yellow' />
          <IncomeCard incomeValue={totalSales.strawberriesAndCream_total} pathImg='/img/fresa.webp' title='Strawberries and Cream' color='red' />
        </>}

    </section>
  )
}
