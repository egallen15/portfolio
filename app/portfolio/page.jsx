import BentoGrid from "../components/BentoGrid";
import Breadcrumb from "../components/Breadcrumb";

const PortfolioPage = () => {
    return (
        <main className="flex flex-col mx-6 xl:mx-auto w-auto lg:max-w-7xl">
            <div className="w-full max-w-7xl xl:mx-0">
                <Breadcrumb pages={[{ name: "Portfolio", href: "/portfolio", current: true }]}  />
            </div>
            <BentoGrid />
        </main>
    );
};

export default PortfolioPage;