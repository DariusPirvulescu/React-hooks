import React from "react";

import {useForm} from "./customHooks/useForm";

const Form = () => {
  const [values, handleChange] = useForm({name: "", email: ""})

  return <div>
    <input name="name" value={values.name} onChange={handleChange} placeholder="name"/>
    <br />
    <br />
    <input name="email" value={values.email} onChange={handleChange} placeholder="email"/>

  </div>
}

export default Form;