import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am a highly motivated Full Stack Developer with a passion
for building web applications. With a year of experience in web
development, I have honed my skills in front-end and back-end
development.
On the front-end, I am proficient in HTML, CSS, and JavaScript, and I
have experience working with React and Angular. On the back-end,I
have worked with Asp.Net core,.net framework,Spring,Django
,Laravel,Node.js Express, and I am comfortable working with
databases such as SQLServer, MySQL and PostgreSQL.
As a Junior Developer, I am eager to learn and expand my skillset. I
am constantly exploring new technologies and frameworks to
improve my abilities and contribute to the development community. I
am excited about opportunities to work on challenging projects and
to collaborate with senior developers to gain further knowledge and
insights.
I am a dedicated and hard-working team player who is always
willing to take on new responsibilities and help my colleagues. I
have excellent communication skills,
If you are looking for a highly motivated Junior Full Stack Developer
who is committed to continuous learning and growth, please don't
hesitate to contact me.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
