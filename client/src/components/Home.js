import React from 'react'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import modalReducer from '../reducers/modalReducer';

// --- COMPONENTS ---
import Hero from './Hero';
import Description from './Description';
import SectionFeedback from './SectionFeedback';
import Modal from './Modal';
import LoginCard from './loginCard';
import Confirmation from './confirmation';
import RegistrySection from './RegistrySection';




function Home(){

    return(

        <div className='container'>

            <Modal >
                <Confirmation></Confirmation>
                <LoginCard></LoginCard>
            </Modal> 


            <Hero></Hero>

            <Description></Description>

            <SectionFeedback></SectionFeedback>

            <RegistrySection></RegistrySection>

        </div>
        

    );
};


export default Home;