"use client";

import { motion } from "framer-motion";
import { defaultSpring } from "@/lib/motion";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...defaultSpring, delay: 0.1 }}
      className="flex flex-col gap-4 text-sm text-muted-foreground sm:text-base"
      id="about"
    >
      <h2 className="border-b text-xl text-foreground">About</h2>
      <div className="space-y-4 leading-loose">
        <p>
          I started my career providing technical support for a local
          manufacturing company, managing the software and hardware for several
          hundred computers across corporate offices and production floors. Over
          the years my role expanded to include the administration of network
          switches, routers, servers, and the Oracle-driven ERP system.
        </p>
        <p>
          After the closure of our manufacturing facility, I began to pursue
          other interests. This eventually led me to the field of web
          development. For the past year I&apos;ve been working through
          educational content to learn about how the web functions, the ideas
          and technologies driving it, and the tools developers utilize every
          day in their work.
        </p>
        <ul className="ml-6 list-disc">
          <li>HTML, CSS, and JavaScript</li>
          <li>Accessibility, semantic elements, and responsive design</li>
          <li>Tooling, libraries, and frameworks</li>
          <li>Version control systems</li>
          <li>AI applications, extensions, and services</li>
        </ul>
        <p>
          I&apos;m looking forward to working with and learning from other
          friendly, talented developers and seeing where the road leads.
        </p>
      </div>
    </motion.section>
  );
}
