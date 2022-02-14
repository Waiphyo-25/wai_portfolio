import React from "react";
import FooterItem from "./FooterItem";
import { Facebook, GitHub, Linkedin, Slack, Twitter } from "react-feather";

function Footer() {
  return (
    <footer className="flex h-auto flex-col items-center  justify-between bg-slate-900 md:flex-row">
      <div className="m-3 flex h-auto w-full flex-col items-center justify-between bg-slate-900 px-10 sm:flex-row">
        <div>
          <span className="text-sm text-gray-500">copyright@WaiPhyoOo2022</span>
        </div>
        <div className="flex max-w-2xl flex-grow justify-evenly py-4">
          <a href="https://github.com/Waiphyo-25/Waiphyo-25">
            <FooterItem Icon={GitHub} />
          </a>
          <a href="https://www.facebook.com/wai.phyo.251987/">
            <FooterItem Icon={Facebook} />
          </a>
          <a href="https://www.linkedin.com/in/waiphyo25/">
            <FooterItem Icon={Linkedin} />
          </a>
          <a href="https://app.slack.com/client/T02S6RRM6F6/D02SH6Y4BQR">
            <FooterItem Icon={Slack} />
          </a>
          <a href="https://twitter.com/WaiPhyo18956297">
            <FooterItem Icon={Twitter} />
          </a>
        </div>
        <div>
          <a href="#">
            <span> waiphyo.us@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
