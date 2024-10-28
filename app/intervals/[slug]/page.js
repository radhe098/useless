"use client";
import Image from "next/image";
import { generateSlug } from '@/utils/slug';
import ichigoZanpakutoCover from "@/public/mask.png";
import ichigoZanpakuto from "@/public/ichigo.jpg";
import ichigoZanpakuto2 from "@/public/zangetsu.png";
import Navbar from '@/components/Navbar';
import Link from "next/link";
import { useState } from "react";
export default function Page({ params }) {
  const [nextpage, setnextpage] =useState(false);
  const [clickCount, setClickCount] = useState(0);
    const slug2 = generateSlug("intervals");
    const slug3 = generateSlug("phase3");
const handleClick = () => {
      setClickCount((prevCount) => prevCount + 1);  
    };
    // const linkUrl = clickCount === 0 ? `/intervals/${slug2}` : '/ads';
    const linkUrl = clickCount === 0 ? '/ads' : `/phase3/${slug3}` ;
    // useEffect(() => {
      setInterval(() => {
          setnextpage(!nextpage);
      }, 5000);
     if( params.slug === slug2)
      {   
        return (
          <>
                <Navbar />
                <div className="container mx-auto p-5">
  {/* Top Cover Image */}
  <div className="coverImage mb-5">
    
  </div>

  {/* Blog Heading */}
  <h1 className="heading text-3xl font-bold mb-5">The Size of Ichigo's Zanpakutō and Specifications</h1>

  {/* Blog Content */}
  <div className="content">
    {/* Text Paragraphs */}
    <p>
    <em>Bleach</em> is a popular Japanese anime series created by Tite Kubo, centered on the life of Ichigo Kurosaki, a teenager who accidentally acquires the powers of a Soul Reaper. Tasked with guiding souls to the afterlife and defending the living from malevolent spirits known as Hollows, Ichigo must balance his new responsibilities with his normal life. The story explores Ichigo’s journey as he encounters a vast array of allies and enemies, each with unique powers and personalities, in different realms, including the human world, the Soul Society, and Hueco Mundo. Known for its intense battles, intricate lore, and themes of identity, friendship, and sacrifice, *Bleach* captivated audiences with its mix of action and supernatural elements. Through a combination of beautifully animated fight sequences and deep character development, the series has solidified its place as one of the defining works in anime, resonating with fans around the world.
    </p>
    <p className="mb-4">
      In the world of <em>Bleach</em>, Ichigo Kurosaki wields one of the most iconic swords known as the
      Zanpakutō, named Zangetsu. This weapon is not just a tool for combat; it symbolizes Ichigo's growth,
      his struggles, and the essence of his soul. But how does Zangetsu measure up in terms of size and
      specifications?
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
    <div className="inlineImage mb-5 flex justify-center">
      <Image
        src={ichigoZanpakuto} // Replace with the actual image source
        alt="Zangetsu"
        width={400}
        height={400}
        layout="fixed"
      />
    </div>

    {/* Additional Paragraphs */}
    <p className="mb-4">
      Zangetsu's length is significant for a Zanpakutō, providing Ichigo with a range advantage in
      battle. The blade's unique design and the hollow-like edge reflect his dual nature as a
      Soul Reaper and a part-Hollow.
    </p>
    <div className=" mb-3  flex items-center justify-center">
  <div className="m-auto">
    
      <p className='bg-red-600 px-4 py-2 text-white rounded-md"'>
        click on 👆 images👇 to get next page... 
      </p>

  </div>
</div>

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
    <div className="inlineImage mb-5  flex justify-center">
      <Image
        src={ichigoZanpakuto2} // Replace with the actual image source
        alt="Tensa Zangetsu"
        width={400}
        height={400}
        layout="fixed"
      />
    </div>

    {/* Final Paragraphs */}
    <p className="mb-4">
      The Zanpakutō not only serves as a weapon but also symbolizes Ichigo's growth as a Soul
      Reaper. Its size and specifications reflect his journey, showcasing how he has evolved
      through the series.
    </p>
    <p className="mb-4">
      Understanding the characteristics of Ichigo's Zanpakutō adds depth to the appreciation of
      his character and the battles he faces throughout the <em>Bleach</em> series.
    </p>

    {/* Link Button */}
    <div className="flex justify-center my-5">
    {nextpage ? (
      <Link
        onClick={handleClick}
        className="bg-red-600 px-4 py-2 text-white rounded-md"
        href={linkUrl}
      >
        Continue
      </Link>
    ) : (
      <p className='bg-red-600 px-4 py-2 text-white rounded-md"'>Loading...</p>
    )}
    </div>

    {/* Final Summary */}
    <p>
      Zangetsu not only embodies Ichigo's physical strength but also represents his inner struggles
      and emotional growth throughout the <em>Bleach</em> series. As Ichigo faces various adversaries,
      Zangetsu evolves alongside him, mirroring his transformation from a rebellious teenager to a
      determined and powerful Soul Reaper. The relationship between Ichigo and Zangetsu is complex;
      at times, it feels like a mentor-student dynamic, while at other moments, it reflects the
      tension between Ichigo's human side and his Shinigami heritage. This bond highlights the
      importance of understanding one's true self, as Ichigo learns to harmonize with Zangetsu's
      spirit, ultimately unlocking the full potential of his Zanpakutō. The sword becomes a symbol
      of Ichigo's journey, reminding him that true strength lies not just in power but in the
      acceptance of his identity and the willingness to protect those he loves.
    </p>
  </div>

  {/* Styling */}
  <style jsx>{`
    .container {
      max-width: 800px;
    }
    .coverImage, .inlineImage {
      margin-bottom: 20px;
    }
    .heading {
      font-size: 2em;
    }

    /* Mobile Responsive Styling */
    @media (max-width: 768px) {
      .heading {
        font-size: 1.8em;
      }
      .content p {
        font-size: 1em;
      }
    }
  `}</style>
</div>
          </>
             );
        }
       else{     
        return <div>My Post: {params.slug}</div>     
       }
   }