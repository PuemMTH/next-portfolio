import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Provider
import { ThemeProvider } from "@/Provider/ThemeProvider";

// Register All ChartJS
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	BarController,
	BarElement,
	RadialLinearScale,
	DoughnutController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	BubbleController,
} from "chart.js";
ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	BarController,
	BarElement,
	RadialLinearScale,
	DoughnutController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	BubbleController
);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<title>Tanapat Eiam-arj</title>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
