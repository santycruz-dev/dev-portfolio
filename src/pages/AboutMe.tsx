import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bio from "@/components/Bio";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Learn more about my experience, skills and professional journey
            </p>
          </div>
          
          <Bio />

          <div className="mt-16 space-y-8 max-w-3xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">My Story</h2>
              <p className="text-muted-foreground mb-4">
                My journey in web development began over 5 years ago when I discovered the fascinating combination of logic and creativity that frontend offers. Since then, I've worked on a variety of projects that have strengthened my experience and expanded my skills.
              </p>
              <p className="text-muted-foreground">
                What I enjoy most about frontend development is the constant evolution and the challenge of creating interfaces that are not only visually appealing but also functional, accessible and intuitive for all types of users.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Work Philosophy</h2>
              <p className="text-muted-foreground mb-4">
                I firmly believe in user-centered development. Every line of code I write aims to improve the experience of the people who will use the final product.
              </p>
              <p className="text-muted-foreground">
                My approach combines modern design principles with development best practices, web accessibility and performance optimization, always seeking the perfect balance between aesthetics and functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Beyond Coding</h2>
              <p className="text-muted-foreground">
                When I'm not programming, I like to stay updated about new technologies, participate in developer communities and contribute to open source projects. I also enjoy photography, video games and exploring new places.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
