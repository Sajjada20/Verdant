import React from 'react'
import './stylesPage/home.css'
import { HomeInfo } from './data'
import EachProduct from '../components/EachProduct';
import Section from '../components/Section';
import { useNavigate } from 'react-router-dom';

const Upper = HomeInfo.UpperSection; /* upper section */
const Middle = HomeInfo.MiddleSection;
const Lower = HomeInfo?.LowerSection;

const LowerSecond = HomeInfo?.LowerSection?.second;
const LowerThird = HomeInfo?.LowerSection?.third;

function Home() {
  const navigate = useNavigate()
  return (
    <div className="div-home">
      <div className='home'>
        <div className='home-boven-title'>
          <h4>{Upper?.tittleMini}</h4> 
          <h1>{Upper?.MainTittle}</h1>
          <p>{Upper?.paragraaf}</p>
          <button id='btn' onClick={() => navigate('/shop')}>{Upper?.button}</button>
        </div>
        <div className='home-fruit-foto'>
          <img src={Upper?.image} alt="fruit-img" />
        </div>
      </div>

      {/* 2section */}
      <div className='div-home-fruits'>
        {Middle?.fruits.map((fruit, index) => {
          return (
            <EachProduct data={fruit} idx={index}/>
          )
        })}
      </div>

      {/* 3section     orange */}
      <div className='DerdeSection-div'>
        <img src={Lower?.image} alt="" id='image-section-home' />
        <div className="info-sectionDrie-div">
          <h1>{Lower?.MainTittle}</h1>
          <p>{Lower?.paragraaf}</p>
          <div className='sectionDrie-section'>
            {Lower?.section.map((item, index) => {
              return (<Section data={item} idx={index} />)
            })}
          </div>
        </div>
      </div>



      {/* blueberries*/}
      <div className='DerdeSection-div2'>
        <img src={LowerSecond?.image} id='image-section-home' />
        <div className="info-sectionDrie-div">
          <h1>{LowerSecond?.MainTittle}</h1>
          <p>{LowerSecond?.paragraaf}</p>
          <div className='sectionDrie-section'>
            {LowerSecond.section.map((item, index) => {
              return (<Section data={item} idx={index}  />)
            })}
          </div>
        </div>
      </div>


      {/* watermelon */}
      <div className='DerdeSection-div'>
        <img src={LowerThird?.image} alt="" id='image-section-home' />
        <div className="info-sectionDrie-div">
          <h1>{LowerThird?.MainTittle}</h1>
          <p>{LowerThird?.paragraaf}</p>
          <div className='sectionDrie-section'>
            {LowerThird?.section.map((item, index) => {
              return (<Section data={item} idx={index} />)
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home