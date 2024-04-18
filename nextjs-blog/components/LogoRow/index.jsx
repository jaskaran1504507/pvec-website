import Link from "next/link";
import { useRouter } from "next/router";

const LogoRow = ({ logos }) => {
    const router = useRouter();
    return (
        logos ?
            (<div className="flex flex-wrap justify-center">
            {logos.map((logo, index) => (
                <div key={index} className="md:w-1/3 sm:w-1/2 py-4 px-2 border-2 border-gray-200">
                    <Link
                        href={router?.asPath.includes("#search_products") ? router?.asPath : router?.asPath + "#search_products"}
                        className={`block mx-auto ${router?.query?.query == "eye-medic" ? 'h-48' : 'h-24'}`}
                    >
                        <img
                            src={logo.image}
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </Link>
                </div>
            ))}
        </div>) : (<></>)
    );
};

export default LogoRow;
