import { useState } from 'react'
// import Panel from './components/Panel'
// import KartuMenu from './components/KartuMenu'
// import Ringkasan from './components/Ringkasan'

const NAMA_PANGGILAN = 'Josefhint'
const N = '06'
const data_awal = [
  {id : 1 , nama: 'Nasi Ayam Geprek', harga: 10000 + N * 100, kategori: 'Makanan'},
  {id : 2, nama: 'Es Teh Lemon', harga: 6000, kategori: 'Minuman'},
  {id : 3, nama: 'Mie Goreng Telur', harga: 12000, kategori: 'Makanan'},
  {id : 4, nama: 'Alpukat', harga: 14000, kategori: 'Minuman'},
  {id : 5, nama: 'Bakso Urat', harga: 15000, kategori: 'Makanan'},
]
const jam = 9

const gayaJudul={
  color: '#1f3a5f', fontsize : '28px', fontwide: 700, letterspacing : '0,5'
}

function App() {

  return (
    <>
    <h1 className="Judul" style={gayaJudul}> Kantin {NAMA_PANGGILAN}</h1>
    <p>Selamat Pagi</p>
    <p>Saldo Awal Kartu Kantin: Rp {(N * 1000).toLocaleString('id-ID')}</p>
    <p>{jam < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
    <panel judul = "menu hari ini">
      <button on onClick={balikUrutan}>balikUrutan</button>
    </panel>
    <button disabled>Bayar</button>
    </>
  )
}

export default App
