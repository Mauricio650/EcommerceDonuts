import { MarketHome } from '../layouts/MarketHome'
import { PresentationHome } from '../layouts/PresentationHome'
import { ContactUsHome } from '../layouts/ContactUsHome'
import { BtnCart } from '../components/BtnCart'
import { Cart } from '../components/Cart'

export function HomePage () {
  return (
    <>
      <BtnCart color='#FFFF' size={30} />
      <Cart />

      <section className='w-full h-screen p-2 sm:p-10 flex justify-center items-center '>
        <PresentationHome />
      </section>

      <main className='w-full h-full'>

        <section id='menu' className='w-full  p-2 sm:p-10'>
          <MarketHome />
        </section>

        <section id='contactos' className='w-full p-2 sm:p-10'>
          <ContactUsHome />
        </section>

      </main>
    </>
  )
}
