import React from "react";
import Image from "next/image";
import Link from "next/link";



const Portfolio = () => {
  return (
    <section className="section1">
      <h1 className="heading">Portfolio</h1>

      <div className="card-container">
        <div className="card">
          <Link href="https://traveling-website-olive.vercel.app">
            <Image
              src="/travel.png"
              width={300}
              height={180}
              alt="Travel Website"
              className="image"
            />
          </Link>
        </div>

        <div className="card">
          <Link href="https://hackathone-milestone-4-henna.vercel.app">
            <Image
              src="/resume.png"
              width={300}
              height={180}
              alt="Resume Website"
              className="image"
            />
          </Link>
        </div>

        <div className="card">
          <Link href="https://gucci-template.vercel.app">
            <Image
              src="/gucci.png"
              width={300}
              height={180}
              alt="Gucci Template"
              className="image"
            />
          </Link>
        </div>
      </div>

       {/* Second Row */}
      <div className="card-container">
        <div className="card">
          <Link href="https://speaker-website-landing-page.vercel.app">
            <Image
              src="/speaker.png"
              width={300}
              height={180}
              alt="Speaker Website"
              className="image"
            />
          </Link>
        </div>

        <div className="card">
          <Link href="https://phonic-book-for-kids.vercel.app">
            <Image
              src="/phonic.png"
              width={300}
              height={180}
              alt="Phonic Book"
              className="image"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;