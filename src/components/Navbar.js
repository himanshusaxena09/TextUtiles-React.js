import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <Link className="navbar-brand" to="/home">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link"  aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                {/* <div className="d-flex">
                    <div className="bg-primary  rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
                    <div className="bg-danger  rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
                    <div className="bg-success  rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
                    <div className="bg-warning  rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
                </div>  */}
                <div className={`form-check form-switch mx-3 text-${props.mode=== 'light'? 'dark': 'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
