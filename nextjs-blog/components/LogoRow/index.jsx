import Link from "next/link";

const LogoRow = ({ logos }) => {
    return (
        logos ?
       (<div className="flex flex-wrap justify-center bg-slate-100">
            {logos.map((logo, index) => (
                    <div key={index} className="w-1/5 px-1">
                        <Link href={logo.addr} target="_blank" className="m-2 w-11/12 h-24 center">
                        <img
                            src={"/images/" + logo.link}
                            alt="Logo"
                            className="w-full h-full m-2"
                        />
                        </Link>
                    </div>
            ))}
        </div>):(<></>)
    );
};

export default LogoRow;
