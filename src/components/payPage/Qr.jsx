export function Qr () {
  return (
    <article>
      <header>
        <p className='space-grotesk font-bold text-xs sm:text-md xl:text-lg  text-center stacked-fractions'>Por los momentos para compras por la web solo tenemos este
          medio de pago, si necesitas pagar de otra manera por favor
          toma captura a tu carrito de compras y escribemos a nuestro whatsapp y
          con gusto te ayudaremos.
        </p>
        <h1 className='chewy-regular text-[#F86EA4] text-shadow-2xs text-shadow-black text-xl  text-center'>QR Nequi 3052665478</h1>
      </header>
      <div className='w-full flex justify-center items-center '>
        <img className='w-50 rounded-sm filter drop-shadow-lg drop-shadow-black/30' src='img/qr.webp' alt='Qr de cuenta nequi de la empresa homer donuts' />
      </div>
    </article>
  )
}
