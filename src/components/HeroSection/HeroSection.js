import React, { useContext, useRef, useState } from "react";
import { MenuContext } from "../Context/MenuContext";

import HeroVideo from "../../assets/video-2.mp4";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { GradientBtn } from "../Utils/GradientBtn";

function HeroSection() {
  const { isMenuShown } = useContext(MenuContext);

  const [isVideo, setIsVideo] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideo(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideo(true);
  };

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={HeroVideo}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <div
        className={`flex flex-col items-center justify-center duration-500 w-full py-4 ${isVideo?"":"bg-black/40"} ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
        <h1 className="text-5xl lg:text-7xl text-white mb-4 ">CESAC</h1>
        <h1 className="text-4xl lg:text-7xl text-white mb-10 uppercase">
          computer enginerring students association of cusat
        </h1>
        <div className="flex justify-center items-center ">
          <GradientBtn className="capitalize" title="Button" />
          <GradientBtn className="capitalize mx-12" title="Button" />
          {isVideo ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 hover:text-thViolet"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 hover:text-thViolet"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
