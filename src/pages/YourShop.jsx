import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

const YourShop = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">VintageVault</h1>
        <hr />
        <p className="lead text-center">
        The store specializes in vintage and retro items that have been carefully curated and stored in a virtual vault.
        </p>

        <h2 className="text-center py-4">Your Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/6046226/pexels-photo-6046226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Gray elegant jacket</h5>
                <center>
                <h6> 30$ </h6>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/4226877/pexels-photo-4226877.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Stylish eyeglasses</h5>
                <center>
                <h6> 25$ </h6>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Orange and Black Leather Satchel Bag</h5>
                <center>
                <h6> Donation </h6>
                </center></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/8473579/pexels-photo-8473579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Bright sports sneakers </h5>
                <center>
                <h6> 15$ </h6>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center py-4">Add More Products</h2>
      <hr />
      <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Product description</label>
                <input
    
                  class="form-control"
                  id="floatingInput"
                  placeholder="Small product description"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Price</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="product Price or donation"
                />
              </div>
              <center>
              <button class="my-2 mx-auto btn btn-dark" type="submit" >
                Add Product Image 
                </button> </center>
             
              <div className="text-center">
              

                <button class="my-2 mx-auto btn btn-dark" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div></div>



      <Footer />
    </>
  )
}

export default YourShop