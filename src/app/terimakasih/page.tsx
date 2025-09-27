import React from 'react'

const Thankyou = () => {
    return (
        <div className='h-screen w-screen'>
            <h1 className='w-full text-5xl text-center p-10 text-white bg-primary font-bold align-middle mt-40'>Terima Kasih sudah mendaftar</h1>
            <p className='text-center text-black'>Kami akan segera menghubungi anda melalui email atau nomor telepon yang telah didaftarkan.</p>
            <p className='text-center text-black mt-5'>Jika ada pertanyaan, silakan hubungi kami di:</p>
            <p className='w-full flex justify-center'>
                <a href="https://wa.me/089601085905" target='blank' className='text-center text-white bg-accent p-2 mt-2 border-b-3 text-xs border-third rounded-md'>Whatsapp</a>
            </p>
            <div className='w-full flex justify-center'>
                <a href='https://www.smpitalbanna.sch.id' className='text-primary mt-5 mx-auto bg-white border-b-3 border-primary p-2 font-semibold text-sm rounded-full hover:bg-primary hover:text-white hover:border-slate-300'>Info Sekolah</a>
            </div>

        </div>
    )
}

export default Thankyou