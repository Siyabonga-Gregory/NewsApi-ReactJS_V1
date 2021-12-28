import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName:"",
            lastName:"",    
            email: "",
            password: "",
            verifyPassword:""
        }
      });
    
      const onSubmit = (data) => {

        //alert(JSON.stringify(data));  // Will push this data into the database
       /* axios.get('http://localhost:8000/register',{data})
        .then((response) => {
            console.log(response);
        })
        .catch(console.log)*/

        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=za&' +
        'apiKey=80b09b8d77fd4241afba2a934c5b9828';
        var req = new Request(url);
        fetch(req)
        .then(function(response) {
        console.log(response.json());
  })


      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="2" height="2" />
          <p className="h3 mb-3 font-weight-normal">Please Register</p>
          
          <label htmlFor="email">First Name</label>
          <input
            {
              ...register("firstName")}
              placeholder=""
              type="text"
          />

          <label htmlFor="email">Last Name</label>
          <input
            {
              ...register("lastName")}
              placeholder=""
              type="text"
          />

          <label htmlFor="email">Email</label>
          <input
            {
              ...register("email")}
              placeholder=""
              type="email"
          />

          <label htmlFor="password">Password</label>
          <input 
          {
              ...register("password")} 
              placeholder=""
              type="password"
          />

          <label htmlFor="password">Verify Password</label>
          <input 
          {
              ...register("verifyPassword")} 
              placeholder=""
              type="password"
          />

          <input type="submit" />
        </form>
      );
}
