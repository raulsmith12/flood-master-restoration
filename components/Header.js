import Link from "next/link";
import { useState } from "react";

import ServiceMenu from "./ServiceMenu";

const Header = () => {
    const [servicesMenu, showServicesMenu] = useState(false);
    const [serviceMenu, showServiceMenu] = useState('');

    function closeMenu() {
        const closeButton = document.getElementById('button-close');
        closeButton.click();
    }

    return (
        <div className="row mx-0">
            <div className="col px-0">
                <nav className="navbar bg-header sticky-top border-bottom border-primary overflow-scroll">
                    <div className="container">
                        <Link href="/" className="navbar-brand">
                            <img src="https://floodmasterrestorationllc.com/img/logo.png" height="50" alt="Flood Master Restoration" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#fmrNavbar" aria-controls="fmrNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end bg-menu text-bg-dark" tabIndex="-1" id="fmrNavbar" aria-labelledby="fmrNavbarLabel">
                            <div className="offcanvas-header">
                                <h6>
                                    <img src="https://floodmasterrestorationllc.com/img/logo.png" height="35" alt="Flood Master Restoration" /><br />
                                    &nbsp;&nbsp;<a href="tel:1-801-637-8033" className="text-black">801-637-8033</a><br />
                                    &nbsp;&nbsp;<a href="mailto:floodmasterut@gmail.com" className="text-black">FloodMasterUT@gmail.com</a>
                                </h6>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#gdsNavbar" aria-label="Close" id="button-close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 pb-5">
                                    <li className="nav-item">
                                        <Link href="/" className="nav-link text-white my-2" onClickCapture={() => closeMenu()}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/water" className="nav-link text-white my-2" onClickCapture={() => closeMenu()}>Water</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/mold" className="nav-link text-white my-2" onClickCapture={() => closeMenu()}>Mold</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/fire" className="nav-link text-white my-2" onClickCapture={() => closeMenu()}>Fire</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/sewer" className="nav-link text-white my-2" onClickCapture={() => closeMenu()}>Sewer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/hoarding" className="nav-link text-white my-2" onClickCapture={() => closeMenu()}>Hoarding</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/biohazard" className="nav-link text-white my-2" onClickCapture={() => closeMenu()}>Biohazard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact" className="nav-link text-white my-2" onClickCapture={() => closeMenu()}>Contact</Link>
                                    </li>
                                    <li className="nav-item" onClick={() => showServicesMenu(true)} style={{ cursor: 'pointer' }}>
                                        <a className="nav-link text-white my-2">Service Areas</a>
                                        <ul className={"text-white dropdown-menu bg-none border border-0 ps-2 " + (servicesMenu ? 'show' : 'hidden')}>
                                            <li className="nav-item" onClick={() => showServiceMenu('flood-repair')}>
                                                <a className="nav-link text-white my-2">Flood Damage Repair +</a>
                                                <ServiceMenu service="flood-repair" serviceName="flood-damage-repair" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showServiceMenu('flood-restoration')}>
                                                <a className="nav-link text-white my-2">Flood Damage Restoration +</a>
                                                <ServiceMenu service="flood-restoration" serviceName="flood-damage-restoration" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showServiceMenu('water-repair')}>
                                                <a className="nav-link text-white my-2">Water Damage Repair +</a>
                                                <ServiceMenu service="water-repair" serviceName="water-damage-repair" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showServiceMenu('water-restoration')}>
                                                <a className="nav-link text-white my-2">Water Damage Restoration +</a>
                                                <ServiceMenu service="water-restoration" serviceName="water-damage-restoration" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showServiceMenu('mold-removal')}>
                                                <a className="nav-link text-white my-2">Mold Removal +</a>
                                                <ServiceMenu service="mold-removal" serviceName="mold-removal" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showServiceMenu('mold-cleanup')}>
                                                <a className="nav-link text-white my-2">Mold Damage Cleanup +</a>
                                                <ServiceMenu service="mold-cleanup" serviceName="mold-damage-cleanup" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showServiceMenu('fire-damage')}>
                                                <a className="nav-link text-white my-2">Fire Damage Cleanup +</a>
                                                <ServiceMenu service="fire-damage" serviceName="fire-damage-cleanup" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showServiceMenu('hoarding')}>
                                                <a className="nav-link text-white my-2">Hoarding Cleanup +</a>
                                                <ServiceMenu service="hoarding" serviceName="hoarding-cleanup" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showServiceMenu('biohazard')}>
                                                <a className="nav-link text-white my-2">Biohazard Cleanup +</a>
                                                <ServiceMenu service="biohazard" serviceName="biohazard-cleanup" serviceMenu={serviceMenu} closeMenu={closeMenu} />
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pb-2">&nbsp;</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;