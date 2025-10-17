import { SwipeDown } from '../icons/icons'

export function ScrollDown () {
  return (
    <div className='scroll flex flex-col gap-1 justify-center items-center absolute bottom-4 left-1/2'>
      <p className='text-[#FD70A7] text-shadow-xs text-shadow-black space-grotesk font-bold text-xs md:text-2xl'>Desliza</p>
      <SwipeDown />
    </div>
  )
}
