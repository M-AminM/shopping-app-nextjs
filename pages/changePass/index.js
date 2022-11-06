import { useRef } from "react";
import classes from "../../components/registeration/register.module.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const emailInputRef = useRef();
  const newPasswordInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...", {
      position: toast.POSITION.TOP_CENTER,
    });
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = newPasswordInputRef.current.value;

    const response = await fetch("/api/user/change-password", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        newPassword: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      toast.update(id, {
        render: data.message,
        type: "error",
        isLoading: false,
        autoClose: true,
      });
    } else {
      toast.update(id, {
        render: "Password updated !",
        type: "success",
        isLoading: false,
        autoClose: true,
      });
    }
  };

  return (
    <section className=" flex justify-center items-center min-h-screen">
      <div className={classes.box}>
        <div className={classes.form}>
          <h2>Change Passowrd</h2>
          <form onSubmit={submitHandler}>
            <div className={classes.inputBox}>
              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                required
                autoComplete="off"
                ref={emailInputRef}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="new-password"></label>
              <input
                type="password"
                id="new-password"
                required
                autoComplete="off"
                ref={newPasswordInputRef}
              />
              <span>New Password</span>
              <i></i>
            </div>
            <div className="flex justify-center items-center">
              <input
                className={classes.submitButton}
                style={{ marginTop: "30px" }}
                type="submit"
                value="Change Password"
              />
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
