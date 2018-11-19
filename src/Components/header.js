import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = (props) => {
  return (
  	<Navbar color="faded" light>
  		<NavbarBrand href="/" className="mr-m2">Hilliard IOT</NavbarBrand>
  	</Navbar>
        


   )
}

export default Header