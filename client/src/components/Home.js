import React from 'react'

// --- COMPONENTS ---
import Menu from './Menu';
import Hero from './Hero';
import Description from './Description';
import SectionFeedback from './SectionFeedback';
import ModalLogin from './ModalLogin';
import Confirmation from './confirmation';
import RegistrySection from './RegistrySection';




function Home(){

    return(

        <div className='container'>
            
            <Menu titulo="To Do" items_nav={['Contatos', 'Sobre', 'Login']}></Menu>

            <ModalLogin >
                {/* <Confirmation></Confirmation> */}
            </ModalLogin> 


            <Hero></Hero>

            <Description></Description>

            <SectionFeedback></SectionFeedback>

            <RegistrySection></RegistrySection>

        </div>
        

    );
};


export default Home;