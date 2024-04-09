import React from 'react'
import '../components/Works.css'
import img1 from '../assets/images/station.jpg'
import img2 from '../assets/images/component.jpg'
import img3 from '../assets/images/delivery.jpg'
export default function Works() {
   const data = [
    {
        id: 1,
        img: img1,
        title: "Станки и оборудование",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
        price: "20 000 rubl"
    },
    {
        id: 2,
        img: img2,
        title: "Станки и оборудование",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
        price: "20 000 rubl"
    },
    {
        id: 3,
        img: img3,
        title: "Станки и оборудование",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
        price: "20 000 rubl"
    }
   ]
   let cards = data?.map((el) => 
   <div key={el.id} className='card1'>
         <img className='img' src={el.img} alt="img" />
         <p className='title1'>{el.title}</p>
         <p className='text1'>{el.text}</p>
         <p className='price'>{el.price}</p>
      </div>
   )
  return (
    <>
    <h4 className='Title'>Выполненные работы</h4>
    <p className='Text'>Мы собрали информацию по грузам, которые мы уже доставили <br />
     U нас специальный подход к каждому виду товаров.</p>
    <div className='cards1'>
      {cards}
    </div>
    </>
  )
}
