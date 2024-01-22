import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar light className='Nav' bgColor='light' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'  >
          <i class="fa-solid fa-phone fa-shake mx-4 fs-2 "></i>
            Contact Cog
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header