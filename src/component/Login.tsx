import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [authenticationVisible, setAuthenticationVisible] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    fetch("http://10.211.55.9/api/v1/document", {
      //fetch("http://10.211.55.9/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // this block handles the successful response from the server.
        if (response.status === 200) {
          // Proceed with parsing JSON and checking authentication
          response.json().then((data) => {
            //This further parses the response body as JSON and then handles the parsed data.
            let authenticated = true;
            if (authenticated) {
              navigate("/dashboard");
            }
          });
        } else {
          setAuthenticationVisible(false);
        }
      })
      /*
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // this section will be my authentication response processing logic

        let authenticated = true;

        if (authenticated) {
          navigate("/dashboard");
        }
      })
      */
      .catch((error) => {
        //This block catches any errors that occur during the request.
        console.error("Error Utku:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          width: "400px",
          height: "100px",
          margin: "0 auto",
        }}
      >
        <div className="container pt-3 pb-3 my-5 rounded border">
          <div className="row justify-content-center pt-3 pb-3 my-5 rounded border">
            <div className="row py-1">
              <div className="col-md-4 d-flex align-items-center">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="row py-1">
              <div className="col-md-4 d-flex align-items-center">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                />
              </div>
            </div>
            {authenticationVisible && (
              <div className="row py-1">
                <div className="col-md-4 d-flex align-items-center">
                  <label htmlFor="authentication" className="form-label">
                    Authentication
                  </label>
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <select
                    {...register("authentication")}
                    name="authentication"
                    id="authentication"
                    className="form-select form-select-sm"
                    aria-label="Small select example"
                  >
                    <option selected value={"0"}>
                      Silent
                    </option>
                    <option value={"1"}>Active Directory</option>
                  </select>
                </div>
              </div>
            )}

            <div className="row py-1">
              <div className="col-md-4 d-flex align-items-center"></div>
              <div className="col-md-8 d-flex align-items-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
