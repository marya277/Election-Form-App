import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: '#4F46E5' }}>
            <div className="container flex justify-center py-5">
                <button
                    type="button"
                    className="btn btn-primary btn-lg btn-floating mx-2"
                    style={{ backgroundColor: '#4F46E5' }}
                >
                    <FaFacebookF />
                </button>
                <button
                    type="button"
                    className="btn btn-primary btn-lg btn-floating mx-2"
                    style={{ backgroundColor: '#4F46E5' }}
                >
                    <FaYoutube />
                </button>
                <button
                    type="button"
                    className="btn btn-primary btn-lg btn-floating mx-2"
                    style={{ backgroundColor: '#4F46E5' }}
                >
                    <FaInstagram />
                </button>
                <button
                    type="button"
                    className="btn btn-primary btn-lg btn-floating mx-2"
                    style={{ backgroundColor: '#4F46E5' }}
                >
                    <FaTwitter />
                </button>
            </div>

            <div className="text-center py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 - Made with{' '}
                <span role="img" aria-label="Love">
                    ❤️
                </span>{' '}
                by <Link href="">Mary Arroyo</Link>
            </div>
        </footer>
    );
};

export default Footer;
