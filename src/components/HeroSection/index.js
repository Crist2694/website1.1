import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElement';




const HeroSection = () => {

    
        const [hover, setHover] = useState(false)

        const onHover = () => {
            setHover(!hover)
        }
    


    return (
       <HeroContainer>
           <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
           </HeroBg>
           <HeroContent>
               <HeroH1>Fuerza Automotriz Carmona</HeroH1>
               <HeroP>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quisquam.
               </HeroP>
               <HeroBtnWrapper>
                   <Button to='signup' onMouseEnter= {onHover} onMouseLeave={onHover}
                   primary='true' dark='true'>
                    Agenda una cita con nosotros {hover ? <ArrowForward /> :<ArrowRight/>} 
                   </Button>
               </HeroBtnWrapper>
           </HeroContent>
       </HeroContainer>
    )
}

export default HeroSection
