"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { primaryProjects, Project as ProjectType } from "@/lib/data";
import { ReactNode, useState } from "react";
import {
  ArrowTopRightIcon,
  EyeOpenIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { defaultSpring } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function WorkSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col gap-4 text-sm text-muted-foreground sm:text-base"
      id="work"
    >
      <h2 className="border-b text-xl text-foreground">Work</h2>
      <p>The projects I&apos;ve explored to learn about web development</p>
      <ProjectList />
      <p>
        You can find many more projects in my{" "}
        <a
          href="https://github.com/kellan-dev?tab=repositories"
          target="_blank"
          className="underline"
        >
          Github repositories
        </a>
      </p>
    </motion.section>
  );
}

function ProjectList() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center gap-12 overflow-hidden py-4 sm:gap-8">
      {primaryProjects.map((project, index) => (
        <Project
          key={project.name}
          index={index}
          project={project}
          isInitialLoad={isInitialLoad}
          onAnimationComplete={() => setIsInitialLoad(false)}
        />
      ))}
    </div>
  );
}

function Project({
  index,
  project,
  isInitialLoad,
  onAnimationComplete,
}: {
  index: number;
  project: ProjectType;
  isInitialLoad: boolean;
  onAnimationComplete: () => void;
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? 40 : -40 },
        visible: (index: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            ...defaultSpring,
            delay: isInitialLoad ? 0.2 + index * 0.2 : 0,
            onComplete: index === 0 ? onAnimationComplete : undefined,
          },
        }),
      }}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group flex min-h-64 w-full max-w-2xl flex-col sm:grid sm:grid-cols-2 sm:overflow-hidden sm:rounded-xl sm:border sm:shadow sm:backdrop-blur-md"
    >
      <div className="flex flex-col justify-between px-1 pb-6 sm:p-4">
        <div>
          <h3 className="text-lg text-foreground">{project.name}</h3>
          {/* <p className="text-sm text-muted-foreground">
            <a
              href={project.courseHref}
              target="_blank"
              className="hover:underline"
            >
              {project.course}
            </a>
          </p> */}
          <ProjectLink
            href={project.courseHref}
            className="text-muted-foreground"
          >
            {project.course}
          </ProjectLink>
        </div>
        <ul className="flex flex-wrap gap-2 py-6">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline" className="font-normal">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        <div className="flex gap-8">
          <ProjectLink href={project.sourceHref}>
            <GitHubLogoIcon />
            Source
          </ProjectLink>
          <ProjectLink href={project.demoHref}>
            <EyeOpenIcon />
            Live Demo
          </ProjectLink>
        </div>
      </div>
      <div className="m-auto w-[98%] sm:relative sm:m-0 sm:max-h-full sm:w-full">
        <a href={project.demoHref} target="_blank" className="group/demo">
          <Image
            src={project.src}
            alt={project.name}
            className="rounded-lg border object-cover object-left-top transition-all duration-300 group-hover/demo:scale-[1.02] sm:absolute sm:left-2 sm:top-4 sm:h-[130%] sm:grayscale sm:group-hover/demo:translate-y-3 sm:group-hover/demo:-rotate-1 sm:group-hover/demo:scale-110 sm:group-hover/demo:grayscale-0"
          />
        </a>
      </div>
    </motion.article>
  );
}

function ProjectLink({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <div className="group/source flex w-fit items-center gap-1 text-sm">
      <a
        href={href}
        target="_blank"
        className={cn(
          "flex items-center gap-2 text-foreground hover:underline",
          className,
        )}
      >
        {children}
      </a>
      <ArrowTopRightIcon className="h-4 w-4 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover/source:-translate-x-0 group-hover/source:-translate-y-0 group-hover/source:opacity-100" />
    </div>
  );
}
