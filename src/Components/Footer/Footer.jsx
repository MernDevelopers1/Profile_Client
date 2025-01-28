// Import React and React Router Link
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Logo and Description */}
                    <div className="max-w-lg">
                        <Link to="/" className="flex items-center text-[#555555] text-4xl font-bold mb-4">
                            <span className="text-darkyellow text-4xl font-bold">Port-</span> FOLIO<span className="text-darkyellow font-bold">.</span>
                        </Link>
                        <p className="text-lightblack font-light text-lg">
                            I excel at creating user-friendly interfaces that enhance user experience across all devices.
                        </p>
                    </div>
                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-600 hover:underline">About</Link></li>
                            <li><Link to="/projects" className="text-gray-600 hover:underline">Projects</Link></li>
                            <li><Link to="/services" className="text-gray-600 hover:underline">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-600 hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-600">Email: <a href="mailto:example@example.com" className="hover:text-darkyellow">usamadeveloper14@gmail.com</a></li>
                            <li className="text-gray-600">Phone: <a href="tel:+1234567890" className="hover:text-darkyellow">+92 333-1411377</a></li>
                            <li className="text-gray-600">Address: LDA, Jubilee Town</li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-darkyellow">
                                Facebook
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-darkyellow">
                                Twitter
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-darkyellow">
                                LinkedIn
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-darkyellow">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t-2 border-gray-300 pt-4 text-center">
                    <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} PortFolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;