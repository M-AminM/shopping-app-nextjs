import classes from "./register.module.scss";
import Link from "next/link";

const Registerantion = ({ loginOrSignup }) => {
  return (
    <div
      className="flex justify-center items-center bg-black"
      style={{ minHeight: "90vh" }}
    >
      <div
        className={classes.box}
        style={{
          height: loginOrSignup === "Login" ? "420px" : "510px",
        }}
      >
        <div className={classes.form}>
          <h2>{loginOrSignup}</h2>

          {loginOrSignup !== "Change Password" && (
            <div className={classes.inputBox}>
              <input type="text" required />
              <span>Username</span>
              <i></i>
            </div>
          )}

          {loginOrSignup === "Signup" && (
            <div className={classes.inputBox}>
              <input type="email" required />
              <span>Email</span>
              <i></i>
            </div>
          )}

          {loginOrSignup === "Change Password" && (
            <div className={classes.inputBox}>
              <input type="email" required />
              <span>Email</span>
              <i></i>
            </div>
          )}

          <div className={classes.inputBox}>
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>

          {loginOrSignup === "Change Password" && (
            <div className={classes.inputBox}>
              <input type="password" required />
              <span>New Password</span>
              <i></i>
            </div>
          )}

          {loginOrSignup === "Login" && (
            <div className={classes.links}>
              <Link href="/changePass">Forgot Password</Link>
              <Link href="/signup">Signup</Link>
            </div>
          )}
          <input
            className={classes.submitButton}
            style={{ marginTop: loginOrSignup === "Login" ? "" : "30px" }}
            type="submit"
            value={
              loginOrSignup === "Change Password" ? "Change" : loginOrSignup
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Registerantion;
