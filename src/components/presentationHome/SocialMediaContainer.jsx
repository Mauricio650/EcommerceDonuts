import { Facebook, Instagram, TikTokIcon, Twitter, WhatsappIcon } from '../icons/icons'

export function SocialMediaContainer () {
  return (
    <article className='flex justify-center gap-1 items-center absolute bottom-2 left-3'>
      <a className='cursor-pointer hover:scale-105' href='https://www.tiktok.com/@homersdonuts_?_t=ZS-90bkrpizF8n&_r=1' target='_blank' rel='noreferrer'><TikTokIcon /></a>
      <a className='cursor-pointer hover:scale-105' href='https://www.instagram.com/homersdonuts_?igsh=MWs4Yjc1aWtvcnJrdQ==' target='_blank' rel='noreferrer'><Instagram /></a>

      <a className='cursor-pointer hover:scale-105' href='https://www.facebook.com/share/17ZAMZf85k/?mibextid=wwXIfr' target='_blank' rel='noreferrer'><Facebook /></a>
      <a className='cursor-pointer hover:scale-105' href='https://api.whatsapp.com/send/?phone=57314%204246130&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0' target='_blank' rel='noreferrer'><WhatsappIcon></WhatsappIcon></a>
    </article>
  )
}
