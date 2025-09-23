import { Facebook, Instagram, Twitter } from '../icons/icons'

export function SocialMediaContainer () {
  return (
    <article className='flex justify-center gap-1 items-center absolute bottom-2 left-3'>
      <a className='cursor-pointer hover:scale-105' href="https://www.instagram.com/homersdonuts_/" target='_blank'><Instagram /></a>
      <a className='cursor-pointer hover:scale-105' href="https://www.instagram.com/homersdonuts_/" target='_blank'><Twitter /></a>
      <a className='cursor-pointer hover:scale-105' href="https://www.instagram.com/homersdonuts_/" target='_blank'><Facebook /></a>
    </article>
  )
}
