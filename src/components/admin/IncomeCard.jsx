export function IncomeCard ({ incomeValue, title, color, pathImg }) {
  const colors = {
    red: 'bg-red-600',
    green: 'bg-green-600',
    blue: 'bg-blue-600',
    yellow: 'bg-yellow-600'
  }

  const colorsT = {
    red: 'text-red-600',
    green: 'text-green-600',
    blue: 'text-blue-600',
    yellow: 'text-yellow-600'
  }
  return (
    <article className='flex shadow-xl/20 flex-col justify-between lg:w-[400px] lg:h-[150px] bg-white rounded-xl'>
      <section className='flex flex-col sm:flex-row justify-between items-center p-5'>
        <div>
          <p className={`text-3xl space-grotesk text-shadow-2xs ${colorsT[color]} text-shadow-black/30`}>$ {incomeValue}</p>
          <p className='dancing-script text-xl mt-2 text-shadow-2xs text-shadow-black/30'>{title}</p>
        </div>
        <div>
          <img src={pathImg} alt={`logo of ${title}`} />
        </div>
      </section>
      <div className={`h-[42px] ${colors[color]} rounded-b-xl`} />
    </article>
  )
}
