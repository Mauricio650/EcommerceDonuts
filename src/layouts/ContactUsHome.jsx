import { ContactInformation } from '../components/contactUsHome/ContactInformation'
import { FormEmail } from '../components/contactUsHome/FormEmail'
import { ContactUs } from '../components/contactUsHome/ContactUs'
import { Schedule } from '../components/contactUsHome/Schedule'

export function ContactUsHome () {
  return (
     <section className='bg-[#FCAAC8] w-full h-full p-2 sm:p-5 ring-3 ring-white rounded-4xl shadow-2xl shadow-black/70'>
      <section className='relative w-full h-full bg-[#FECBDE] rounded-4xl p-5 shadow-md shadow-black/20'>
        <ContactUs />
        <section className='w-full flex flex-col sm:flex-row gap-5'>
          <FormEmail />

          <section className='w-full sm:w-1/2 flex flex-col gap-2'>
            <article className='w-full h-1/2'>
              <ContactInformation />
            </article>

            <article className='w-full h-1/2'>
              <Schedule />
            </article>
          </section>

        </section>
        <section id='nosotros' className='w-full flex gap-3 flex-col md:flex-row mt-3'>
          <div className='flex flex-col w-full'>
            <p className='chewy-regular  text-2xl text-[#FD70A7] text-shadow-black text-shadow-xs'>📍 Parque Divino Niño S/D</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16924.452081301715!2d-74.78707685205083!3d10.92703719897995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d29f3fcf5e85%3A0x42d8190a355279f0!2sParque%20Divino%20Ni%C3%B1o%20Jes%C3%BAs!5e0!3m2!1ses-419!2sco!4v1758600007778!5m2!1ses-419!2sco'
              width='100%' height='450'
              style={{ border: 0, borderRadius: '5px' }}
              allowFullScreen='' loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>

          <div className='flex flex-col w-full'>
            <p className='chewy-regular  text-2xl text-[#FD70A7] text-shadow-black text-shadow-xs'>📍 Parque hipódromo</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.1963341453901!2d-74.77266829838516!3d10.927517039830631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5cdfc6ce004a3%3A0x8b3cb291c5be85b!2sParque%20Hip%C3%B3dromo!5e0!3m2!1ses-419!2sco!4v1758600094394!5m2!1ses-419!2sco'
              width='100%' height='450'
              style={{ border: 0, borderRadius: '5px' }}
              allowFullScreen='' loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>

        </section>
      </section>
    </section>
  )
}
