// Import React and React Router Link
// import React from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {


    useEffect(() => {
        AOS.init();
    })


    return (
        <footer className="bg-black py-10" data-aos="zoom-out" data-aos-duration="2000">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Logo and Description */}
                    <div className="max-w-lg">
                        <Link to="/" className="flex items-center text-customblack text-4xl font-bold mb-4">
                            <span className="text-customred text-4xl font-bold">Port-</span>FOLIO<span className="text-customred font-bold">.</span>
                        </Link>
                        <p className="text-customblack font-light text-lg font-redhat">
                            I excel at creating user-friendly interfaces that enhance user experience across all devices.
                        </p>
                    </div>
                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-2xl font-semibold text-customred mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-customblack hover:underline font-redhat">About</Link></li>
                            <li><Link to="/projects" className="text-customblack hover:underline font-redhat">Projects</Link></li>
                            <li><Link to="/services" className="text-customblack hover:underline font-redhat">Services</Link></li>
                            <li><Link to="/contact" className="text-customblack hover:underline font-redhat">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Contact Information */}
                    <div>
                        <h4 className="text-2xl font-semibold text-customred mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-customblack">Email: <a href="mailto:example@example.com" className="hover:text-customred font-redhat">usamadeveloper14@gmail.com</a></li>
                            <li className="text-customblack">Phone: <a href="tel:+1234567890" className="hover:text-customred font-redhat">+92 333-1411377</a></li>
                            <li className="text-customblack">Address: LDA, Jubilee Town</li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h4 className="text-2xl font-semibold text-customred mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-customblack hover:text-customred font-redhat">
                                Facebook
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-customblack hover:text-customred font-redhat">
                                Twitter
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-customblack hover:text-customred font-redhat">
                                LinkedIn
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-customblack hover:text-customred font-redhat">
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