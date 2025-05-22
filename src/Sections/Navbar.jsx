import React from 'react'

export const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            className="h-10 w-auto"
                            src="#"
                            alt="Logo"
                        />
                    </div>


                    {/* Desktop Links */}
                    <div className="hidden sm:flex space-x-6">
                        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden px-4 pb-4">
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
                </div>
            )}
        </nav>
    )
}
