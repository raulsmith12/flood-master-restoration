import Link from "next/link";
import { useState } from "react";

const ServiceMenu = ({ service, serviceName, serviceMenu, closeMenu }) => {
    const [countyMenu, showCountyMenu] = useState('');

    return (
        <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (serviceMenu === service ? 'show' : 'hidden')}>
            <li className="nav-item" onClick={() => showCountyMenu('weber')}>
                <a className="nav-link text-white my-2">Weber County +</a>
                <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (countyMenu === 'weber' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/ogden-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Ogden</Link>
                    </li>
                </ul>
            </li>
            {/* <li className="nav-item" onClick={() => showCountyMenu('davis')}>
                <a className="nav-link text-white my-2">Davis County +</a>
                <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (countyMenu === 'davis' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/-utah-${serviceName}`} onClickCapture={() => closeMenu()}></Link>
                    </li>
                </ul>
            </li> */}
            <li className="nav-item" onClick={() => showCountyMenu('salt-lake')}>
                <a className="nav-link text-white my-2">Salt Lake County +</a>
                {/* <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (countyMenu === 'salt-lake' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/-utah-${serviceName}`} onClickCapture={() => closeMenu()}></Link>
                    </li>
                </ul> */}
                <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (countyMenu === 'salt-lake' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/bluffdale-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Bluffdale</Link>
                    </li>
                </ul>
            </li>
            {/* <li className="nav-item" onClick={() => showCountyMenu('summit')}>
                <a className="nav-link text-white my-2">Summit County +</a>
                <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (countyMenu === 'summit' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/-utah-${serviceName}`} onClickCapture={() => closeMenu()}></Link>
                    </li>
                </ul>
            </li> */}
        </ul>
    )
}

export default ServiceMenu;