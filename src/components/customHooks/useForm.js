import {useState} from "react";

export const useForm = (initialValues) => {
  const [values, setInitialValues] = useState(initialValues)

  return [values, 
  function (event){
    let {name, value} = event.target
    
    setInitialValues(values => {
      return {
        ...values,
        [name]: value
      }
    })
  }]
}