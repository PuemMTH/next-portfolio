import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "@/types/index";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		profile: {
			name: "Tanapat Eiam-arj",
			nickname: "puem",
			email: "tanapat.e@ku.th",
			github: "https://github.com/PuemMTH/",
			fullVersionLink: "https://puem.tech/",
			location: "Bangkok, Thailand",
			phone: "(+66) 99-999-9999",
		},
		skills: [
			{
				name: "Backend",
				description:
					"Node.js, Next.js, Lavavel, golang, Express.js, MongoDB, MySQL, Redis, Docker",
			},
			{
				name: "Frontend",
				description: "React.js, HTML, CSS, JavaScript, TypeScript, TailwindCSS",
			},
			{
				name: "DevOps",
				description: "AWS, GCP, Azure, CI/CD, Terraform, Jenkins",
			},
			{
				name: "Mobile",
				description: "React Native, Flutter",
			},
			{
				name: "Other",
				description:
					"Git, Linux, Nginx, Apache, Confluence, Agile, Scrum, Kanban, Trello",
			},
		],
		projects: [
			{
				name: "Portfolio Website",
				description:
					"This website portfolio is made by Next.js and TailwindCSS",
				link: "https://puem.tech/",
				technologies: ["Next.js", "TailwindCSS"],
				images: ["https://puem.tech/images/puem.tech.png"],
				date: "2023",	
			},
			{
				name: "Table Website",
				description:
					"This website is table website for manage student in class",
				link: "https://table.puem.tech/",
				technologies: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
				images: ["https://puem.tech/images/table.puem.tech.png"],
				date: "2022",
			},
			{
				name: "Table Website",
				description:
					"This website is table website for manage student in class",
				link: "https://table.puem.tech/",
				technologies: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
				images: ["https://puem.tech/images/table.puem.tech.png"],
				date: "2022",
			},
			{
				name: "Manage Credit Website",
				description:
					"This website is manage credit website for manage credit in class",
				link: "https://credit.puem.tech/",
				technologies: ["Next.js", "TailwindCSS", "Node.js", "JSON"],
				images: ["https://puem.tech/images/credit.puem.tech.png"],
				date: "2021",
			},
		],
		experiences: [
			{
				name: "KUNLUN LAB",
				description: "",
			},
		],
		educations: [
			{
				name: "Kasetsart University",
				description: "Computer Engineering",
				date: "2021 - Present",
			},
		],
		certifications: [
			{
				name: "Matlab Onramp",
				description: "Mathworks",
				date: "2021",
				link: "https://matlabacademy.mathworks.com/",
			},
		],
		languages: [
			"JavaScript",
			"TypeScript",
			"HTML",
			"CSS",
			"PHP",
			"Python",
			"Java",
			"C",
			"Go",
			"Rust",
			"Kotlin",
			"Swift",
			"Dart",
		],
		interests: ["Technology", "Coding"],
	});
}
