import BentoGrid from "../components/BentoGrid";
import Breadcrumb from "../components/Breadcrumb";

const PortfolioPage = () => {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl mx-6 xl:mx-0">
                <Breadcrumb pages={[{ name: "Portfolio", href: "/portfolio", current: true }]} pageTitle="Portfolio" />
            </div>
            <BentoGrid />
        </main>
    );
};

export default PortfolioPage;