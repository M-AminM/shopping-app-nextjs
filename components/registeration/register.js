import { useState, useRef, useEffect } from "react";
import classes from "./register.module.scss";

import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const createUser = async (username, email, password) => {
  const id = toast.loading("Please wait...", {
    position: toast.POSITION.TOP_CENTER,
  });
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log("data");
  console.log(data);
  console.log("REsponse");
  console.log(response);

  if (!response.ok) {
    toast.update(id, {
      render: data.message,
      type: "error",
      isLoading: false,
      autoClose: true,
    });
    throw new Error(data.message || "Something went wrong !");
  } else {
    toast.update(id, {
      render: "Successfully Signup",
      type: "success",
      isLoading: false,
      autoClose: true,
    });
  }

  return data;
};

function AuthForm() {
  const [login, setLogin] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(true);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        window.location.href = "/";
      } else {
        setLogin(false);
      }
    });
  }, []);

  if (login) {
    return (
      <p className="flex justify-center items-center h-screen text-white">
        is Loading
      </p>
    );
  }

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async (data) => {
    if (isLogin) {
      const id = toast.loading("Please wait...", {
        position: toast.POSITION.TOP_CENTER,
      });
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      console.log(result);

      if (!result.error) {
        toast.update(id, {
          render: "Successfully Login",
          type: "success",
          isLoading: false,
        });
        setTimeout(() => {
          router.replace("/");
        }, 2000);
      } else {
        toast.update(id, {
          render: "Cannot Login",
          type: "error",
          isLoading: false,
          autoClose: true,
        });
      }
    } else {
      try {
        const result = await createUser(
          data.username,
          data.email,
          data.password
        );
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(errors);

  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className={classes.bgBox}>
        <div
          className={classes.box}
          // style={{ minHeight: isLogin ? "480px" : "580px" }}
        >
          <div className={classes.form}>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>

            <form onSubmit={handleSubmit(submitHandler)}>
              {!isLogin && (
                <div>
                  <div className={classes.inputBox}>
                    <label htmlFor="username"></label>
                    <input
                      type="text"
                      id="username"
                      required
                      autoComplete="off"
                      {...register("username", {
                        minLength: {
                          value: 4,
                          message:
                            "Username has to be greater than 4 characters long",
                        },

                        required: "Required",
                      })}
                    />
                    <span>Username</span>
                    <i></i>
                  </div>
                  {errors.username && (
                    <p className="text-xs text-red pt-2">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              )}

              <div>
                <div className={classes.inputBox}>
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    id="email"
                    required
                    autoComplete="off"
                    {...register("email", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                      required: "Required",
                    })}
                  />
                  <span>Email</span>
                  <i></i>
                </div>
                {errors.email && (
                  <p className="text-xs text-red pt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <div className={classes.inputBox}>
                  <label htmlFor="password"></label>
                  {message.trim().length !== 0 && (
                    <div
                      className={classes.eyeInput}
                      onClick={() => setShowPass(!showPass)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                  )}
                  <input
                    type={showPass ? "password" : "text"}
                    id="password"
                    required
                    autoComplete="off"
                    onChange={(e) => setMessage(e.target.value)}
                    {...register("password", {
                      minLength: {
                        value: 7,
                        message:
                          "Password has to be greater than 4 characters long",
                      },
                      maxLength: {
                        value: 14,
                        message:
                          "Username has to be lower than 14 characters long",
                      },
                      required: "Required",
                    })}
                  />
                  <span>Password</span>

                  <i></i>
                </div>
                {errors.password && (
                  <p className="text-xs text-red pt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {isLogin && (
                <Link href="/changePass">
                  <p className="text-sm text-midBlue pt-2 cursor-pointer">
                    Change password
                  </p>
                </Link>
              )}

              <div className="flex justify-center items-center flex-col">
                <input
                  className={classes.submitButton}
                  style={{ marginTop: "30px" }}
                  type="submit"
                  value={isLogin ? "Login" : "Create Account"}
                />
                <ToastContainer />
                <button
                  type="button"
                  className={classes.toggle}
                  onClick={switchAuthModeHandler}
                >
                  {isLogin
                    ? "Create new account"
                    : "Login with existing account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
