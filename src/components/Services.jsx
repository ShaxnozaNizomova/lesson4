import React from 'react'
import '../components/Services.css'
import icon1 from '../assets/images/icon.svg'
import icon2 from '../assets/images/icon2.svg'
import icon3 from '../assets/images/icon3 (2).svg'
export default function Services() {
  const data = [
    {
      id: 1,
      img: icon1 ,
      title: "Поиск производителей по товару",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut."
    },
    {
      id: 2,
      img: icon2,
      title: "Поиск конкретного производителя",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut."
    },
    {
      id: 3,
      img: icon3 ,
      title: "Доставка образцов тваров",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut."
    }
  ]
  let cards = data?.map((el) =>
  <div key = {el.id} className='card'>
        <img src={el.img} alt="icon1" />
        <p className='title'>{el.title}</p>
        <p className='text'>{el.text}</p>
      </div> )
  return (
    <div className='cards'>
         {cards}
    </div>
  )
}
