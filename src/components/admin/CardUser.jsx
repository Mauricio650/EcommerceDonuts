import { PencilIcon, TrashIcon } from "../icons/icons"

export function CardUser({username,role}){
    return(
        <article className='p-2 space-grotesk text-shadow-xs text-shadow-black w-[300px] h-[120px] rounded-lg shadow-lg shadow-black/23 ring-2 ring-[#FD70A7]  bg-white flex flex-col justify-between items-center'>
        <div className='flex flex-col items-center gap-1'>
          <p className='text-2xl'>{username}</p>
          <span className='text-gray-600'>{role}</span>
        </div>

        <div className='flex justify-center gap-7 bg-[#FD70A7] shadow-2xs w-full h-full rounded items-center'>
          <div className='hover:scale-105 bg-white p-1 rounded-full cursor-pointer'>
            <PencilIcon />
          </div>
          <div className='hover:scale-105 bg-white p-1 rounded-full cursor-pointer'>
            <TrashIcon />
          </div>

        </div>
      </article>
    )
}