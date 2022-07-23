import React from "react";
import { BsInstagram, BsTelegram, BsGithub } from "react-icons/bs";
import "./SocialMedia.scss";

export default function SocialMedia() {
  return (
    <div className="app__social-circles">
      <div>
        <a href="https://t.me/bekzodturgunoff">
          <BsTelegram />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/turgunoffbekzod_c">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href="https://github.com/bekzodturgunoff">
          <BsGithub />
        </a>
      </div>
    </div>
  );
}
