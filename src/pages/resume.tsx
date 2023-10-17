import { useState } from "react";
import type { Data } from "@/types/index";
import Image from "next/image";

import TimelineComponent from "@/components/Timeline";

type PortfolioProps = {
	initialData: Data;
};

function Portfolio({ initialData }: PortfolioProps) {
	const [data, setData] = useState(initialData);

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-8">
				{data ? (
					<>
						<header className="text-center space-y-4">
							<h1 className="text-4xl font-extrabold text-indigo-900">
								{data.profile.name}&apos;s Portfolio
							</h1>
							<p className="text-xl text-indigo-600">{data.profile.nickname}</p>
						</header>
						<section className="grid md:grid-cols-2 gap-8">
							<div>
								<h2 className="text-2xl font-bold text-gray-800 mb-4">
									About Me
								</h2>
								<p className="mb-4 text-gray-600 space-y-4">
									<span>
										<span className="font-bold">Email:</span>{" "}
										{data.profile.email}
									</span>
									<br />
									<span>
										<span className="font-bold">GitHub:</span>{" "}
										<a
											href={data.profile.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-indigo-500"
										>
											{data.profile.github}
										</a>
									</span>
									<br />
									<span>
										<span className="font-bold">Location:</span>{" "}
										{data.profile.location}
									</span>
									<br />
									<span>
										<span className="font-bold">Phone:</span>{" "}
										{data.profile.phone}
									</span>
									<br />
									<span>
										<span className="font-bold">Website:</span>{" "}
										<a
											href={data.profile.website}
											target="_blank"
											rel="noopener noreferrer"
											className="text-indigo-500"
										>
											{data.profile.website}
										</a>
									</span>
									<br />
								</p>
							</div>
							<div>
								<h2 className="text-2xl font-bold text-gray-800 mb-4">
									Skills
								</h2>
								<ul className="list-disc pl-5 space-y-2 text-gray-600">
									{data.skills.map((skill) => (
										<li key={skill.name}>
											<strong>{skill.name}:</strong> {skill.description}
										</li>
									))}
								</ul>
							</div>
						</section>
						<section>
							<TimelineComponent
								title="Project Experience"
								data={data.projects}
							/>
						</section>
						<section>
							<TimelineComponent
								title="Certifications"
								data={data.certifications}
							/>
						</section>
					</>
				) : (
					<div className="text-center">
						<Image
							src="/loading.svg"
							alt="Loading"
							width={100}
							height={100}
							className="mx-auto"
						/>
						<progress className="progress w-full"></progress>
					</div>
				)}
			</div>
		</div>
	);
}

export async function getStaticProps(): Promise<{
	props: { initialData: Data };
}> {
	const data = await fetch("http://localhost:3000/api/puem")
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
	return {
		props: {
			initialData: data || null,
		},
	};
}

export default Portfolio;
