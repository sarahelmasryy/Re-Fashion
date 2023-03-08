import { Navbar, Main, Product, Footer } from "../components";
import { NavLink } from 'react-router-dom'
import React from 'react'
import {Link } from "react-router-dom";
import styled from "styled-components";

// import ChatBox from './ChatBox'



function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">DIY and Hand Crafts </h2>
            <hr />
          </div></div></div>
          <img
            className="card-img img-fluid"
            src="./assets/hand3.jpg"
            alt="Card"
            height={200}
          />
          <p> </p>
          <center>
          <Link to="/chatbox"><button style={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  padding: '10px',
                  fontSize : '16px'
                }}>
              Chatbot Page 
            </button></Link>
      {/* <NavLink to= '/chatbox' className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink> */}
      </center>
      <Product />
      <Footer />
    </>
    
  )

  
}

const button = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;




export default Home