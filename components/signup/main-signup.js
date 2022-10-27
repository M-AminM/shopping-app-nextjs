import classes from "../registeration/register.module.scss";
import { useForm } from "react-hook-form";

const MainSignup = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = async (data) => {
    // console.log(data);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    alert(result.message || "Something went wrong !");
    reset();
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className={classes.box} style={{ height: "510px" }}>
        <div className={classes.form}>
          <h2>Signup</h2>

          <form onSubmit={submitHandler}>
            <div className={classes.inputBox}>
              <label htmlFor="username"></label>
              <input id="username" type="text" required {...register("username")} />
              <span>Username</span>
              <i></i>
            </div>

            <div className={classes.inputBox}>
              <label htmlFor="email"></label>
              <input id="email" type="email" required {...register("email")} />
              <span>Email</span>
              <i></i>
            </div>

            <div className={classes.inputBox}>
              <label htmlFor="password"></label>
              <input id="password" type="password" required {...register("password")} />
              <span>Password</span>
              <i></i>
            </div>
            

            <input
              className={classes.submitButton}
              style={{ marginTop: "30px" }}
              type="submit"
              value={isLogin ? "Login" : "Create Account"}
            />
          </form>


        </div>
      </div>
    </div>
  );
};

export default MainSignup;
