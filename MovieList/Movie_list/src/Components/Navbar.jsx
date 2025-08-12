import {Link} from "react-router-dom";
import { useState } from "react";

export function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-gray-900 shadow-md text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
                            LJflix
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-red-400 transition"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-white hover:text-red-400 transition duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/Fav_movies"
                            className="text-white hover:text-red-400 transition duration-200"
                        >
                            Favorite Movies
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 pb-4">
                    <Link
                        to="/"
                        className="block px-4 py-2 text-white hover:bg-gray-700 transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/Fav_movies"
                        className="block px-4 py-2 text-white hover:bg-gray-700 transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Favorite Movies
                    </Link>
                </div>
            )}
        </nav>

    )
}