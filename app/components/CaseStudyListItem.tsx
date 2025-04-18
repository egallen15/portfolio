import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyListItemProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    metric1Value: string;
    metric1Label: string;
    metric2Value: string;
    metric2Label: string;
    linkHref: string;
    className?: string;
}

const CaseStudyListItem: React.FC<CaseStudyListItemProps> = ({
    title,
    description,
    imageSrc,
    imageAlt,
    metric1Value,
    metric1Label,
    metric2Value,
    metric2Label,
    linkHref,
    className,
}) => {
    return (
        <Link href={linkHref} className={`flex flex-col md:flex-row items-center shadow-sm backdrop-blur-md dark:backdrop-blur-md bg-white/30 dark:bg-transparent mb-8 p-6 md:p-8 no-underline rounded-lg overflow-hidden hover:bg-sky-100 dark:hover:bg-gradient-to-r dark:hover:from-slate-800 dark:hover:to-sky-700 ${className}`}>
            <div className="w-full neon md:w-1/3">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg lg:hover:-rotate-2 lg:hover:scale-105 transition-transform"
                />
            </div>
            <div className="w-full md:w-2/3 md:p-8 pt-6">
                <h3 className="text-lg md:text-2xl font-bold mb-1">{title}</h3>
                <p className="text-gray-500 mb-4">{description}</p>
                <div className="flex justify-start">
                    <div className="mr-6">
                        <div className="text-xl font-semibold">{metric1Value}</div>
                        <div className="text-gray-500">{metric1Label}</div>
                    </div>
                    <div>
                        <div className="text-xl font-semibold">{metric2Value}</div>
                        <div className="text-gray-500">{metric2Label}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CaseStudyListItem;