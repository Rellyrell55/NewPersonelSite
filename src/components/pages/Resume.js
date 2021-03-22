import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

export default function Resume() {
  return (
    <>
    <h1 className='resume'>Resume</h1>
    <CardItem
      src="./images/terrellResume.jpg"
      text='Click for the Full Resume'
      label='Resume'
      path='/fullresume'
    />
    <Footer/>
    </>
  )


}
