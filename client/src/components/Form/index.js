import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}



export function Form(props) {

  // constructor = (props) => {
  //   this.state = { value: props.value || "" };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search"><h2>Search for a Book</h2></label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search a Book"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

