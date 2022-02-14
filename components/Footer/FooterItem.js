import React from "react";

function FooterItem({ Icon }) {
  return (
    <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
      <Icon className="mb-1 inline-block h-8 w-8 rounded-full border ring-1 ring-white group-hover:animate-bounce" />
    </div>
  );
}

export default FooterItem;
