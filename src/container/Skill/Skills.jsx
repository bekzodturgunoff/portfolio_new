import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

function Skills() {
  return (
    <>
      <h2 className="head-text">
        Skills <span>and</span> Experince
      </h2>
    </>
  );
}

export default AppWrap(Skills, "skills");
