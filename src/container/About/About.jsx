import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer",
    ImgURL: images.about01,
  },
  {
    title: "Web Development",
    description: "I am a good web developer",
    ImgURL: images.about02,
  },
  {
    title: "Web Development",
    description: "I am a good web developer",
    ImgURL: images.about03,
  },
  {
    title: "Web Development",
    description: "I am a good web developer",
    ImgURL: images.about04,
  },
  {
    title: "Web Development",
    description: "I am a good web developer",
    ImgURL: images.about04,
  },
  {
    title: "Web Development",
    description: "I am a good web developer",
    ImgURL: images.about04,
  },
  {
    title: "Web Development",
    description: "I am a good web developer",
    ImgURL: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Discipline</span> will take <br /> were
        <span> motivation </span>won't
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.ImgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
