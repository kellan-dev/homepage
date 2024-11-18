"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/hooks";
import { primaryTools, Tool } from "@/lib/data";
import { motion } from "framer-motion";

export default function StackSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col gap-4 text-sm text-muted-foreground sm:text-base"
      id="stack"
    >
      <h2 className="border-b text-xl text-foreground">Stack</h2>
      <p>The tools and technologies I enjoy working with the most</p>
      <PrimaryToolList />
    </motion.section>
  );
}

function PrimaryToolList() {
  return (
    <motion.ul
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.07,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center justify-center gap-3 py-4 text-sm sm:gap-4"
    >
      {primaryTools.map((tool) => (
        <PrimaryTool key={tool.path} tool={tool} />
      ))}
    </motion.ul>
  );
}

function PrimaryTool({ tool }: { tool: Tool }) {
  return (
    <li>
      <motion.a
        href={tool.href}
        target="_blank"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.05 }}
        className="group flex cursor-pointer items-center justify-center gap-2 rounded-full border px-3 py-1.5 shadow backdrop-blur-md sm:px-4 sm:py-2"
      >
        <PrimaryToolIcon path={tool.path} name={tool.name} />
        <h3 className="text-muted-foreground">{tool.name}</h3>
      </motion.a>
    </li>
  );
}

function PrimaryToolIcon({ path, name }: { path: string; name: string }) {
  const { theme } = useTheme();
  const mounted = useMounted();

  return (
    <Image
      src={
        mounted && theme === "light"
          ? `/logos/${path}.svg`
          : `/logos/${path}.dark.svg`
      }
      alt={name}
      width={24}
      height={24}
      className="size-5 transition-all sm:size-6 sm:grayscale sm:group-hover:grayscale-0"
    />
  );
}
