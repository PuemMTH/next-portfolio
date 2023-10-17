import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const inter = Inter({
	subsets: ["latin"], // latin คือ ภาษาที่ไม่ใช่ภาษาไทย
	display: "swap",
});

// Provider
import { useContext } from "react";
import { ThemeContext } from "@/Provider/ThemeProvider";

export default function Home() {
	const { setTheme, themeList, loading } = useContext(ThemeContext);

	return (
		<main className={`flex min-h-screen flex-col items-center justify-center`}>
			<div className="flex justify-end w-full">
				<div className="dropdown dropdown-end dropdown-hover">
					<label tabIndex={0} className="btn m-1">
						Click
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						{themeList.slice(0, 10).map((theme, index) => {
							return (
								<li key={index}>
									<a onClick={() => setTheme(theme)}>{theme}</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center flex-1 px-4 py-8 text-center w-full">
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
					I&apos;m a software engineer from Thailand. I love to learn new things
					and share them with others.
				</p>
				<div className="flex justify-center mt-4 space-x-4 w-6">
					{loading ? (
						<Link href="/resume" className="btn btn-primary btn-outline btn-sm">
							<span className="animate-pulse m-2">Resume</span>
						</Link>
					) : (
						<Link href="/resume" className="btn btn-primary btn-outline btn-sm">
							<span className="m-2">Resume</span>
						</Link>
					)}
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
