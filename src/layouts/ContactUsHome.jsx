import { ContactInformation } from '../components/contactUsHome/ContactInformation'
import { FormEmail } from '../components/contactUsHome/FormEmail'
import { ContactUs } from '../components/contactUsHome/ContactUs'
import { Schedule } from '../components/contactUsHome/Schedule'

export function ContactUsHome () {
  return (
    <section className='bg-[#FCAAC8] w-full h-full p-2 sm:p-5 ring-3 ring-white rounded-4xl shadow-2xl shadow-black/70'>
      <section className='relative w-full h-full bg-[#FECBDE] p-5 sm:p-20 rounded-4xl shadow-md shadow-black/20'>
        <ContactUs />
        <section className='w-full flex gap-5'>
          <FormEmail />

          <section className='w-1/2 flex flex-col gap-3'>
            <article className='w-full h-1/2'>
              <ContactInformation />
            </article>

            <article className='w-full h-1/2'>
              <Schedule />
            </article>
          </section>

        </section>
        <section id='nosotros' className='w-full mt-3 rounded shadow-lg shadow-black/30'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3370950707435!2d-74.83006252423797!3d11.013315154778079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c4d4ad7ec73%3A0x9ab6eda3d5142548!2sCentro%20Comercial%20Buenavista!5e0!3m2!1ses-419!2sco!4v1756318444441!5m2!1ses-419!2sco'
            width='100%' height='450'
            style={{ border: 0 }}
            allowFullScreen='' loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </section>
      </section>
    </section>
  )
}
