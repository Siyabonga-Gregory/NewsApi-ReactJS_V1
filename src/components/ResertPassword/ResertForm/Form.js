import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
          email: ""
        }
      });
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));  // Will push this data into the database
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="2" height="2" />
          <p className="h3 mb-3 font-weight-normal">Please Request Resert Token Via Email Address</p>

          <label htmlFor="email">Email</label>
          <input
            {
              ...register("email")}
              placeholder=""
              type="email"
          />

          <input type="submit" />
        </form>
      );
}
