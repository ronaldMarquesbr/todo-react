import React from 'react';
import personFeedbackImg from '../imgs/person-feedback.png'
import '../styles/style_feedback.css'

function SectionFeedback(props){

    return(

        <div className='container-feedback'>
            <div className='section-feedback'>

                <div className='card-feedback'>
                    <img src={personFeedbackImg} alt='person'></img>
                    <div className='text-feedback'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi vel vero veniam deleniti culpa, quis aliquid ab, quidem, suscipit officia rerum voluptatem libero maiores sed maxime assumenda a atque."
                        <div className='footer-card-feedback'>
                            <div>Lara Manuela</div>
                            <div>Designer</div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )

}

export default SectionFeedback;