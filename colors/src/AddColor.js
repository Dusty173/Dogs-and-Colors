import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddColor({ colorObj }) {
  const [form, updateForm] = useState({ name: "", hex: "#ffffff" });
  const navigate = useNavigate();

  function handleChange(e) {
    updateForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    colorObj({ [form.name]: form.hex });
    navigate("/");
  }

  let { name, hex } = form;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color Name:</label>
        <input
          name="name"
          id="name"
          placeholder="Enter the name of this color"
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="hex">Color Picker</label>
        <input
          type="color"
          name="hex"
          id="hex"
          onChange={handleChange}
          value={hex}
        />
        <br />
        <input type="submit" value="Add Color!" />
      </form>
    </>
  );
}

export default AddColor;
