import classes from "./signup.module.scss";

const Signup = () => {
    return (
        <div className="flex justify-center items-center bg-black min-h-screen">
            <div className={classes.box}>
                <div className={classes.form}>
                    <h2>Sign in</h2>
                    <div className={classes.inputBox}>
                        <input type="text" required/>
                        <span>Username</span>
                        <i></i>
                    </div>

                    <div className={classes.inputBox}>
                        <input type="password" required/>
                        <span>Password</span>
                        <i></i>
                    </div>

                    <div className={classes.links}>
                        <a href="#">Forgot Password</a>
                        <a href="#">Signup</a>
                    </div>
                    <input className={classes.submitButton} type="submit" value="Login" />

                </div>
            </div>
        </div>
    )
}

export default Signup;