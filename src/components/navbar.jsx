import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';


class navbar extends Component {
    state = {

    };

    styles = {
        // backgroundColor: "#ffc107",
        height: "6em",
    };

    btn = {
        backgroundColor: "#ffc107",
        color: "#664D03",



    };
    atagstyle = {
        color: "#664D03"
    };




    render() {
        return (
            <div>
                {/* 導覽列 */}
                <div className='container  d-md-none d-none d-lg-block '>
                    <nav style={this.styles} className='d-flex'>
                        {/* logo */}
                        <img src='/images/logo.png' style={{ width: "10em", height: "6em" }} alt="" className='img-fluid' />
                        <div className='ms-auto d-flex align-items-center' >
                            <Link to="/about" style={this.atagstyle} className=' mx-3  text-decoration-none '>關於我們</Link>
                            <Link to="/service" style={this.atagstyle} className=' mx-3 text-decoration-none'>服務項目</Link>
                            <Link to="/case" style={this.atagstyle} className='mx-3   text-decoration-none'>案例分享</Link>
                            <Link to="/question" style={this.atagstyle} className='mx-3   text-decoration-none'>常見問題</Link>
                            <a href=""> <img src="images/info.png" alt=""
                                className='m-3'
                                style={{ width: "2rem" }} /></a>
                            <button className='px-3 mx-2 btn  ' style={this.btn}>登入</button>
                        </div>
                    </nav >
                </div>
                {/* ///////////////////////// */}
                {/* RWD Navbar */}
                <div className=' container d-md-block  d-lg-none   '>

                    <Navbar expand="lg">
                        <Navbar.Brand href="/"><img src='/images/logo.png' style={{ width: "8em", height: "5em" }} alt="" className='img-fluid' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarCollapse" />
                        <Navbar.Collapse id="navbarCollapse">

                            <Nav className="ml-auto">
                                <Nav.Link href="/about" style={this.atagstyle}>關於我們</Nav.Link>
                                <Nav.Link href="/service" style={this.atagstyle}>服務項目</Nav.Link>
                                <Nav.Link href="/case" style={this.atagstyle}>案例分享</Nav.Link>
                                <Nav.Link href="/question" style={this.atagstyle}>常見問題</Nav.Link>
                                <button className=' btn  px-3 mx-2' style={this.btn}>登入</button>

                            </Nav>

                        </Navbar.Collapse>


                    </Navbar>

                </div>









            </div >
        );
    }
}

export default navbar;


// #ffc107

