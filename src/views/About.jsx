import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { cp } from "../constants";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I'm a self-taught web developer who brings website ideas to life, from concept to launch. I turn designs into user-friendly and high-performance web applications, always focusing on clean and reusable code. I love combining design, technology, and innovation to create impactful projects, and I manage everything from the first idea to its release.  With a solid foundation in Node.js, Express.js, React, and MongoDB, I have developed dynamic web applications and mobile solutions. <br /><br />
              In addition to web development, I'm a skilled competitive programmer with a <b>4-star rating on CodeChef</b> . This has improved my problem-solving skills and understanding of data structures and algorithms, which I use to build efficient web applications. <br /><br />
              Right now, I'm working on improving my backend development skills and looking for new challenges and opportunities to contribute to innovative projects.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap  ">
            {cp.map((cp, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      },
                      },
                      hidden: { opacity: 1, y: 80 },
                      }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 md:w-48 w-40"
              >
                
                <a href={cp.link}>
                <img alt="" src={cp.url} className="w-12" />
                </a>
                <a href={cp.link}>
                <h4 className="text-md ml-4">{cp.name}</h4>
                </a>
                
              </motion.div>
            ))}
          </motion.div>
          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
