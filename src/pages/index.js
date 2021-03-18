import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Navbar from '../components/Navbar';



const  Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
           <SideBar isOpen={isOpen} toggle={toggle}></SideBar> 
           <Navbar toggle={toggle}></Navbar>
        </>
    )
}

export default Home;