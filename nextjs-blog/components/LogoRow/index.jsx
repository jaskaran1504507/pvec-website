import Link from "next/link";
import { useRouter } from "next/router";

const LogoRow = ({ logos }) => {
    const router = useRouter();
    return (
        logos ?
            (<div className="flex flex-wrap justify-center">
                {logos.map((logo, index) => (
                    <div key={index} className="w-1/6 m-1">
                        <Link href={logo.addr} target="_blank" className={`m-1 w-11/12 center ${router?.query?.query == "eye-medic" ? 'h-48' : 'h-24'}`}>
                            <img
                                src={"/images/" + logo.link}
                                alt="Logo"
                                className="w-full h-full"
                            />
                        </Link>
                    </div>
                ))}
            </div>) : (<></>)
    );
};

export default LogoRow;
