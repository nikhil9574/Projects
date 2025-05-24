import React from 'react'

export const Footer = () => {
    return (

        <div className={'mt-10'}>
        <footer className="bg-[#898989] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/*Left Section*/}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold shareTech">Nikhil Prajapati</h2>
                        <p className="text-sm text-white">© 2025 All rights reserved.</p>
                    </div>

                    {/*Social Links*/}
                    <div className="flex space-x-4">
                        <a href="https://github.com/yourusername" target="_blank"
                           className="hover:text-blue-400 transition">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="...GitHub icon path..."/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank"
                           className="hover:text-blue-400 transition">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="...LinkedIn icon path..."/>
                            </svg>
                        </a>
                        <a href="mailto:youremail@example.com" className="hover:text-blue-400 transition">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="...Email icon path..."/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/*<!-- Optional Links*/}
                <div className="mt-6 text-center text-sm text-white">
                    <a href="#" className="mx-2 hover:underline">About</a>
                    <a href="#" className="mx-2 hover:underline">Projects</a>
                    <a href="#" className="mx-2 hover:underline">Contact</a>
                </div>
            </div>
        </footer>
        </div>
    )
}
