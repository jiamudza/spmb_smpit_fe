'use client'
import axios from 'axios';
import React, { useState } from 'react'

const RegistForm = () => {
    const [salary, setSalary] = useState("");
    const options = [
        { value: "0", label: "Tidak Berpenghasilan" },
        { value: "<1jt", label: "< Rp1.000.000" },
        { value: "1-3jt", label: "Rp1.000.000 – Rp3.000.000" },
        { value: "3-5jt", label: "Rp3.000.000 – Rp5.000.000" },
        { value: "5-10jt", label: "Rp5.000.000 – Rp10.000.000" },
        { value: ">10jt", label: "> Rp10.000.000" },
    ];

    const [preview, setPreview] = useState<string | null>(null);

    const [registData, setRegistData] = useState({
        nama_lengkap: '',
        nama_panggilan: '',
        jenis_kelamin: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        NIK: '',
        NKK: '',
        alamat_lengkap: '',
        asal_sekolah: '',
        NISN: '',
        email: '',
        riwayat_penyakit: '',
        anak_ke: '',
        pilihan_program: '',
        foto: null as File | null,
        // Data Orang Tua
        nama_ayah: '',
        tempat_lahir_ayah: '',
        tanggal_lahir_ayah: '',
        no_wa_ayah: '',
        email_ayah: '',
        pekerjaan_ayah: '',
        gaji_ayah: '',
        nama_ibu: '',
        tempat_lahir_ibu: '',
        tanggal_lahir_ibu: '',
        no_wa_ibu: '',
        email_ibu: '',
        pekerjaan_ibu: '',
        gaji_ibu: '',
    });

      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Konversi File foto jadi nama file saja atau base64 jika perlu
    const dataToSend = {
      ...registData,
      foto: registData.foto ? registData.foto.name : null
    };

    axios.post('https://spmb-smpit-albanna.vercel.app/students', dataToSend)
      .then(res => {
        console.log('Success:', res.data);
        alert('Student data submitted!');
      })
      .catch(err => {
        console.error('Error POST:', err.response?.data || err.message);
        alert('Failed to submit student data.');
      });
  };


    // handle input teks / select
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setRegistData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setPreview(file ? URL.createObjectURL(file) : null);
        setRegistData((prev) => ({
            ...prev,
            foto: file,
        }));
    };

    return (
        <div className='p-2
        lg:p-10 text-primary bg-background h-full'>
            {/* JUDUL */}
            <h1 className='text-3xl font-bold text-center'>
                Halaman Formulir Pendaftaran SPMB
            </h1>
            {/* FORMULIR */}
            <div className='overflow-hidden'>
                <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-3 py-2'>
                    {/* SEPARATE */}
                    {/* left */}
                    <div className='flex-1/2 bg-white p-5 lg:p-10 rounded-lg shadow-lg border-b-4 border-third overflow-y-scroll h-full scrollbar-hide '>
                        {/* Judul */}
                        <h2 className='text-lg font-bold text-center mb-5 p-2 bg-accent text-white'>Data Diri Calon Siswa/Siswi</h2>
                        {/* NAMA LENGKAP */}
                        <div className='mt-2'>
                            <label htmlFor="nama_lengkap" className='block font-semibold mb-2 text-sm '>Nama Lengkap</label>
                            <input type="text"
                                id="nama_lengkap"
                                name="nama_lengkap"
                                onChange={handleChange}
                                className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Nama Lengkap'
                            />
                        </div>
                        {/* NAMA PANGGILAN */}
                        <div className='mt-5'>
                            <label htmlFor="nama_panggilan" className='block font-semibold mb-2 text-sm '>Nama Panggilan</label>
                            <input type="text" id='nama_panggilan'
                                name="nama_panggilan"
                                onChange={handleChange}
                                className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Nama Panggilan' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="jenis_kelamin" className='block font-semibold mb-2 text-sm '>Jenis Kelamin</label>
                            <div className='flex items-center gap-5'>
                                <div
                                    className='flex items-center'>
                                    <input type="radio" name='jenis_kelamin' id='laki-laki' className='mr-2' value="Laki-laki" onChange={handleChange} />
                                    <label htmlFor="laki-laki" className='text-xs'>Laki-laki</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" name='jenis_kelamin' id='perempuan' className='mr-2' value="Perempuan"
                                        onChange={handleChange} />
                                    <label htmlFor="perempuan" className='text-xs'>Perempuan</label>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="tempat_lahir" className='block font-semibold mb-2 text-sm '>Tempat Lahir</label>
                                <input type="text" id='tempat_lahir'
                                    name='tempat_lahir' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='Daerah Tempat Lahir' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="tanggal_lahir" className='block font-semibold mb-2 text-sm '>Tanggal Lahir</label>
                                <input type="date" id='tanggal_lahir'
                                    name='tanggal_lahir' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='Daerah Tempat Lahir' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="NIK" className='block font-semibold mb-2 text-sm '>Nomor Induk Keluarga (NIK)</label>
                                <input type="number" id='NIK' name="NIK"
                                    onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='Nomor Induk Keluarga' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="NKK" className='block font-semibold mb-2 text-sm '>Nomor Kartu Keluarga (NKK)</label>
                                <input type="number" id='NKK' name='NKK' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='Nomor Kartu Keluarga' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="alamat_lengkap" className='block font-semibold mb-2 text-sm '>Alamat Lengkap</label>
                                <input type="text" id='alamat_lengkap' name='alamat_lengkap' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='Alamat' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="asal_sekolah" className='block font-semibold mb-2 text-sm '>Asal Sekolah</label>
                                <input type="text" id='asal_sekolah' name='asal_sekolah'
                                    onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='SD tempat bersekolah' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="NISN" className='block font-semibold mb-2 text-sm '>NISN</label>
                                <input type="number" id='NISN'
                                    name='NISN'
                                    onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='Nomor Induk Siswa Nasional' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="email" className='block font-semibold mb-2 text-sm '>E-mail Aktif</label>
                                <input type="email" id='email'
                                    name='email'
                                    onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='E-mail' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="riwayat_penyakit" className='block font-semibold mb-2 text-sm '>Riwayat Penyakit</label>
                                <input type="text" id='riwayat_penyakit' name='riwayat_penyakit'
                                    onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='Riwayat Penyakit (kosongkan jika tidak ada)' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="Anak ke-" className='block font-semibold mb-2 text-sm '>Anak ke-</label>
                                <input type="number" id='anak_ke' name='anak_ke'
                                    onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                    placeholder='Urutan Kelahiran' />
                            </div>
                            {/* PILIHAN PROGRAM */}
                            <div className='mt-5'>
                                <label htmlFor="pilihan_program" className='block font-semibold mb-2 text-sm '>Pilihan Program</label>
                                <div className='flex flex-col lg:flex-row gap-5 lg:items-center'>

                                    <div>
                                        <input type="radio" name='pilihan_program'
                                            value={"Reguler"} onChange={handleChange}
                                            id='reguler' className='mr-2' />
                                        <label htmlFor="reguler" className='text-xs'>Reguler</label>
                                    </div>
                                    <div>
                                        <input type="radio" name='pilihan_program'
                                            value={"Prestasi"} onChange={handleChange}
                                            id='unggulan' className='mr-2' />
                                        <label htmlFor="unggulan" className='text-xs'>Prestasi</label>
                                    </div>
                                    <div>
                                        <input type="radio" name='pilihan_program' id='internasional'
                                            value={"Boarding"} onChange={handleChange}
                                            className='mr-2' />
                                        <label htmlFor="internasional" className='text-xs'>Boarding</label>
                                    </div>
                                    <a href='https://www.kompas.com' target='blank' className='bg-primary text-white text-[10px] lg:text-sm font-semibold rounded-md p-2 w-30 text-center overflow-hidden'>Apa Bedanya?</a>

                                </div>
                                <div className='mt-5'>
                                    <label htmlFor="foto" className='block font-semibold mb-2 text-sm '>Foto</label>
                                    <label htmlFor='foto'
                                        className='cursor-pointer inline-block text-placeholder px-4 py-2 rounded-full text-xs border border-b-3 border-third hover:bg-primary hover:text-white transition-all duration-300'
                                    >Pilih Foto</label>
                                    <input type="file" accept='image/*' id='foto' className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs hidden'
                                        onChange={handleFileChange}
                                    />

                                    {preview && (
                                        <div className='mt-2'>
                                            <img src={preview} alt="Preview" className='w-20 h-20 object-cover rounded-md' />
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* right */}
                    <div className='flex-1/2 bg-white p-5 lg:p-10 rounded-md border-b-4 border-third shadow-lg overflow-y-scroll h-full scrollbar-hide'>
                        {/* Judul */}
                        <h2 className='text-lg font-bold text-center mb-5 p-2 bg-accent text-white'>Data Orang Tua</h2>
                        <h3 className='text-sm font-bold py-2 text-center bg-primary text-white w-full'>Data Ayah</h3>

                        <div className='mt-5'>
                            <label htmlFor="nama_ayah" className='block font-semibold mb-2 text-sm '>Nama</label>
                            <input type="text" id='nama_ayah' name='nama_ayah' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Nama Ayah' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="tempat_lahir_ayah" className='block font-semibold mb-2 text-sm '>Tempat Lahir</label>
                            <input type="text" id='tempat_lahir_ayah' name='tempat_lahir_ayah' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Daerah Tempat Lahir' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="tanggal_lahir_ayah" className='block font-semibold mb-2 text-sm '>Tanggal Lahir</label>
                            <input type="date" id='tanggal_lahir_ayah' name='tanggal_lahir_ayah' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Daerah Tempat Lahir' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="no_wa_ayah" className='block font-semibold mb-2 text-sm '>No. Telp/HP (Aktif WA)</label>
                            <input type="number" id='no_wa_ayah' name='no_wa_ayah' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Nomor Handphone' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="email_ayah" className='block font-semibold mb-2 text-sm '>E-Mail</label>
                            <input type="email" id='email_ayah' name='email_ayah' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='E-mail' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="pekerjaan_ayah" className='block font-semibold mb-2 text-sm '>Pekerjaan</label>
                            <input type="text" id='pekerjaan_ayah' name='pekerjaan_ayah' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Pekerjaan' />
                        </div>
                        <div className='mt-5'>
                            <label className="block text-sm font-semibold mb-2">
                                Gaji Ayah per Bulan
                            </label>
                            <select
                                name="gaji_ayah"
                                value={registData.gaji_ayah}
                                onChange={handleChange}
                                className="w-full border py-2 px-4 text-xs focus:outline-none rounded-full appearance-none border-b-3 border-third"
                            >
                                <option value="">-- Pilih Gaji --</option>
                                {options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>

                            {salary && (
                                <p className="mt-2 text-sm text-gray-600">
                                    Pilihan: <span className="font-medium">{salary}</span>
                                </p>
                            )}
                        </div>
                        <h3 className='text-sm font-bold py-2 text-center bg-primary text-white w-full mt-10'>Data Ibu</h3>

                        <div className='mt-5'>
                            <label htmlFor="nama_ibu" className='block font-semibold mb-2 text-sm '>Nama</label>
                            <input type="text" id='nama_ibu' name='nama_ibu' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Nama Ibu' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="tempat_lahir_ibu" className='block font-semibold mb-2 text-sm '>Tempat Lahir</label>
                            <input type="text" id='tempat_lahir_ibu' name='tempat_lahir_ibu' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Daerah Tempat Lahir' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="tanggal_lahir_ibu" className='block font-semibold mb-2 text-sm '>Tanggal Lahir</label>
                            <input type="date" id='tanggal_lahir_ibu' name='tanggal_lahir_ibu' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="no_wa_ibu" className='block font-semibold mb-2 text-sm '>No. Telp/HP (Aktif WA)</label>
                            <input type="number" id='no_wa_ibu' name='no_wa_ibu' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='Nomor Handphone' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="email_ibu" className='block font-semibold mb-2 text-sm '>E-Mail</label>
                            <input type="email" id='email_ibu' name='email_ibu' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                                placeholder='E-mail' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="pekerjaan_ibu" className='block font-semibold mb-2 text-sm '>Pekerjaan</label>
                            <input type="text" id='pekerjaan_ibu' name='pekerjaan_ibu' onChange={handleChange} className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs'
                            placeholder='Pekerjaan' />
                        </div>
                        <div className='mt-5'>
                            <label className="block text-sm font-semibold mb-2">
                                Gaji Ibu per Bulan
                            </label>
                            <select
                                name="gaji_ibu"
                                value={registData.gaji_ibu}
                                onChange={handleChange}
                                className="w-full border py-2 px-4 text-xs focus:outline-none rounded-full appearance-none border-b-3 border-third"
                            >
                                <option value="">-- Pilih Gaji --</option>
                                {options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>

                            {salary && (
                                <p className="mt-2 text-sm text-gray-600">
                                    Pilihan: <span className="font-medium">{salary}</span>
                                </p>
                            )}
                        </div>
                        {/* BUTTON SUBMIT */}
                        <div className='mt-10 text-center'>
                            <button type='submit' className='bg-primary text-white text-sm font-semibold rounded-md p-2 w-1/2 hover:bg-secondary transition-all duration-300'>Kirim Formulir</button>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default RegistForm