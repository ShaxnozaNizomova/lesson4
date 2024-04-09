import React from 'react'
import '../components/Header.css'
import Cargo from '../assets/images/cargo.jpg'
export default function Header() {
  return (
    <div className='header'>
      <div className='left'>
        <h1 className='title'>Поставщик Дальнего <br /> Востока</h1>
        <p className='text'>Наши клиенты получают полный спектр услуг по работе с Китаем. <br />
        Начиная с подбора производителя заканчивая доставкой товара до двери<br />
        Настолько прозрачных сделок с Китаем вы еще не осуществляли.</p>
        <button className='btn'>Узнать больше</button>
      </div>
      <div className='img'> 
      <img className='bigimg' src={Cargo} alt="cargo" />
      </div>
    </div>
  )
}

