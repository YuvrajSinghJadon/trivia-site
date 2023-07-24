import React from "react";
import aboutImage from "../assets/about_image2.svg";

const About = () => {
  return (
    <section className="h-screen  dark:text-gray-50">
      <div className="container pt-5 mx-auto px-4 md:px-10 ">
        <div className="flex flex-col relative md:flex-row items-center justify-center space-y-6 md:space-y-0">
          {/* About Image */}
          <div className="md:w-1/2 z-0 w-full h-auto pt-11">
            <img
              src={aboutImage}
              alt="About Trivia Website"
              className="rounded-lg shadow-md "
            />
          </div>
          {/* About Content */}
          <div className="md:w-3/2 md:pl-10 z-1 absolute top-3">
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Welcome to Our Trivia World
            </h1>
            <div className="text-lg text-blue-950 mb-6">
              <h2 className="text-2xl mb-2">
                Welcome to Trivia Titan - the ultimate destination for trivia
                enthusiasts!
              </h2>
              <p>
                At Trivia Titan, we believe that knowledge is power and having
                fun while learning is the key to unlocking your true potential.
                Our platform offers an exciting and engaging way to challenge
                yourself and test your knowledge across a wide range of topics.
              </p>
              <p>
                Whether you are a seasoned quizzer or just getting started,
                Trivia Titan has something for everyone. Choose from a variety
                of categories, from General Knowledge to Entertainment, Science
                to Sports, and much more. Challenge your friends, family, or
                even yourself to see who can earn the coveted title of Trivia
                Titan!
              </p>
              <p>
                Our carefully curated questions are designed to entertain,
                educate, and spark curiosity. Each quiz presents a unique
                opportunity to dive into fascinating facts and discover new
                information. Don't worry if you don't get every answer right -
                Trivia Titan is all about learning and growing together.
              </p>
              Join our thriving community of knowledge seekers and embark on a
              journey of intellectual exploration. With every quiz, you'll not
              only expand your knowledge but also have a blast competing with
              others. So, what are you waiting for? Become a Trivia Titan today
              and let the quest for knowledge begin! Let's see if you have what
              it takes to conquer the world of trivia and reign supreme as the
              ultimate Trivia Titan!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
