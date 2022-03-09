import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Sejarah({show, handleSejarah}) {
  return (
    <div className={`${show?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
        <div className='bg-gray-500 rounded-md w-[90vw] h-[80vh] bg-opacity-20'>
            <div className='bg-gray-400 rounded-full w-8 h-8 justify-center float-right items-center flex hover:animate-spin cursor-pointer  text-rose-700' onClick={handleSejarah}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
            <div className='text-justify font-Ubuntu overflow-auto p-4 space-y-2 w-full h-[70vh] text-white'>
                <p>Kerajaan Singhasari berdiri sejak tahun 1222 M dan diperkirakan runtuh pada 1292, setelah Singhasari yang pada saat itu berada di bawah pimpinan Raja Kertanegara diserang oleh Jayakatwang dari Kadiri. Selama berdiri sebagai salah satu kerajaan paling besar di Jawa, kerajaan ini dipimpin oleh sejumlah raja. Raja pertama yang juga pendiri Kerajaan Singhasari adalah Ken Angrok. Setelah Ken Angrok meninggal, Singhasari dipimpin oleh anak tirinya yang bernama Anusapati.  Raja Anusapati memerintah Kerajaan Singhasari sejak tahun 1227 M sampai 1248 M. Pada akhir pemerintahannya, Anusapati dibunuh oleh suruhan Tohjaya, anak dari Ken Angrok. Tohjaya kemudian menjadi raja baru di Singhasari, meski hanya  dalam waktu singkat. Kitab Pararaton (terjemahan Hardjowardojo, 1965) menyebutkan bahwa Tohjaya memerintah Singhasari selama satu tahun yakni sejak tahun 1249 M sampai 1250 M.</p>
                <p>Kepemimpinan Tohjaya yang singkat itu kemudian digantikan oleh Rangga Wuni atau yang kemudian dikenal sebagai Wisnuwarddhana. Rangga Wuni merupakan anak dari raja kedua Singhasari yakni Anusapati. Setelahnya, Singhasari dipimpin oleh sang anak yang bernama Kertanegara. Pada saat Kertanegara masih menjadi putra mahkota, Kertanegara telah memiliki kedudukan sebagai raja muda Singhasari, atau yang sering dikenal dengan sebutan yuwaraja atau kumamaraja (Poesponegoro dan Notosusanto, 1984). Sebagai seorang yuwaraja, ia diberi hak untuk memerintah suatu wilayah tertentu sebelum kemudian nanti menggantikan ayahnya, Wisnuwarddhana untuk memerintah seluruh kerajaan.</p>
                
            </div>
        </div>
    </div>
  )
}

export default Sejarah