"use client"
import Hero from "@/components/Routes/Hero";
import Navbar from "@/components/Navbar";
import Heading from "@/components/utils/Heading";
import {  useState } from "react";
import Courses from "@/components/Routes/Courses";
import Features from "@/components/Routes/Features";
import { InfiniteMovingCardsDemo } from "@/components/Routes/Review";

export default function Home() {

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <main className=" \w-full">
      <Heading
        title="Learnify"
        description="Lernify is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
      <Navbar
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      ></Navbar>
      <Hero></Hero>
      <Courses />
      <Features/>
      <InfiniteMovingCardsDemo />
    </main>
  );
}

