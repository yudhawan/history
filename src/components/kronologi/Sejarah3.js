import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Sejarah3({show,handleSejarah3}) {
  return (
    <div className={`${show?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
        <div className='bg-gray-400 rounded-full z-10 w-8 h-8 justify-center items-center flex hover:animate-spin absolute cursor-pointer -mt-[79vh] -mr-[88vw] lg:-mr-[90vw] text-rose-700' onClick={handleSejarah3}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
        <div className='bg-white rounded-md w-[90vw] h-[80vh] '>
            <div className='text-justify lg:font-Roboto overflow-auto p-4 space-y-2 w-full h-full '>
                <p>Keberhasilannya menaklukan Nusantara membuktikan posisi Singhasari sebagai salah satu kerajaan paling berpengaruh di Indonesia. Meski pasukan Kerajaan Mongol datang untuk menggempur Jawa atas tindakan Kertanegara yang menolak penuh perintah Khubilai Khan, akan tetapi keruntuhan Singhasari bukan disebabkan oleh perang antara tentara Mongol tersebut.</p>
                <p>Kerajaan Singhasari kemudian runtuh pada tahun 1292 M setelah diserang Kerajaan Kadiri di bawah pimpinan Jayakatwang. Sejatinya Jayakatwang adalah keturunan Kertajaya, yang dulu pernah memerintah Kadiri di masa Singhasari masih dipimpin oleh Ken Angrok, raja pendirinya. Kertajaya tewas dibunuh oleh Ken Angrok dalam upaya perluasan wilayah kekuasaan Kerajaan Singhasari. Peristiwa ini menyebabkan luka dalam bagi anak-anak keturunan Kertajaya, termasuk Jayakatwang. Meski Kadiri secara simbolis telah tunduk di bawah kekuasaan Singhasari, juga karena Jayakatwang merupakan ipar dari raja Kertanegara, hal itu tetap tidak menghilangkan dendam yang luar biasa pada pendahulu Kerajaan Singhasari. Maka kemudian berkhianatlah Jayakatwang pada Kertanegara, sebagai upaya balas dendam karena pendahulunya telah dibunuh oleh pendahulu raja termahsyur Singhasari itu. </p>
                <p>Poesponegoro dan Notosusanto (1984: 445) menjelaskan, Jayakatwang dan pasukan Kadiri mulai menyerang Singhasari di tahun 1292 M dengan siasat penyerahan dua arah. Ketika pasukan Singhasari mengejar pasukan Kadiri, pasukan tersembunyi yang telah disipakan oleh Jayakatwang menggempur bagian keraton dan membunuh Kertanegara. Pada saat itu, raja Kertanegara tidak ikut di dalam pasukan karena tengah melakukan upacara keagamaan. Dengan gugurnya Kertanegara oleh pasukan Jayakatwang, Kerajaan Singhasari akhirnya runtuh dan berhasil dikuasai penuh oleh Kerajaan Kadiri. Raja Kertanegara dicandikan di Candi Singosari, Malang dan Candi Jawi, Pasuruan.</p>
                
            </div>
        </div>
    </div>
  )
}

export default Sejarah3