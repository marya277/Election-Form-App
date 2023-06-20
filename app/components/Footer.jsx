import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
    <footer className="text-center text-white bg-indigo-600">
        <div className="container flex justify-center py-5">
        <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 bg-indigo-600"
        >
            <FaFacebookF />
        </button>
        <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 bg-indigo-600"
        >
            <FaYoutube />
        </button>
        <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 bg-indigo-600"
        >
            <FaInstagram />
        </button>
        <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2 bg-indigo-600"
        >
            <FaTwitter />
        </button>
        </div>

        <div className="text-center py-3 bg-opacity-20 bg-black">
        © 2023 - Made with{" "}
        <span role="img" aria-label="Love">
            ❤️
        </span>{" "}
        by <Link href="">Mary Arroyo</Link>
        </div>
    </footer>
    );
};

export default Footer;
