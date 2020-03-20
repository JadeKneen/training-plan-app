import React from "react";

function Form(props) {
  return (
    <form>
      <p className="form-subheading">Day of the Week</p>
      <select value="Day of the week">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
      <p className="form-subheading">Work out</p>
      <textarea type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
