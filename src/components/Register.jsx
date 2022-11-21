import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
    const setData = (e) =>{
        console.log(e.target.value)
        
    }
  return (
    <div className="container mt-3">
      <NavLink to="/">Home</NavLink>
      <div className="row mt-3">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
            onChange={setData}
            value={}
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="ahmadraza.azt@gmail.com"
            onChange={setData}
            value={}
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleFormControlInput1" className="form-label">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Age"
            onChange={setData}
            value={}
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleFormControlInput1" className="form-label">
            Mobile
          </label>
          <input
            type="number"
            name="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Mobile"
            onChange={setData}
            value={}
            />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleFormControlInput1" className="form-label">
            Work
          </label>
          <input
            type="text"
            name="work"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your work"
            onChange={setData}
            value={}
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleFormControlInput1" className="form-label">
            Address
          </label>
          <input
            type="email"
            name="address"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your address"
            onChange={setData}
            value={}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Desciption
          </label>
          <textarea
            className="form-control"
            name="desc"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary col-lg-12 col-md-12 col-12">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
