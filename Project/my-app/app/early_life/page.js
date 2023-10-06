import React from "react";
import Image from "next/image";
import Background1 from "./../../public/img/messi.jpg";
import Background6 from "./../../public/img/messi-young.jpg";
import Background7 from "./../../public/img/messi-la-m.jpg";
import Background8 from "./../../public/img/messi-pep.jpg";
import Background9 from "./../../public/img/msn.jpg";
import Background10 from "./../../public/img/messi-leaves.jpeg";
import Searchbar from "@/components/Searchbar";

const page = () => {
  return (
    <div className="ml-5 mr-5 flex justify-center align-middle flex-col">
      <Searchbar />
      <h1 className="mt-5 ml-10 flex align-baseline text-[30px]">
        Early Life of the 🐐
      </h1>
      <div>
        <div className="m-5 flex flex-row rounded-xl hover:bg-red-300">
          <p className="flex align-baseline text-[25px] text-black m-5 text-left">
            Lionel Messi, often called "Leo" or "La Pulga" (The Flea), is a name
            that dances in the hearts of football fans worldwide.He was born on
            June 24, 1987 in Rosario, Argentina. Despite his small stature, he
            possessed a mesmerizing ability to dribble past opponents
            effortlessly. His love for the sport led him to join the youth ranks
            of Newell's Old Boys, a local club in Rosario, where his skills
            shone brighter than the stars. This is when disaster struck and he
            was diagnosed with 'Growth Hormone Deficiency'.
          </p>
          <Image
            src={Background6}
            alt="background image"
            className="w-[15%] h-auto"
          />
        </div>
        <div className="m-5 flex flex-row-reverse rounded-xl hover:bg-green-300">
          <p className="flex align-baseline text-[25px] text-black m-5 text-left">
            As the Messi family had relatives in Catalonia, they sought to
            arrange a trial with Barcelona in September 2000. Messi's life took
            a pivotal turn when he moved to Barcelona, Spain, to join the
            legendary FC Barcelona's youth academy, La Masia. Initially he
            struggled due to homesickness and injuries, however it was here that
            his footballing genius blossomed. Messi made his first-team debut at
            just 17 years old, and the world quickly realized they were
            witnessing something extraordinary.
          </p>
          <Image
            src={Background7}
            alt="background image"
            className="w-[15%] h-auto"
          />
        </div>
        <div className="m-5 flex flex-row hover:bg-orange-300 rounded-xl">
          <p className="flex align-baseline text-[25px] text-black m-5 text-left">
            Messi's early years at Barcelona were marked by his dazzling
            dribbling skills, close ball control, and innate ability to score
            goals. He formed a formidable attacking trio with Ronaldinho and
            Samuel Eto'o. In 2006, Messi helped Barcelona win the UEFA Champions
            League and La Liga. He was awarded the FIFA World Player of the Year
            for the first time in 2009.
          </p>
          <Image
            src={Background1}
            alt="background image"
            className="w-[15%] h-auto"
          />
        </div>
        <div className="m-5 flex flex-row-reverse hover:bg-teal-300 rounded-xl">
          <p className="flex align-baseline text-[25px] text-black m-5 text-left">
            Under the management of Pep Guardiola, Messi's game reached new
            heights. He was often deployed as a "false nine," a central forward
            with immense playmaking responsibilities. In the 2008-2009 season,
            Barcelona won an unprecedented treble: La Liga, Copa del Rey, and
            the UEFA Champions League. Messi won his second Ballon d'Or in 2009
            and went on to win it three more times consecutively.
          </p>
          <Image
            src={Background8}
            alt="background image"
            className="w-[15%] h-auto"
          />
        </div>
        <div className="m-5 flex flex-row- hover:bg-yellow-300 rounded-xl">
          <p className="flex align-baseline text-[25px] text-black m-5 text-left">
            The signing of Neymar and the emergence of Luis Suárez formed the
            famous "MSN" attacking trio. Together, they led Barcelona to another
            treble in the 2014-2015 season. Messi, Neymar, and Suárez were
            instrumental in Barcelona's attacking prowess.
          </p>
          <Image
            src={Background9}
            alt="background image"
            className="w-[15%] h-auto"
          />
        </div>
        <div className="m-5 flex flex-row-reverse hover:bg-slate-300 rounded-xl">
          <p className="flex align-baseline text-[25px] text-black m-5 text-left">
            Financial struggles and aging squad members posed challenges for
            Barcelona. Messi's contract expired in 2021, and due to financial
            constraints, Barcelona was unable to renew it under La Liga's salary
            cap regulations. On August 5, 2021, Messi tearfully bid farewell to
            Barcelona after 21 years with the club.
          </p>
          <Image
            src={Background10}
            alt="background image"
            className="w-[15%] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
