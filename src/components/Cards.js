import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these AWESOME creations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/Lets_chat_pic.png"
              text='Lets Chat - An app that creates a global chatroom'
              label='Project'
              href='https://superchat-b1dee.firebaseapp.com/'
            />
            <CardItem
              src='images/ReClip_pic.png'
              text='ReClip - This app is Snapchat clone with a little twist'
              label='Project'
              path='/projects'
              // link= 'https://superchat-b1dee.firebaseapp.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/weather_App_pic.png'
              text='Weather App - Pull the weather from any with simple search'
              label='Project'
              path='/project'
            />
            <CardItem
              src='images/img-4.jpg'
              text='A show case of my experince and skill'
              label='Resume'
              path='/resume'
            />
            <CardItem
              src='images/Brickbreaker_pic.png'
              text='Brick Breaker - Ready to play classic game of Brick Breaker'
              label='Project'
              path='/project'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
