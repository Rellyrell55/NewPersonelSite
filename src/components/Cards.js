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
              src='./images/img-9.jpg'
              text='Lets Chat - An app that creates a global chatroom'
              label='Project'
              path='/projects'
            />
            <CardItem
              // src='images/img-2.jpg'
              text='ReClip - This app is Snapchat clone with a little twist'
              label='Project'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              // src='images/img-3.jpg'
              text='Weather App - Pull the weather from any with simple search'
              label='Project'
              path='/project'
            />
            <CardItem
              // src='images/img-4.jpg'
              text='A show case of my experince and skill'
              label='Resume'
              path='/resume'
            />
            <CardItem
              // src='images/img-8.jpg'
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
