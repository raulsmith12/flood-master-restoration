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
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/roy-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Roy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/north-ogden-utah-${serviceName}`} onClickCapture={() => closeMenu()}>North Ogden</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/harrisville-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Harrisville</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/pleasant-view-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Pleasant View</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/washington-terrace-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Washington Terrace</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/hooper-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Hooper</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/riverdale-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Riverdale</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/west-haven-utah-${serviceName}`} onClickCapture={() => closeMenu()}>West Haven</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/south-ogden-utah-${serviceName}`} onClickCapture={() => closeMenu()}>South Ogden</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/plain-city-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Plain City</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/marriott-slaterville-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Marriott-Slaterville</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item" onClick={() => showCountyMenu('davis')}>
                <a className="nav-link text-white my-2">Davis County +</a>
                <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (countyMenu === 'davis' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/layton-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Layton</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/farmington-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Farmington</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/clinton-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Clinton</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/syracuse-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Syracuse</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/bountiful-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Bountiful</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/centerville-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Centerville</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/clearfield-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Clearfield</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/north-salt-lake-utah-${serviceName}`} onClickCapture={() => closeMenu()}>North Salt Lake</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/fruit-heights-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Fruit Heights</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/woods-cross-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Woods Cross</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/kaysville-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Kaysville</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/sunset-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Sunset</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/west-bountiful-utah-${serviceName}`} onClickCapture={() => closeMenu()}>West Bountiful</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/west-point-utah-${serviceName}`} onClickCapture={() => closeMenu()}>West Point</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item" onClick={() => showCountyMenu('salt-lake')}>
                <a className="nav-link text-white my-2">Salt Lake County +</a>
                <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (countyMenu === 'salt-lake' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/salt-lake-city-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Salt Lake City</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/west-valley-city-utah-${serviceName}`} onClickCapture={() => closeMenu()}>West Valley City</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/south-jordan-utah-${serviceName}`} onClickCapture={() => closeMenu()}>South Jordan</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/west-jordan-utah-${serviceName}`} onClickCapture={() => closeMenu()}>West Jordan</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/sandy-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Sandy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/riverton-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Riverton</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/murray-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Murray</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/draper-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Draper</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/taylorsville-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Taylorsville</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/midvale-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Midvale</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/south-salt-lake-utah-${serviceName}`} onClickCapture={() => closeMenu()}>South Salt Lake</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/millcreek-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Millcreek</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/cottonwood-heights-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Cottonwood Heights</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/holladay-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Holladay</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/herriman-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Herriman</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/bluffdale-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Bluffdale</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/magna-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Magna</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/kearns-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Kearns</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item" onClick={() => showCountyMenu('summit')}>
                <a className="nav-link text-white my-2">Summit County +</a>
                <ul className={"text-white ps-2 dropdown-menu bg-none border border-0 " + (countyMenu === 'summit' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/park-city-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Park City</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/kimball-junction-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Kimball Junction</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white my-2" href={`/services/${serviceName}/summit-park-utah-${serviceName}`} onClickCapture={() => closeMenu()}>Summit Park</Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default ServiceMenu;