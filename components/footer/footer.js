import classes from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Footer = () => {
  const session = useSession();

  console.log(session);

  return (
    <div className=" bg-header px-8 py-8 flex justify-between text-white md:flex-col md:gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl">Our social Media</h1>
        <div className="flex gap-4">
          <div
            className={classes.socialMedia}
            style={{ background: "#3B5999" }}
          >
            <FontAwesomeIcon className="text-xl" icon={faFacebook} />
          </div>
          <div
            className={classes.socialMedia}
            style={{ background: "#E4405F" }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div
            className={classes.socialMedia}
            style={{ background: "#55ACEE" }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div
            className={classes.socialMedia}
            style={{ background: "#E60023" }}
          >
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl">Useful Links</h1>
        <div className="flex gap-10">
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
          {!session.data && (
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/register">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl">Contact</h1>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2">
            <FontAwesomeIcon
              className="pt-1"
              color="#FF4A59"
              icon={faMapMarker}
            />
            <p>Iran, Tehran</p>
          </li>
          <li className="flex gap-2">
            <FontAwesomeIcon className="pt-1" color="#FF4A59" icon={faPhone} />
            <p>+ 1 234 56 78</p>
          </li>
          <li className="flex gap-2">
            <FontAwesomeIcon
              className="pt-1"
              color="#FF4A59"
              icon={faEnvelope}
            />
            <p>aminfarid1234@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
