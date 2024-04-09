import React from 'react'
import '../components/Logos.css'
import logo1 from '../assets/images/logotip-rosatom 1.jpg'
import logo2 from '../assets/images/gazprom.jpg'
import logo3 from '../assets/images/rosneft.jpg'
import logo4 from '../assets/images/roskosmos.jpg'
import logo5 from '../assets/images/lookoil.jpg'
import logo6 from '../assets/images/inter.jpg'
import logo7 from '../assets/images/rostech.jpg'
import logo8 from '../assets/images/btb.jpg'
export default function Logos() {
    const data = [
        {
            id:1,
            img: logo1,
            title:"Росатом",
            text:"Корпорация атомной энергии"
        },
        {
            id:2,
            img: logo2,
            title:"Газпром",
            text:"Энергетическая компания"
        },
        {
            id:3,
            img: logo3,
            title:"Роснефть",
            text:"Нефтегазовая компания"
        },
        {
            id:4,
            img: logo4,
            title:"Роскосмос",
            text:"Корпорация в космической отрасли"
        },
    ]
    const data2 = [
        {
            id:5,
            img: logo5,
            title:"Лукойл",
            text:"Нефтяная компания"
        },
        {
            id:6,
            img: logo6,
            title:"Интер PAO",
            text:"Энергетическая компания"
        },
        {
            id:7,
            img: logo7,
            title:"Ростех",
            text:"Промышленная корпорация"
        },
        {
            id:8,
            img: logo8,
            title:"Банк ВТБ",
            text:"Коммерческий банк"
        }
    ]
    let logos1 = data?.map((el) =>
    <div className='logos' key={el.id}>
    <img className='logoimg' src={el.img} alt="logos" />
    <p className='logotitle'>{el.title}</p>
    <p className='logotext'>{el.text}</p>
</div>
    )
    let logos2 = data2?.map((el) =>
    <div className='logos' key={el.id}>
    <img className='logoimg' src={el.img} alt="logos" />
    <p className='logotitle'>{el.title}</p>
    <p className='logotext'>{el.text}</p>
</div>
    )
  return (
    <>
    <h4 className='Step'>Нам доверяют</h4>
    <div className='logocards'>
       {logos1}
    </div>
    <div className='logocards'>
        {logos2}
    </div>
    </>
  )
}
