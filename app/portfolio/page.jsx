import BentoGrid from "../components/BentoGrid";
import Breadcrumb from "../components/Breadcrumb";

const PortfolioPage = () => {
    return (
        <main className="flex flex-col mx-6 xl:mx-auto w-auto lg:max-w-5xl">
            <div className="w-full max-w-7xl xl:mx-0">
                <Breadcrumb pages={[{ name: "Portfolio", href: "/portfolio", current: true }]}  />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">My work</h1>
            <span className="text-xl text-slate-800 dark:text-slate-400 mb-8">
                A few interesting projects I've worked on in my career.
            </span>
            <BentoGrid />
        </main>
    );
};

export default PortfolioPage;