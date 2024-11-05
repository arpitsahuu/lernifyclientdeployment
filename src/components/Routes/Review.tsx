"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-semibold text-gray-800 py-10 ">What Our Students Say</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials1}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Learnify has completely transformed the way I approach learning. The courses are well-structured, the instructors are top-notch, and the hands-on projects help me retain knowledge better than ever.",
      name: "Sarah Thompson",
      title: "Software Engineer",
    },
    {
      quote:
        "I wanted to switch careers into tech, and Learnify was my go-to platform. The curriculum is up-to-date with industry standards, and the support team is fantastic. I landed my first developer job within six months!",
      name: "Daniel Lee",
      title: "Junior Web Developer",
    },
    {
      quote:
        "Learnify's courses have been a game-changer for me. The interactive content and quizzes make learning fun and effective. I’m now more confident in my coding skills and have already applied them in my current role.",
      name: "Jessica Green",
      title: "Product Manager",
    },
    {
      quote:
        "The instructors at Learnify are true industry experts. Their guidance and detailed explanations have helped me tackle advanced topics with ease. I highly recommend it to anyone wanting to advance in tech.",
      name: "Ahmed Ali",
      title: "Data Analyst",
    },
    {
      quote:
        "I was new to programming, but Learnify’s beginner-friendly courses made it easy to start. I loved the blend of theory and practice, and I now have the skills to build my own projects. Thank you, Learnify!",
      name: "Mia Chen",
      title: "Aspiring Software Developer",
    },
  ];
  
  const testimonials1 = [
    {
      quote:
        "As someone juggling a full-time job and learning, Learnify’s self-paced courses were perfect. The platform is intuitive, and the material is top quality. I’ve already recommended it to friends!",
      name: "Emily Jackson",
      title: "Marketing Specialist",
    },
    {
      quote:
        "Learnify helped me build a solid foundation in tech. The projects and real-world examples gave me practical experience that I could showcase in interviews. It’s been a life-changing journey.",
      name: "Carlos Rivera",
      title: "IT Support Specialist",
    },
    {
      quote:
        "I wanted to level up my coding skills, and Learnify exceeded my expectations. The curriculum is modern, and I feel ready to take on more responsibilities at work. It’s an investment that pays off!",
      name: "Samantha Adams",
      title: "Frontend Developer",
    },
    {
      quote:
        "Learnify’s courses are both challenging and rewarding. I feel empowered to dive into complex projects and keep learning. The support and community make the experience even better!",
      name: "John Patel",
      title: "Freelance Developer",
    },
    {
      quote:
        "Thanks to Learnify, I was able to switch into the tech industry with confidence. The career guidance, the practical projects, and the clear explanations made the whole process smooth and enjoyable.",
      name: "Olivia Zhang",
      title: "Junior Data Scientist",
    },
    {
      quote:
        "With Learnify, I gained skills that I could directly apply to my job. The courses are comprehensive, the instructors are experienced, and the hands-on approach helped me retain so much more.",
      name: "Leo Martin",
      title: "Business Analyst",
    },
    {
      quote:
        "Learnify is an incredible platform for both beginners and seasoned professionals. I was able to refresh my knowledge in certain areas and even learn new skills to stay relevant in my field.",
      name: "Priya Nair",
      title: "Senior Project Manager",
    },
    {
      quote:
        "Learnify’s platform is user-friendly, and the learning paths are well thought out. I’ve gained confidence in my coding skills, and I’m excited to continue my learning journey here!",
      name: "Mike Peterson",
      title: "Junior Software Developer",
    },
    {
      quote:
        "The detailed curriculum and mentorship on Learnify helped me move into a tech role without any prior experience. The hands-on projects were especially helpful for building my portfolio.",
      name: "Isabella Kim",
      title: "UX Designer",
    },
    {
      quote:
        "I couldn’t be happier with my experience on Learnify! The structured courses and guidance helped me build skills efficiently. Now, I’m leading projects at work that I never thought I could handle.",
      name: "Noah Blake",
      title: "Lead Backend Developer",
    },
  ];
  