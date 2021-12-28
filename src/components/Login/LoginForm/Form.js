import React,{useRef} from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
          email: "",
          password: ""
        }
      });
    
      const onSubmit = (e) => {
        //alert(JSON.stringify(data));  // Will push this data into the database
         window.location.href = "/news";
      };

       // will hold a reference for our real input file
  let inputFile = '';

  // function to trigger our input file click
  const uploadClick = e => {
    e.preventDefault();
    inputFile.click();
    return false;
  };

  return (
    <>
      <input
        type="file"
        name="fileUpload"
        ref={input => {
          // assigns a reference so we can trigger it later
          inputFile = input;
        }}
        multiple
      />

      <a href="#" className="btn" onClick={uploadClick}>
        Add or Drag Attachments Here
      </a>
    </>
  )


     /* return (
        <form onSubmit={handleSubmit(onSubmit)}>
         
          <p className="h3 mb-3 font-weight-normal">Please Login</p>

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
         
         <input type="submit" />
         <label htmlFor="forgotPassword"><a href="/resert"> Forgot your password ? </a></label>
        </form>
      );*/
}
