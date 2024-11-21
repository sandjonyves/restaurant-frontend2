import React from 'react'
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Contact from './Contact';
import { images } from '../../constants';
import { SubHeading } from '../../components';

export default function FindUs() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
    console.log(showModal)
  };
  return (
    <div><div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1  className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button
        type="button"
        className="custom__button mt-8"
        onClick={toggleModal}
      >
        Contact Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.gallery02} alt="finus_img" className="md:w-5/6" />
    </div>

    {showModal && (
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Contact />
      </Modal>
    )}
  </div></div>
  )
}
