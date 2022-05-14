import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Footerpage } from "../navbarFooter/footer";
import { Navbar } from "../navbarFooter/navbar";

export const Registerpage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("submit", data);
    axios
      .post("https://flatsunit6.herokuapp.com/user/register", data)
      .then((res) => {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        alert("Enter Correct Details");
      });
  };

  return (
    <>
      <Navbar />
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="https://prod-img.thesouledstore.com/public/theSoul/uploads/slider/20220513000555.jpg?format=webp&w=1366&dpr=1.0"
                  className="w-100"
                  alt="Sample photo"
                />

                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Registration Info
                  </h3>

                  <form className="px-md-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        {...register("username", { required: true })}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        {...register("email", { required: true })}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        {...register("password", { required: true })}
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="./login" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Footerpage />
    </>
  );
};
