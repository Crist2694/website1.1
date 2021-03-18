import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'


const SideBar = ( {isOpen, toggle} ) => {
    return (
       <SideBarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to='nosotros'>Nosotros</SidebarLink>
                   <SidebarLink to='servicios'>Servicios</SidebarLink>
                   <SidebarLink to='contactanos'>Contactanos</SidebarLink>
                   <SidebarLink to='signup'>Sign Up</SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to='/signin'>Sign In</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SideBarContainer>
    )
}

export default SideBar;
