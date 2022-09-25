import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "../Nav/header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
            <Nav style={{justifyContent : 'space-between'}}
                 activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >          
                 <div>
                  <h1 style={{fontFamily: 'Pacifico ', color : 'gray'}}>Demo</h1>
                </div>
                <Link to='/forminput'><button className='btn'>LogIn</button></Link>
            </Nav>
    </div>
  )
}

export default Header