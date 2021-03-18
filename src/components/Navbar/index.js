import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ( {toggle} ) => {
    return (
       <>
       <Nav>
           <NavbarContainer>
               <NavLogo to='/'>FAC</NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to='git '>Nosotros</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='servicios'>Servicios</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='contactanos'>Contactanos</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='signup'>Sign Up</NavLinks>
                   </NavItem>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to='/signin'>Sign In</NavBtnLink>
               </NavBtn>
           </NavbarContainer>
       </Nav>
       </>
    )
}

export default Navbar
