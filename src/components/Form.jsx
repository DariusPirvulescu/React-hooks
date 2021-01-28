import React, { useState, useContext } from "react";

import Henlo from "./Henlo";

import { useForm } from "./customHooks/useForm";

import { userContext } from "./contexts/userContext";

const Form = () => {
  const [values, handleChange] = useForm({ name: "", email: "" });
  const [showHenlo, setShowHenlo] = useState(true);
  const { user } = useContext(userContext);

  const toggleHenlo = () => {
    setShowHenlo(() => !showHenlo);
  };

  return (
    <div>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="name"
      />
      <br />
      <br />
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
      />

      <h2>Henlo useEffect</h2>
      <p>* Check console and toggle henlo *</p>
      <div className="henlo">
        <button onClick={toggleHenlo}>Toggle Henlo</button>
        <br />
        <br />
        {showHenlo && <Henlo />}
      </div>
      <br />
      <p> currentUser {user} </p>
    </div>
  );
};

export default Form;
