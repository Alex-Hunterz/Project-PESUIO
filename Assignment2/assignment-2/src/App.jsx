import React from "react";
import Search from "./components/Search";
import Hero from "./components/Hero";
import Card from "./components/Card";

const postData = [
  {
    pic: "/img/t1.jpg",
    ch_pic: "/img/p1.jpg",
    title: "$1 Vs $100,000,000 Car!",
    ch_name: "Mr Beast",
    views: "4.5M Views",
    duration: "30min",
  },
  {
    pic: "/img/t3.jpg",
    ch_pic: "/img/p3.jpg",
    title: "Bald Brotherhood Gang | Key & Peele",
    ch_name: "Comedy Central",
    views: "4.5M Views",
    duration: "1hr",
  },
  {
    pic: "/img/t10-1.jpg",
    title: "How to Invest for Beginners",
    ch_pic: "/img/p10-1.jpg",
    ch_name: "Ali Abdaal",
    views: "10.5M Views",
    duration: "2.5hr",
  },
  {
    pic: "/img/t11.jpg",
    ch_pic: "/img/p11.jpg",
    title: "Tom & Jerry | A Bit of Fresh Air!",
    ch_name: "WB Kids",
    views: "4.5M Views",
    duration: "2.5hr",
  },
  {
    pic: "/img/t4.jpg",
    ch_pic: "/img/p4.jpg",
    title: "Office PRANKS | Pam Living Up To The Halpert Name ",
    ch_name: "The Office ",
    views: "4.5M Views",
    duration: "2.5hr",
  },
  {
    pic: "/img/t5.jpg",
    ch_pic: "/img/p5.jpg",
    title: "World’s Smallest Nerf Gun Shoots an Ant",
    ch_name: "Mark Rober",
    views: "4.5 Mil",
    duration: "2.5hr",
  },
  {
    pic: "/img/t6.jpg",
    ch_pic: "/img/p6.jpg",
    title: "DO THIS If You’re A Broke Student",
    ch_name: "Iman Gadzhi",
    views: "4.5 Mil",
    duration: "2.5hr",
  },
  {
    pic: "/img/t7.jpg",
    ch_pic: "/img/p7.jpg",
    title: "How To Get Good At LeetCode",
    ch_name: "Qiqi Impact",
    views: "4.5 Mil",
    duration: "2.5hr",
  },
  {
    pic: "/img/t8.jpg",
    ch_pic: "/img/p8.jpg",
    title: "I Hired Special Forces To Beat My Friends At Paintball",
    ch_name: "Max Fosh",
    views: "4.5 Mil",
    duration: "2 Months Ago",
  },
  {
    pic: "/img/t9.jpg",
    ch_pic: "/img/p9.jpg",
    title: "These Guys Are Definitely in a Cult - Key & Peele",
    ch_name: "Key & Peele",
    views: "4.5 Mil",
    duration: "2.5hr",
  },
];

const App = () => {
  return (
    <main className="">
      <Search />
      <Hero />
      <section className="grid grid-cols-1 mr-5 ml-5 gap-4 sm:grid-cols-2 md:grid-cols-5">
        {postData.map((post) => (
          <Card
            pic={post.pic}
            ch_pic={post.ch_pic}
            title={post.title}
            ch_name={post.ch_name}
            views={post.views}
            duration={post.duration}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
