import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
    return(
        <section className="flex justify-center items-center flex-col gap-6" style={{padding: "40px 20px", height: "70vh"}}>
            <h1 className="text-5xl font-bold text-white md:text-4xl">Newsletter</h1>
            <h2 className="text-2xl text-white md:text-base">Get timely updates from your favorites products.</h2>
            <div className="flex w-2/5 md:w-full">
                <input className="border-none outline-0 w-full p-1" type="email" placeholder="Your email"/>
                <button className="w-12 h-full bg-red">
                    <FontAwesomeIcon color="white" icon={faPaperPlane} />
                </button>
            </div>
        </section>

    )
}

export default Newsletter;