import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import ScrollToTop from "./components/ScrollToTop";

import EcoNavbar from "./components/EcoNavbar";
import HomePage from "./pages/HomePage";
import EcoPontosPage from "./pages/EcoPontosPage";
import LoadingSpinner from "./components/LoadingSpinner";

const AnimatedRoutes = () => {
    const location = useLocation();

    const isEcopontosPage = location.pathname === "/ecopontos";
    const CurrentNavbar = isEcopontosPage ? EcoNavbar : Navbar;

    const pageTransition = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
    };

    return (
        <div
            className="min-h-screen bg-fixed bg-cover bg-center font-montserrat scroll-smooth bg-ios-fix"
            style={{
                backgroundImage: isEcopontosPage
                    ? "none"
                    : "url('/assets/bghome.jpg')",
            }}
        >
            <CurrentNavbar />
            <ScrollToTop />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <motion.div
                                {...pageTransition}
                                className="min-h-screen"
                            >
                                <HomePage />
                            </motion.div>
                        }
                    />

                    <Route
                        path="/ecopontos"
                        element={
                            <motion.div
                                {...pageTransition}
                                className="min-h-screen"
                            >
                                <EcoPontosPage />
                            </motion.div>
                        }
                    />

                    <Route
                        path="*"
                        element={
                            <div className="text-center py-20">
                                Página Não Encontrada (404)
                            </div>
                        }
                    />
                </Routes>
            </AnimatePresence>

            <Footer />
        </div>
    );
};

function App() {
    const [isAppLoading, setIsAppLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAppLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            document.body.classList.add("ios-device");
        }
    }, []);

    if (isAppLoading) {
        return <LoadingSpinner />;
    }

    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

export default App;
