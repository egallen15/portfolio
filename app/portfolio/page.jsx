import BentoGrid from "../components/BentoGrid";
import Breadcrumb from "../components/Breadcrumb";
import * as motion from "motion/react-client";

export const metadata = {
    title: "portfolio",
    description: "Selected product design case studies by Eric Allen.",
};

const PortfolioPage = () => {
    return (
        <main className="flex flex-col mx-6 xl:mx-auto w-auto lg:max-w-7xl">
            <div className="w-full max-w-7xl xl:mx-0">
                <Breadcrumb pages={[{ name: "portfolio", href: "/portfolio", current: true }]}  />
            </div>
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
            >
                portfolio
            </motion.h1>
            <span className="text-xl text-slate-800 dark:text-slate-400 mb-8">
                A few projects I’ve had the opportunity to design in my career:
            </span>
            <BentoGrid />
        </main>
    );
};

export default PortfolioPage;