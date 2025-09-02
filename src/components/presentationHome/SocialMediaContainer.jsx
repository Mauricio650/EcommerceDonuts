import { Facebook, Instagram, Twitter } from '../icons/icons'

export function SocialMediaContainer () {
  return (
    <article className='flex justify-center gap-3 items-center absolute bottom-3 left-8'>
      <Instagram />
      <Facebook />
      <Twitter />
    </article>
  )
}
