import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Sejarah({show, handleSejarah}) {
  return (
    <div className={`${show?'block fixed':'hidden'} top-0 self-center flex justify-center bg-transparent backdrop-blur-sm items-center w-full h-full lg:bg-opacity-70 bg-opacity-80 bg-black`}>
        <div className='bg-slate-100 rounded-md w-[90vw] h-[80vh]'>
          <div className='bg-gray-400 rounded-full w-8 h-8 justify-center float-right items-center flex hover:animate-spin cursor-pointer  text-rose-700' onClick={handleSejarah}><FontAwesomeIcon icon={faXmark} size={'lg'} /></div>
          <div className='text-justify overflow-auto p-4 space-y-2 w-full h-[70vh] font-semibold font-Ubuntu text-black'>
              <p>Singhasari merupakan salah satu kerajaan Hindu-Buddha yang berkembang di pulau Jawa pada abad ke-13. Kerajaan ini didirikan oleh Ken Angrok,  dan dalam perkembangannya kerajaan ini berhasil menjadi  salah satu kerajaan paling berpengaruh di Pulau Jawa, bahkan Nusantara. Kekuasaan Singhasari terdengar hingga Kerajaan Mongol dari Mongolia yang pernah menguasai dataran Cina.</p>
              <p>Kerajaan Singhasari berdiri tepatnya sejak tahun 1222 M dan diperkirakan runtuh pada 1292. Kerajaan yang didirikan oleh Ken Angrok ini juga memiliki sejumlah raja atau pemimpin kerajaan yang mumpuni. Adapun raja termahsyur dari Kerajaan Singhasari adalah Raja Kertanegara. Runtuhnya Singhasari pada akhir abad ke-13 itu disebabkan oleh penyerangan Jayakatwang dari Kadiri, yang dikatakan oleh Poesponegoro & Notosusanto (1984), insiden penyerangan ini tidak lain adalah karena upaya pembalasan dendam atas kematian pendahulunya.</p>
              <p>Garis besar Kerajaan Singhasari dituliskan pada beberapa dokumen kuno seperti Pararaton dan Nagarakretagama. Meski demikian, terdapat pula beberapa penafsiran yang berbeda antara dua kitab tersebut. Muljana (2005: 118) mengemukakan bahwa perbedaan itu misalkan terletak pada bagaimana Kitab Nagarakretagama tidak menyebutkan nama raja-raja Singhasari dan Majapahit dengan nama asli, namun hanya menggunakan nama Abhiseka, sementara pada Kitab Pararaton disebutkan nama aslinya. Perbedaan lain yang bisa dilihat juga terletak pada bagaimana Kitab Nagarakretagama tidak menjelaskan riwayat kehidupan Ken Angrok sebagai pendiri Kerajaan Singhasari, sementara Kitab Pararaton menjelaskan  dengan detail sejak masih di kandungan hingga menjadi pendiri kerajaan besar.</p>
              <p>Bila merujuk pada riwayat yang dituliskan pada Pararaton, masuk akal rupanya bila Nagarakretagama tidak mencantumkan asal-usul Ken Angrok yang terkenal sangat beringas dan jahat. Hal ini dikatakan oleh Muljana sebagai salah satu upaya untuk mencegah perspektif buruk pembaca terhadap nenek moyang dari raja terbesar Majapahit, Hayam Wuruk. Terlebih Kitab Nagarakretagama juga merupakan pujasastra yang fokus utamanya adalah untuk menyanjung dan mengagumi sosok Hayam Wuruk, maka dirasa tidak elok bila mencantumkan cerita-cerita buruk meski itu adalah cerita pendahulunya.</p>
          </div>
        </div>
    </div>
  )
}

export default Sejarah