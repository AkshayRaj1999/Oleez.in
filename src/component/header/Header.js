import React from 'react'
import '../header/Header.css';
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

function Header() {
    const array =[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Course',
            path:'/course'
        },
        {
            id:3,
            name:'About Us',
            path:'/about'
        },
        {
            id:4,
            name:'Conatc Us',
            path:'/contact'
        }
    ]
  return (
<header className='header'>
    <div className="container">
        <div className="nav_container">
        <Link to='/' style={{textDecoration:'none' ,color:'#f3c434'}}>
            <div className="logo">
                <div className="logo-img">
                    <img src={logo} alt="" />
                </div>
                <h2>Oleez</h2>
            </div>
                            </Link>

        <div className="container-pages">
            <ul className="menu">
                {
                    array.map((sys)=>{
                        return <li className='menu-item'><Link to={sys.path} style={{textDecoration:'none' ,color:'#f3c434'}} >{sys.name}</Link></li>
                    })
                }
            </ul>
        </div>
        </div>
        
    </div>
</header>
    )
}

export default Header