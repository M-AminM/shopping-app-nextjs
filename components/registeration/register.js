import { useState, useRef, useEffect } from "react";
import classes from "./register.module.scss";

import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  if (!response.ok) {
    toast.update(id, {
      render: "Something went wrong",
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
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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

  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      const id = toast.loading("Please wait...", {
        position: toast.POSITION.TOP_CENTER,
      });
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
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
        const enteredUsername = usernameInputRef.current.value;
        const result = await createUser(
          enteredUsername,
          enteredEmail,
          enteredPassword
        );
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "90vh" }}
    >
      <div
        className={classes.box}
        style={{ height: isLogin ? "420px" : "510px" }}
      >
        <div className={classes.form}>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>

          <form onSubmit={submitHandler}>
            {!isLogin && (
              <div className={classes.inputBox}>
                <label htmlFor="username"></label>
                <input
                  type="text"
                  id="username"
                  required
                  ref={usernameInputRef}
                  autoComplete="off"
                />
                <span>Username</span>
                <i></i>
              </div>
            )}

            <div className={classes.inputBox}>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                required
                ref={emailInputRef}
                autoComplete="off"
              />
              <span>Email</span>
              <i></i>
            </div>

            <div className={classes.inputBox}>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
                autoComplete="off"
              />
              <span>Password</span>
              <i></i>
            </div>

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
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
