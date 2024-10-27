"use client";
import React from "react";
import Image from "next/image";
import ichigoZanpakutoCover from "@/public/ichigo.jpg";
import ichigoZanpakuto from "@/public/ichigo.jpg";
import ichigoZanpakuto2 from "@/public/ichigo.jpg";
export default function Home() {
  console.log("Hello, World!");
return (
  <>
    <div className="container mx-auto p-5">
      {/* Top Cover Image */}
      <div className="coverImage mb-5">
        <Image
          src={ichigoZanpakutoCover} // Replace with the actual image source
          alt="Ichigo's Zanpakutō"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>

      {/* Blog Heading */}
      <h1 className="heading text-3xl font-bold mb-5">The Size of Ichigo's Zanpakutō and Specifications</h1>

      {/* Blog Content */}
      <div className="content">
        {/* Text Paragraphs */}
        <p className="mb-4">
          In the world of *Bleach*, Ichigo Kurosaki wields one of the most iconic swords known as the
          Zanpakutō, named Zangetsu. This weapon is not just a tool for combat; it symbolizes Ichigo's
          growth, his struggles, and the essence of his soul. But how does Zangetsu measure up in terms
          of size and specifications?
        </p>

        <h2 className="text-2xl font-semibold mb-3">Zanpakutō Overview</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Name:</strong> Zangetsu
          </li>
          <li>
            <strong>Type:</strong> Standard Zanpakutō
          </li>
          <li>
            <strong>Size:</strong> Approximately 2.4 meters (7.9 feet) in length
          </li>
          <li>
            <strong>Weight:</strong> Estimated around 5 kg (11 lbs)
          </li>
        </ul>

        {/* Inline Image */}
        <div className="inlineImage mb-5">
          <Image
            src={ichigoZanpakuto} // Replace with the actual image source
            alt="Zangetsu"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        {/* Additional Paragraphs */}
        <p className="mb-4">
          Zangetsu's length is significant for a Zanpakutō, providing Ichigo with a range advantage in
          battle. The blade's unique design and the hollow-like edge reflect his dual nature as a
          Soul Reaper and a part-Hollow.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Specifications</h2>
        <p className="mb-4">
          Ichigo's Zanpakutō possesses remarkable attributes that contribute to his fighting style:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Durability:</strong> Zangetsu can withstand immense physical and spiritual pressure,
            making it suitable for Ichigo's combat against powerful foes.
          </li>
          <li>
            <strong>Reiryoku:</strong> Infused with Ichigo's spiritual energy, the blade enhances his
            abilities, allowing for devastating attacks.
          </li>
          <li>
            <strong>Shikai Form:</strong> In its initial release, Zangetsu's power is unleashed, granting
            Ichigo increased speed and strength.
          </li>
          <li>
            <strong>Bankai Form:</strong> Ichigo's Bankai, Tensa Zangetsu, compresses his power and
            enables him to move at incredible speeds, making him a formidable opponent.
          </li>
        </ul>

        {/* Another Image */}
        <div className="inlineImage mb-5">
          <Image
            src={ichigoZanpakuto2} // Replace with the actual image source
            alt="Tensa Zangetsu"
            width={800}
            height={400}
            layout="responsive"
          />
        </div>

        {/* Final Paragraphs */}
        <p className="mb-4">
          The Zanpakutō not only serves as a weapon but also symbolizes Ichigo's growth as a Soul
          Reaper. Its size and specifications reflect his journey, showcasing how he has evolved
          through the series.
        </p>
        <p>
          Understanding the characteristics of Ichigo's Zanpakutō adds depth to the appreciation of
          his character and the battles he faces throughout the *Bleach* series.
        </p>
      </div>

      {/* Custom Note Styling */}
      {/* You can add any notes or additional sections here */}

      {/* Tailwind CSS Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .heading {
            font-size: 2.5em;
          }
        }
      `}</style>
    </div>
  </>
     ); }