import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 2000,
      offset: 120,
    });
  }, []);
  const opentab = (tabname) => {
    var tablinks = document.getElementsByClassName("tab-link");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (var tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    for (var tablink of tablinks) {
      tablink.classList.remove("active-link");
    }

    // console.log(tabname);
    if (tabname === "skills") {
      const sk = document.getElementById("skills").classList.add("active-tab");
      const sk1 = document
        .getElementById("skills1")
        .classList.add("active-link");
    } else if (tabname === "education") {
      const ed = document
        .getElementById("education")
        .classList.add("active-tab");
      const ed1 = document
        .getElementById("education1")
        .classList.add("active-link");
    } else {
      const ex = document
        .getElementById("experience")
        .classList.add("active-tab");
      const ex1 = document
        .getElementById("experience1")
        .classList.add("active-link");
    }
  };
  return (
    <div id="about" className="mt-10 lg:mx-10 mx-3 md:mx-5">
      <div className="md:flex lg:gap-24 gap-12">
        <img data-aos="flip-right" className="w-96 rounded-lg h-fit" src="/profile.jpeg" alt="" />
        <div className="max-sm:mt-5">
          <h3 className="font-bold text-3xl">About Me</h3>
          <p className=" text-gray-600 mt-2">
            Hello everyone! 👋 My name is Hamim, and I’m a passionate Full-Stack
            Web Developer who loves building dynamic, fast, and user-friendly
            web applications. My journey in web development started with a
            curiosity about how websites work, and over time, I’ve honed my
            skills in React.js, Node.js, Express.js, MongoDB, and Tailwind CSS
            to create seamless digital experiences. I specialize in modern UI/UX
            design, ensuring that every website I build is not only functional
            but also visually appealing. Whether it's an e-commerce platform, a
            travel booking system, or a real-time communication feature, I enjoy
            turning ideas into reality through code. Currently, I’m also
            exploring Kotlin for backend development and WebSockets to implement
            real-time chat and notifications. I believe in continuous learning
            and love experimenting with new technologies to stay ahead in the
            ever-evolving web landscape. Apart from coding, I’m a big fan of
            custom UI design, and I always strive to create unique and engaging
            user experiences. I work on multiple projects, including Crazy Shop
            (E-commerce), SpecChecker (Mobile Specs), and a Travel Agency
            Website, among others. I use Arch Linux with the yay AUR helper,
            which gives me full control over my development environment. This
            allows me to optimize my workflow and enhance productivity. My goal
            is to keep growing as a developer, contribute to exciting projects,
            and eventually secure a great opportunity in the field. If you’re
            interested in collaborating, feel free to reach out. Let’s build
            something amazing together! 🚀 Thank you! 🙌
          </p>
          <div className="flex gap-8 tab-title mt-5 opacity-70">
            <button
              id="skills1"
              onClick={() => opentab("skills")}
              className="tab-link active-link"
            >
              Skills
            </button>
            <button
              id="experience1"
              onClick={() => opentab("experience")}
              className="tab-link"
            >
              Experience
            </button>
            <button
              id="education1"
              onClick={() => opentab("education")}
              className="tab-link"
            >
              Education
            </button>
          </div>
          <div id="skills" className="tab-contents active-tab mt-5">
            <ul className="">
              <li className="font-semibold text-lg text-[#ff004f] opacity-70">
                Technologies
              </li>
              <li className="text-gray-600">
                HTML5, CSS3, Javascript, Tailwind CSS, React JS, Git, GitHub,
                Node.JS, Tanstack query, JWT, AXIOS, Express.JS
              </li>
              <li className="font-semibold text-lg text-[#ff004f] opacity-70 mt-3">
                Tools
              </li>
              <li className="text-gray-600">
                VS Code, Vercel, Figma, Netlify, Canva, ChatGPT
              </li>
              <li className="font-semibold text-lg text-[#ff004f] opacity-70 mt-3">
                Soft skills
              </li>
              <li className="text-gray-600">
                Problem-Solving, Time Management, Continuous Learning,
                Communication, Responsibility
              </li>
            </ul>
          </div>
          <div id="experience" className="tab-contents mt-5 opacity-70">
            <ul className="">
              <li className="font-semibold text-[#ff004f]">
                {" "}
                I have no job experience
              </li>
            </ul>
          </div>
          <div id="education" className="tab-contents mt-5 ">
            <ul className="">
              <li className="font-semibold opacity-70 text-[#ff004f]">
                2022-2026
              </li>
              <li className="text-gray-600">
                {" "}
                Dhaka Polytechnic Institute of Computer Science and Technology
              </li>
              <li className="font-semibold opacity-70 text-[#ff004f] mt-3">
                2019-2021
              </li>
              <li className="text-gray-600">
                {" "}
                Ruhitarpar D.M High School of Science
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
