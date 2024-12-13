"use client";

import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/avatar.webp";
import Container from "@/components/container";
import GithubLink from "@/components/github-link";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import { defaultSpring } from "@/lib/motion";

const navigationItems = ["Stack", "Work", "About", "Contact"];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/60 bg-[url('/noise.svg')] bg-repeat px-4 py-4 backdrop-blur-lg dark:bg-[url('/noise.dark.svg')] sm:py-6">
      <Container className="flex items-center justify-between">
        <div className="flex items-center sm:gap-4">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={defaultSpring}
            >
              <Image
                src={avatar}
                alt="avatar"
                className="size-12 cursor-pointer rounded-full border-[1.5px] border-white shadow transition-all duration-300 hover:scale-110 sm:size-14 sm:grayscale sm:hover:grayscale-0"
                priority
              />
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...defaultSpring, delay: 0.2 }}
            className="flex flex-col gap-1.5"
          >
            <Link href="/" className="px-4">
              <h1 className="text-xl sm:text-2xl">Lanny Kenneth Lung</h1>
            </Link>
            <Nav />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="xs:flex hidden items-center gap-4"
        >
          <ThemeToggle />
          <GithubLink />
        </motion.div>
      </Container>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...defaultSpring, delay: 0.4 }}
        className="ml-1.5 flex flex-wrap font-mono text-sm"
      >
        {navigationItems.map((item, index) => (
          <NavItem key={item} text={item} index={index} />
        ))}
      </motion.ul>
    </nav>
  );
}

function NavItem({ text, index }: { text: string; index: number }) {
  return (
    <li>
      {index > 0 && <span>•</span>}
      <Link
        href={`/#${text.toLowerCase()}`}
        className="inline-block px-3 hover:text-orange-600 hover:underline dark:hover:text-orange-400"
      >
        {text}
      </Link>
    </li>
  );
}
