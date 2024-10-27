"use client";
import Image from 'next/image';
import makima from  "@/public/makima.jpg";
import askeladd from  "@/public/Askeladd.jpg";
import makima2 from  "@/public/mmmakim.jpg";
export default function Page({ params }) {
    function customHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0;  // Convert to a 32-bit integer
        }
        return hash.toString(16);  // Convert to hexadecimal string
    }
    function generateHashForInterval() {
        const now = new Date();
        const halfHourInterval = Math.floor(now.getTime() / (20 * 60 * 1000));
        const input = `${halfHourInterval}askeladd098`; // Combine halfHourInterval with the constant string
        console.log("Input for Hash:", input);
        return customHash(input); // Generate hash from combined input
    }

    const currentHash = generateHashForInterval();
    console.log(`http://localhost:3000/blogs/${currentHash}`);
    console.log("Slug from URL:", params.slug);

    if (params.slug === currentHash) {
        return <>
    <div className="container">
      {/* Top Cover Image */}
      <div className="coverImage">
      <Image
            src={askeladd}
            alt="Inline Blog Image"
            width={1200}
            height={200}
            layout="responsive  "
          />
      </div>
      {/* Blog Heading */}
      <h1 className="heading">What If Askeladd and Makima Got Married?</h1>

      {/* Blog Content */}
      <div className="content">
        {/* Text Paragraphs */}
                <p>In the realm of anime and manga, character pairings can lead to fascinating discussions about dynamics, personalities, and storytelling. Two characters that stand out in their respective series are <u>Askeladd</u> from <i>Vinland Saga</i> and <u>Makima</u> from <i>Chainsaw Man</i>. Both are complex figures, possessing unique traits and motivations that make them compelling. But what if these two enigmatic characters, each with their own ambitions and strategies, were to marry?</p>
        
        <h2>Character Profiles</h2>
        <ul>
            <li>
                <strong>Askeladd:</strong> A cunning and strategic warrior, Askeladd is known for his intelligence, charisma, and ruthlessness. He is a master manipulator who uses his wits to navigate the brutal world of the Viking Age. His backstory reveals a man burdened by his heritage and the expectations placed upon him. Askeladd is fiercely protective of those he cares about, particularly Thorfinn, despite often using him as a pawn in his grander schemes.
            </li>
            <li>
                <strong>Makima:</strong> A pivotal character in <i>Chainsaw Man</i>, Makima is an enigmatic figure with a chilling aura. As a high-ranking member of the Public Safety Devil Hunters, she is known for her manipulative nature and desire for control. Makima's ability to influence others and her hidden motives create an air of mystery around her. Her relationships often revolve around power dynamics, loyalty, and sacrifice.
            </li>
        </ul>
        
        {/* Inline Image */}
        <div className="inlineImage">
        <Image
          src={makima}
          alt="Blog Cover"
          width={100}
          height={100}
          layout="responsive"
        />
          
        </div>

        {/* Additional Paragraphs */}
       
                <p>If <u>Askeladd</u> and <u>Makima</u> were to marry, their relationship would likely be characterized by a complex blend of power, manipulation, and strategy. Both characters are highly intelligent and have their own agendas, which could lead to an intriguing interplay between them.</p>
        
        <h2>Power Play</h2>
        <p>Both Askeladd and Makima thrive on power and control. In a marriage, this could manifest in a constant battle for dominance. Askeladd, with his strategic mindset, would likely attempt to outmaneuver Makima, while she would use her manipulative tactics to keep him in check. Their power struggle could lead to a dynamic filled with tension and intrigue, as each tries to assert their influence over the other.</p>
        
        <h2>Shared Ambitions</h2>
        <p>While their methods may differ, both characters are driven by their ambitions. Askeladd seeks to create a legacy and make a name for himself, while Makima desires to control the world around her. Their shared understanding of ambition could lead to a mutual respect, even if their goals diverge. They might find common ground in their strategies and tactics, forming a formidable partnership in their pursuits.</p>        
        <h2>Emotional Manipulation</h2>

        <p>Both characters excel at emotional manipulation, albeit in different ways. Askeladd often uses his charm and charisma to sway others, while Makima employs a more insidious form of control. In their marriage, this could lead to a toxic yet fascinating relationship where both parties are constantly testing the limits of each others loyalty and emotional boundaries.</p>
        
        <h2>Potential Conflicts</h2>
        <p>Despite their similarities, significant conflicts would arise from their relationship:</p>
        <ul>
            <li>
                <strong>Trust Issues:</strong> Trust is a fragile concept in both <i>Vinland Saga</i> and <i>Chainsaw Man</i>. Askeladd's tendency to manipulate those around him may clash with Makima's need for absolute control. Each character's past experiences could lead to suspicions, making genuine connection difficult. They may find it hard to trust each other, leading to a marriage filled with doubts and insecurities.
            </li>
            <li>
                <strong>Moral Ambiguity:</strong> Both characters operate in morally gray areas, often making decisions that prioritize their objectives over the well-being of others. Askeladds willingness to sacrifice his own men for his ambitions and Makimas ruthlessness in eliminating threats could lead to ethical dilemmas in their marriage. Their shared moral ambiguity may either strengthen their bond or create friction as they grapple with the consequences of their actions.
            </li>
            <li>
                <strong>Impact on Others:</strong> Askeladd and Makima are both manipulative figures with a profound impact on those around them. Their marriage would likely affect their subordinates and allies, creating a ripple effect that could lead to betrayal, loyalty conflicts, and emotional turmoil among their associates. Characters like Thorfinn or Denji might find themselves caught in the crossfire, complicating their relationships and personal growth.
            </li>
        </ul>
        
        <h2>Themes Explored Through Their Marriage</h2>
        <p>A marriage between Askeladd and Makima would provide fertile ground for exploring various themes:</p>
        <ul>
            <li>
                <strong>Ambition vs. Love:</strong> The conflict between ambition and love is a central theme in both characters' narratives. Their relationship would raise questions about whether ambition can coexist with genuine affection. Would they be able to prioritize each others needs, or would their goals ultimately drive them apart?
            </li>
            <li>
                <strong>Manipulation and Control:</strong> Their marriage would serve as a commentary on manipulation and control within relationships. It would explore how love can be tainted by ulterior motives and the consequences of wielding power over others. This theme resonates with both characters' histories and the choices they make throughout their stories.
            </li>
        </ul>

        {/* Another Image */}
        <div className="inlineImage">
          <Image
            src={makima2}
            alt="Another Blog Image"
            width={800}
            height={400}
            layout="responsive"
          />
        </div>

        {/* Final Paragraphs */}
        <p>
        Legacy and Sacrifice: Both Askeladd and Makima are concerned with their legacies, whether through conquest or control. Their marriage could symbolize the sacrifices made in the pursuit of power and the potential costs of their ambitions. It would challenge the idea of what one is willing to sacrifice for love and legacy, creating a rich narrative tapestry.</p>
      </div>

      {/* Custom Note Styling */}
     

      {/* Styling */}
      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .coverImage {
          margin-bottom: 20px;
        }
        .heading {
          font-size: 2em;
          font-weight: bold;
          margin: 20px 0;
        }
        .content p {
          font-size: 1em;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .inlineImage {
          margin: 20px 0;
        }
        .note {
          font-size: 0.9em;
          color: #666;
          margin-top: 20px;
          text-align: center;
        }

        /* Mobile Responsive Styling */
        @media (max-width: 768px) {
          .heading {
            font-size: 1.8em;
          }
          .content p {
            font-size: 0.95em;
          }
        }
      `}</style>
    </div>

        </>;

        // do something with the slug
    }
    return (
        <div className="flex justify-center items-center w-full h-full min-h-screen">
            <iframe src="https://giphy.com/embed/E4cnIqDuNov1Pp10yC" width="480" height="360" style={{ border: 0 }} frameBorder="0" allowFullScreen></iframe>
            <p><a href="https://giphy.com/gifs/travisband-travis-E4cnIqDuNov1Pp10yC"></a></p>
        </div>
    );
}