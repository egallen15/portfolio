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
}) => {
    return (
        <Link href={linkHref} className="flex flex-col md:flex-row items-center mb-8 no-underline border rounded-lg overflow-hidden">
            <div className="w-full md:w-1/3">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="w-full md:w-2/3 p-4">
                <h3 className="text-lg md:text-2xl font-bold mb-1">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
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