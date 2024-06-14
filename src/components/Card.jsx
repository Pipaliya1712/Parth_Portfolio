import React, { useRef } from "react";
import { motion } from "framer-motion";

const Card = ({imageUrl, title, videoUrl, description, github, live}) => {
  const videoRef = useRef(null);

  const handleMouseEnter = async () => {
    try{
    if (videoRef.current) {
      videoRef.current.style.display = "block";
      const videoSrc = videoRef.current;
      await videoSrc.play();
    }
  }catch(e){
  }
  };

  const handleMouseLeave = () => {
    try{
    if (videoRef.current) {
      videoRef.current.style.display = "none";
      const videoSrc = videoRef.current.src;
      videoRef.current.pause();
    }}
    catch(e){
    }
  };

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="rounded-t-lg w-full"
          src={imageUrl}
          alt="Thumbnail"
        />
        <iframe
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full rounded-t-lg"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "none" }}
        ></iframe>
      </div>
      <div className="p-5">
        <a href="helo">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between">
        {github && (

        <a
          href={github}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Source Code
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        )}
        {live && (
          <a
            href={live}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Go Live
          </a>
        )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
