import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div>
            <nav className="navbar navbar-light justify-content-center" style= {{backgroundColor: '#00587a'}}>
                <a className="navbar-brand" href="/" style={{ color: 'white'}}>
                    <img src="/octave-white.png" width="70" height="45" className="d-inline-block align-top" alt="logo"/>
                    <span>Octave MSIT</span>
                </a>
            </nav>
            </div>
        );   
    }
}

export default Navbar;