import { useState, useRef } from "react";
import classes from "./register.module.scss";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const createUser = async (username, email, password) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong !");
  }

  return data;
};

function AuthForm() {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      console.log(result);

      if (!result.error) {
        router.replace("/");
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
