import React from 'react'
import '../components/Team.css'
import team1 from '../assets/images/1.png'
import team2 from '../assets/images/2.png'
import team3 from '../assets/images/3.png'
import team4 from '../assets/images/4.png'
import team5 from '../assets/images/5.png'
import team6 from '../assets/images/6.png'
import back from '../assets/images/background.jpg'
export default function Team() {
  return (
    <>
    <h4 className='Step1'>Сотрудники компании</h4>
    <div className='team'>
      <div className='teamm'>
        <img src={team1} alt="members" />
      </div>
      <div className='teamm'>
        <img src={team2} alt="members" />
      </div>
      </div>
     <div className='team'>
     <div className='teamm'>
        <img src={team3} alt="members" />
      </div>
      <div className='teamm'>
        <img src={team4} alt="members" />
      </div>
     </div>
     <div className='team'>
     <div className='teamm'>
        <img src={team5} alt="members" />
      </div>
      <div className='teamm'>
        <img src={team6} alt="members" />
      </div>
      <div>
        <img className='backpic' src={back} alt="truck" />
      </div>
     </div>
    </>
    
  )
}
