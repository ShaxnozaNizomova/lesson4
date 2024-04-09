import React from 'react'
import "../components/Steps.css"
import photo1 from '../assets/images/contract.jpg'
import photo2 from '../assets/images/ship.jpg'
import photo3 from '../assets/images/install.jpg'
export default function Steps() {
    const data = [
        {
          id: 1,
          img:photo1 ,
          title: "Предложение от продавца",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. "
        },
        {
            id: 2,
            img: photo2 ,
            title: "Доставка",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. "
          },
          {
            id: 3,
            img: photo3 ,
            title: "Установка у клиента",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. "
          }
    ]
    let steps = data?.map((el) => 
      <div key = {el.id} className='cardsteps'>
        <div className='stepsimg'>
            <img className='steps1img' src={el.img} alt="" />
        </div>
        <div className='stepstextbox'>
            <p className='stepstitle'>{el.title}</p>
            <p className='stepstext'>{el.text}</p>
        </div>
       </div>
    )
  return (
    <>
     <h4 className='Step'>Этапы поставки </h4>
     <div className='steps'> 
     {steps}
     </div>
    </>
  )
}
