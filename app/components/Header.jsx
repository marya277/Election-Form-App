import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-indigo-400">
            <div className="container mx-auto flex items-center justify-between py-4">
                <div className="text-white font-bold">
                    <Link href="/"  className="text-white font-bold">
                        Votación App
                    </Link>
                </div>

                <nav className="space-x-4">
                    <Link href="/"  className="text-white font-bold">
                        Home
                    </Link>
                    <Link href="/logout" className="text-white font-bold" >
                        Logout
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
