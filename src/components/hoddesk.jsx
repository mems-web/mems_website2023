import React from "react";
import "./section.css";




import { FaEnvelope } from "react-icons/fa";
import prof20 from "./profiles/profimages/prof20.jpeg";

// import Slider from './Slider';

const section = () => {

  
  return (
    <>
    <span className="heading">HOD DESK</span>
      <div className="studentcbutton">
        <a href="Studentcorner">
          <button className="button">Student Corner</button>
        </a>
      </div>

      <div className="sec">
        <div className="sec2">
          {" "}
          <div className="sec-img">
            <img src={prof20} alt="we" />
            <hr />
            <div className="hodtext1">
              <div className="name">Prof. Ajay Kumar Kushwaha</div>
              <div className="post"> HoD & Associate Professor </div>
              <div className="post"> Office : Pod 1-D 301 </div>
              <div className="post">
                {" "}
                Phone no(
                <i>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                  </svg>
                </i>
                ) : +91-731-666-3478{" "}
              </div>
              <div className="post">
                {" "}
                Email (
                <i>
                  <FaEnvelope />
                </i>
                ) :hodmems@iiti.ac.in
              </div>
            </div>
          </div>
          <div className="sec-cont">
            <div className="sec-conthead">About The Department</div>

            <div className="About_department_text">
            We extend a cordial welcome to the official homepage of the Department of Metallurgical Engineering and Materials Science (MEMS). <br />
            <br />
            Originally inaugurated as the Center for Materials Science Engineering, comprising faculty from the Schools of Basic Sciences and Engineering, the department rapidly progressed. In a short span, the Center for Materials Science Engineering evolved into the fully-fledged Department of Metallurgical Engineering and Materials Science in 2016.

            <br />
            <br />
            Materials have historically been pivotal in driving technological advancements since the inception of civilization. The Department's primary objective is to champion multidisciplinary research, seeking comprehensive solutions to real-world challenges, and delving into cutting-edge research problems that contribute significantly to societal advancement.
            <br />
            <br />
            At the heart of our research endeavors lies a focused commitment to comprehending the processing and structure of diverse material classes. This understanding is pivotal in establishing correlations with material properties, ultimately enhancing their performance. Our department stands as a beacon for rigorous academic pursuits and impactful contributions to the realm of materials science and engineering.</div>
          </div>
        </div>

        <div className="vision">
          <div className="sec-conthead">VISION AND MISSION</div>
          <div className="subsubhead">Vision</div>
          <div class="vision_main_text">
          To emerge as a globally esteemed institution, our vision at the Department of Metallurgical Engineering and Materials Science is to educate and mentor the forthcoming generation of engineers, scientists, and entrepreneurs. Our unwavering commitment is to contribute significantly to the economic and social development of India and the world.

          <br /> <br />
          <div className="subsubhead7">Mission</div>
          <span className="subsubhead2">Educational Excellence:</span>
          Cultivating excellence in our students, our mission is to provide a comprehensive education encompassing fundamentals of advanced materials and metallurgical engineering topics. Our goal is to equip them with the essential skills for success in academia and industry.
          <span className="subsubhead2">Cutting-Edge Research:</span>
          Undertaking innovative research is integral to our mission. We focus on the design, processing, characterization, and application of novel materials, aiming to make pioneering contributions that advance the boundaries of knowledge.

          <span className="subsubhead2">
Promoting Innovation and Entrepreneurship:
</span>
          We are dedicated to fostering a culture of innovation and entrepreneurship. Our mission includes providing a conducive environment for translational research through collaboration with relevant industries, thereby contributing to the practical application of research outcomes.
          <span className="subsubhead2">
Community Engagement and Outreach:
</span>
          Our commitment extends beyond academic boundaries to engage with the broader community. Through meticulously planned outreach programs, we aim to promote awareness of science and technology, facilitating a positive impact on society.
<br />
In adherence to these principles, we aspire to set new academic and research excellence standards, becoming a beacon of transformative education and innovation in materials science and engineering.</div>

          
        </div>
      </div>

      

      
    </>
  );
};

export default section;
