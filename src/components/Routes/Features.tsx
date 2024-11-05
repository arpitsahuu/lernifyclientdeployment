"use client";

import React from 'react';
import { IoCodeSharp } from "react-icons/io5";
import { LuLayout, LuUsers } from "react-icons/lu";

const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tighter sm:text-3xl text-center mb-12 text-gray-800">
          Features
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="group border border-gray-200 sm:px-5 px-3 sm:py-7 py-5 rounded-lg hover:shadow-lg transition-all duration-300 bg-gray-100 shadow-sm">
            <div>
              <IoCodeSharp className="w-8 h-8 mb-2 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" />
              <h3 className="font-semibold sm:text-2xl pb-2 text-gray-900 text-lg">
                Cutting-edge Curriculum
              </h3>
            </div>
            <p>Stay ahead with courses covering the latest technologies and programming languages.</p>
          </div>
          
          <div className="group border border-gray-200 sm:p-5 p-3 rounded-lg hover:shadow-lg transition-all duration-300 bg-gray-100 shadow-sm">
            <div>
              <LuLayout className="w-8 h-8 mb-2 text-pink-500 group-hover:text-pink-600 transition-colors duration-300" />
              <h3 className="font-semibold sm:text-2xl pb-2 text-gray-900 text-lg">
                Interactive Learning
              </h3>
            </div>
            <p>Engage with hands-on projects, quizzes, and coding challenges to reinforce your skills.</p>
          </div>

          <div className="group border border-gray-200 sm:p-5 p-3 rounded-lg hover:shadow-lg transition-all duration-300 bg-gray-100 shadow-sm">
            <div>
              <LuUsers className="w-8 h-8 mb-2 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
              <h3 className="font-semibold sm:text-2xl pb-2 text-gray-900 text-lg">
                Expert Instructors
              </h3>
            </div>
            <p>Learn from industry professionals with real-world experience in tech.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
