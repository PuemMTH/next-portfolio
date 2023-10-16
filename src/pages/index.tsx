import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";

const inter = Inter({
  subsets: ["latin"], // latin คือ ภาษาที่ไม่ใช่ภาษาไทย
  display: "swap",
})


// Provider
import { useContext } from "react";
import { ThemeContext } from "@/Provider/ThemeProvider";


export default function Home() {
	const { setTheme, themeList } = useContext(ThemeContext);
  
	return (
		<main className={`flex min-h-screen flex-col items-center justify-center`}>
			<div className="flex flex-col items-center justify-center flex-1 px-4 py-8 text-center">
				<div className="w-52 h-52 rounded-full bg-base-300 dark:bg-base-200">
          <Image
            className="rounded-full"
            src="/images/profile.jpg"
            width={208}
            height={208}
            alt="Tanapat Eiam-arj"
          />
        </div>
				<h1 className="text-3xl font-bold mt-4">Tanapat Eiam-arj</h1>
				<h2 className="text-xl font-semibold mt-2">Software Engineer</h2>
				<p className="mt-2">
					{/* I'm a software engineer from Thailand. I love to learn new things and */}
					I&apos;m a software engineer from Thailand. I love to learn new things
					and share them with others.
				</p>
				<div className="flex justify-center mt-4 space-x-4">
					<Link href="/resume" className="btn btn-primary btn-outline btn-sm">
						Resume
					</Link>
					<a href="mailto:tanapat.e@ku.th" className="btn btn-primary btn-sm">
						Contact
					</a>
				</div>
				<div className="flex justify-center mt-4 space-x-4">
					<a
						href="https://www.linkedin.com/in/tanapat-eiam-arj-5a1b8a1a6/"
						className="btn btn-ghost btn-sm"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/PuemMTH/"
						className="btn btn-ghost btn-sm"
					>
						Github
					</a>
				</div>
			</div>
		</main>
	);
}
