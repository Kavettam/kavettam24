import React, { useState, useEffect }from "react";

import Modal from "../Components/Modal";
import "./Landing.scss";
import KavettamLogo from "../assets/kavettam.png";
import CardCarousel from "../Components/CardCarousel";


function Landing() {
  const [showModal, setShowModal] = useState(false);
  const latestImageUrl = 'https://i.ibb.co/D96J3XW/dayon3.jpg'; // Replace with your latest image URL
 
  useEffect(() => {
     setShowModal(true);
  }, []);
  const cards = [
    {
      image: 'https://i.ibb.co/ZSDxJF6/kalajadha.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
    {
      image: 'https://i.ibb.co/rFsc8D3/fancy.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },  {
      image: 'https://i.ibb.co/313QwKh/collage.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },  
    {
      image: 'https://i.ibb.co/vXnCrD6/Whats-App-Image-2024-03-31-at-6-30-02-PM.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
    {
      image: 'https://i.ibb.co/LvYc7tN/Whats-App-Image-2024-03-31-at-9-30-04-PM.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },

    {
      image: 'https://i.ibb.co/B6H5DKr/Whats-App-Image-2024-04-01-at-21-29-50-ff3af495.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
    {
      image: 'https://i.ibb.co/D5HTRd2/day-2.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
    {
      image: 'https://i.ibb.co/BPTCmDn/day-3.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
    {
      image: 'https://i.ibb.co/w6SY31v/dayon1.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
    {
      image: ' https://i.ibb.co/XY3MvLc/dayon2.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
    {
      image: 'https://i.ibb.co/D96J3XW/dayon3.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
 ];


  return (
    <div className="Landing">
       <Modal isOpen={showModal} onClose={() => setShowModal(false)} imageUrl={latestImageUrl} />
      <section className="Hero">
        <p className="Dheeravam">ധീരവം കോളേജ് യൂണിയൻ അവതരിപ്പിക്കുന്നു</p>
        <img src={KavettamLogo} alt="kavettam" />
        <h4>ARTS FEST</h4>
        <p className="month">APRIL</p>
        <h3 className="date">5 6 7</h3>
        <p>GEC IDUKKI</p>
        <a href="https://drive.google.com/file/d/1mINXLnRM5IrdvVeKYNRG4ZqQ3yiwKNSM/view?usp=drive_link" target="_blank">See Guidelines</a>
        <CardCarousel cards={cards} />

      </section>

    </div>
  );
}

export default Landing;
