import classes from "./register.module.scss";

const Registerantion = ({ loginOrSignup }) => {
  return (
    <div className="flex justify-center items-center bg-black" style={{minHeight: "90vh"}}>
      <div
        className={classes.box}
        style={{ height: loginOrSignup === "Login" ? "420px" : "510px" }}
      >
        <div className={classes.form}>
          <h2>{loginOrSignup}</h2>
          <div className={classes.inputBox}>
            <input type="text" required />
            <span>Username</span>
            <i></i>
          </div>

          {loginOrSignup === "Signup" && (
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

          {loginOrSignup === "Login" && (
            <div className={classes.links}>
              <a href="#">Forgot Password</a>
              <a href="#">Signup</a>
            </div>
          )}
          <input
            className={classes.submitButton}
            style={{ marginTop: loginOrSignup === "Login" ? "" : "30px" }}
            type="submit"
            value={loginOrSignup}
          />
        </div>
      </div>
    </div>
  );
};

export default Registerantion;
