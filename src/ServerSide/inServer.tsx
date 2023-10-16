import type { GetServerSideProps } from "next";
import type { Data } from "@/types/index";

export async function getServerSideProps({ initialData }: { initialData: Data }): Promise<{ props: { initialData: Data } }> {
	const data = await fetch("http://localhost:3000/api/puem").then((res) =>
		res.json()
	);
	return { props: { initialData: data } };
}
