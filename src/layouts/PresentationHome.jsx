import { SloganAndTitle } from '../components/presentationHome/ContainerSlogan'
import { Header } from '../components/presentationHome/Header'
import { Donut, DonutHalf } from '../components/icons/icons'
import { ScrollDown } from '../components/presentationHome/ScrollDown'
import { SocialMediaContainer } from '../components/presentationHome/SocialMediaContainer'

export function PresentationHome () {
  return (
    <section className=' bg-[#FCAAC8] w-full h-full ring-3 p-2 sm:p-5 ring-white rounded-4xl shadow-2xl shadow-black/70'>
      <section className='relative overflow-hidden w-full h-full bg-[#FECBDE] rounded-4xl shadow-md shadow-black/20'>
        <Donut />
        <DonutHalf />
        <Header />
        <SloganAndTitle />
        <SocialMediaContainer />
        <ScrollDown />
      </section>
    </section>
  )
}
