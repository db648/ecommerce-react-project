import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/auth-redux/action";
import { Footerpage } from "../navbarFooter/footer";
import { Navbar } from "../navbarFooter/navbar";

export const Loginpage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios
      .post("https://ecommerce-shopping-project.herokuapp.com/user/login", data)
      .then((res) => {
        console.log("before", res.data);
        if (res.data.status === "false") {
          return alert("Enter Correct Details");
        } else {
          dispatch(loginSuccess(res.data));
          console.log("after", res.data);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        return alert("Enter Correct Details");
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
                  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_3.jpg?format=webp&w=1366&dpr=1.0"
                  className="w-100"
                  alt="Sample photo"
                />

                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-5 pb-5 pb-md-0 mb-md-5 px-md-2">Sign In</h3>

                  <form className="px-md-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        {...register("email", { required: true })}
                        required
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
                        required
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Login
                      </button>
                    </div>
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
