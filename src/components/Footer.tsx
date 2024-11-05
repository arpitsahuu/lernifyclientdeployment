import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className=" py-12 mt-16 border-t-[1px] border-gray-300 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">About Learnify</h3>
                        <p className="text-gray-800">Unlock Your Tech Potential <br /> with Courses Designed for Success</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-800 hover:text-blue-300 transition duration-300">Courses</Link></li>
                            <li><Link href="/training" className="text-gray-800 hover:text-blue-300 transition duration-300">Questions</Link></li>
                            <li><Link href="/contact" className="text-gray-800 hover:text-blue-300 transition duration-300">Contact Us</Link></li>
                        
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-800"><a href="mailto:contact@tnplab.in?subject=Let's%20Work%20Together">Email: contact@learnify.in</a></li>
                            <li className="text-gray-800"><a href="mailto:contact@tnplab.in?subject=Let's%20Work%20Together">Email: contact@learnify.com</a></li>
                          
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-800 hover:text-blue-500 transition duration-300">
                                <FaFacebookSquare className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-800 hover:text-blue-500 transition duration-300">
                                <FaTwitterSquare className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-800 hover:text-blue-500 transition duration-300">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-center items-center">
                    <p className="text-gray-900 text-sm mb-4 md:mb-0">
                        &copy; 2024 Learnify. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer

