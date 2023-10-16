import React from "react";
import type { projects } from "@/types/index";

function TimelineComponent({
	title,
	data,
}: {
	title: string;
	data: projects[];
}) {
	const year = new Set(data.map((item) => item.date));

	return (
		<div className="p-8">
			<h2 className="text-2xl text-gray-800 font-bold mb-6">
				Timeline Project
			</h2>
			<div className="relative border-l-2 border-purple-600 ml-4 text-gray-600">
				{Array.from(year).map((item) => (
					<div key={item} className="mb-8 pl-4">
						<div className="flex justify-between items-center w-full mb-1">
							<span className="text-lg font-bold">{item}</span>
							<div className="h-6 w-6 bg-purple-600 rounded-full"></div>
						</div>
						<div className="mb-8 pl-4">
							{data
								.filter((d) => d.date === item)
								.map((d, idx) => (
									<p
										key={idx}
										className="ml-6 bg-gray-100 p-4 rounded shadow-lg w-3/4"
									>
                                        <span className="font-bold">
                                            <a
                                                href={d.link}
                                            >
                                                {d.name}{': '}
                                            </a>
                                        </span>
										{d.description}
										
									</p>
								))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TimelineComponent;
