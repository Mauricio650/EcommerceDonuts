import { IncomeCard } from '../../components/admin/IncomeCard'

export function Income () {
  return (
    <section className='w-full flex flex-col sm:flex-row gap-5'>

      <IncomeCard incomeValue={50000} pathImg='/img/ingresos.webp' title='Ingresos totales' color='green' />
      <IncomeCard incomeValue={50000} pathImg='/img/donas.webp' title='Ingresos donuts' color='yellow' />
      <IncomeCard incomeValue={50000} pathImg='/img/fresa.webp' title='Strawberries and Cream' color='red' />

    </section>
  )
}
