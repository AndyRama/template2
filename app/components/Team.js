"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const aboutContent = {
  heading: {
    title: "Qui suis-je ?",
    subTitle: "Mes valeurs"
  },
  content: {
    img: "/images/hero-img-1-min.jpg",
    // title: "Architects of Inovation, Builders of Beauty  web application",
    description:
      "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers. Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",

    // }
  }
};

const About = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5]">
          {/* About - center - Subtitle */}
          {aboutContent.heading.subTitle &&
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5
                }
              }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[12.5px] mb-2 inline-block text-gray-500"
            >
              {aboutContent.heading.subTitle}
            </motion.span>}

          {/* About - center - Title */}
          {aboutContent.heading.title &&
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5
                }
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl text-white"
            >
              {aboutContent.heading.title}
            </motion.h2>}
        </div>

        {/* About - center - Card Image1 */}
        <div className="lg: flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/jeremy Prat.jpg"
                  className="object-cover
                  !w-full !h-[600] lg:max-w-2xl object-center"
                  width={400}
                  height={600}
                  alt="About Image"
                />
              </motion.div>
            </div>

            {/* About - center - title */}
            <div className="lg:w-6/12 mt-10">
              {/* <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="text-2xl mb-7 text-gray-500"
              >
                {aboutContent.content.title}
              </motion.h3> */}

              {/* About - center - block text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-white "
              >
                {aboutContent.content.description}
              </motion.p>

              {/* About - center - block text */}               
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
              >
              </motion.p>
            </div>
          </div>
        </div>

        {/* About - center - Card Image */}
        <div className="lg: flex justify-center mt-20">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/person-1-min.jpg"
                  className="object-cover
                  !w-full !h-[600] lg:max-w-2xl object-center"
                  width={400}
                  height={600}
                  alt="About Image"
                />
              </motion.div>
            </div>

            {/* About - center - title */}
            <div className="lg:w-6/12 mt-10">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="text-2xl mb-7 text-gray-500"
              >
                {aboutContent.content.title}
              </motion.h3>

              {/* About - center - block text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-white "
              >
                {aboutContent.content.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
              >
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
