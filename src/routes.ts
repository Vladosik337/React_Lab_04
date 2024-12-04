import { lazy } from "react";

// Динамічне завантаження компонентів
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

// Функції для передзавантаження даних
async function fetchHomePageData() {
    const response = await fetch("/api/home");
    if (!response.ok) {
        throw new Error("Failed to load HomePage data");
    }
    return response.json();
}

async function fetchAboutPageData() {
    const response = await fetch("/api/about");
    if (!response.ok) {
        throw new Error("Failed to load AboutPage data");
    }
    return response.json();
}

// Конфігурація маршрутів
export const routes = [
    {
        path: "/",
        element: HomePage,
        loader: fetchHomePageData,
    },
    {
        path: "/about",
        element: AboutPage,
        loader: fetchAboutPageData,
    },
];
