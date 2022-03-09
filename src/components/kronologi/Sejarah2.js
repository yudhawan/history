import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Sejarah2({show,handleSejarah2}) {
  return (
    <div className={`${show?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
        <div className='bg-gray-500 bg-opacity-20 rounded-md w-[90vw] h-[80vh] '>
            <div className='bg-gray-400 rounded-full w-8 h-8 justify-center float-right items-center flex hover:animate-spin cursor-pointer  text-rose-700' onClick={handleSejarah2}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
            <div className='text-justify font-Ubuntu overflow-auto p-4 space-y-2 w-full h-[70vh] text-white '>
                <p>Pada masa pemerintahan Kertanegara inilah Singhasari berada di puncak kejayaannya. Kertanegara juga dianggap sebagai raja terbesar dan termahsyur dari kerajaan. Hal ini dapat dibuktikan dari wilayah kekuasaannya yang sangat luas sejak dipimpin oleh Kertanegara. Poesponegoro dan Notosusanto (1984: 437) menjelaskan bahwa kerajaan Singhasari berhasil menaklukan Pahang, Malayu, Gurun, Bakulapura, Jawa, Madura, dan Bali. Nama-nama wilayah itu tidak lain adalah wilayah semenanjung tanah Melayu, seluruh Sumatera, seluruh Kalimantan, seluruh Jawa dan Indonesia bagian Timur.</p>
                <p>Lebih dari itu, Kerajaan Singhasari juga dibuktikan telah melakukan beberapa kerja sama dengan kerajaan di seberang negeri. Misalkan seperti hubungan persahabatan dengan Campa. Hal ini diketahui berdasarkan isi prasasti Po Sah dekat Phanrang yang berangka tahun 1306 M. Dalam prasasti tersebut dikatakan bahwa salah satu permaisuri Raja Campa adalah seorang putri dari Jawa bernama Tapasi. Dalam berita lain disebutkan, ketika Campa hendak merebut daerah-daerah dari kekuasaan Annam mereka menderita kekalahan dan mencari perlindungan ke Jawa. Dengan demikian ini membuktikan bahwa pengaruh Kerajaan Singhasari di bawah kepemimpinan Kertanegara sangatlah besar, bahkan hingga negeri Campa.</p>
                <p>Dengan dibantu oleh pasukannya yang kuat, Kertanegara berhasil menaklukan Nusantara dan membuktikan posisinya sebagai penguasa di masa itu. Hal ini kemudian terdengar hingga Kerajaan Mongol dari Mongolia yang berdiri kokoh di daratan Cina. Pemimpin Kerajaan Mongol itu adalah Khubilai Khan, yang telah mendirikan kerajaan sejak tahun 1260 M. Sama seperti Kertanegara, Khubilai Khan juga berambisi kuat untuk meluaskan wilayah kekuasaan kerajaannya hingga keluar negeri. Poesponegoro dan Notosusanto (1984: 439) menjelaskan, beberapa negara di Asia Tenggara seperti Birma, Kamboja dan Campa terpaksa tunduk pada Khubilai Khan dengan harus mengirim upeti secara rutin pada kerajaan di Cina itu. Bila mereka menolak, pasukan Kerajaan Mongolia akan datang sambil membawa senjata, mengancam dan memaksa mereka.</p>
                <p>Tentu saja Khubilai Khan tidak luput untuk menyoroti Kerajaan Singhasari, yang pada saat itu merupakan penguasa terbesar di Nusantara. Pada tahun 1290 M, Khubilai Khan mengutus beberapa orang suruhannya untuk datang ke Pulau Jawa dan mengirimkan pesan darinya pada Kertanegara. Pesan itu tidak lain adalah sebuah perintah agar Jawa bersedia tunduk pada Kerajaan Mongol di bawah kekuasaan Khubilai Khan. Hal ini kemudian ditolak mentah-mentah oleh Raja Kertanegara, yang kemudian dengan tidak gentar beliau langsung melukai muka utusan Kerajaan Mongol tersebut, sebagai bukti bahwa ia mengecam penuh perintah Khubilai Khan. Pada beberapa sumber dikatakan, bahwa Kertanegara bahkan memotong telinga utusan itu. Hal ini menyulut amarah Khubilai Khan terhadap Kerajaan Singhasari. Di tahun 1292 M, armada tentara Mongol berlayar untuk menaklukan Jawa.</p>
                
            </div>
        </div>
    </div>
  )
}

export default Sejarah2