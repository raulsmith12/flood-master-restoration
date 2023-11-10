import Link from "next/link";

const Header = () => {
    // service and county menus to be added later

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
                                    <li className="pb-2">&nbsp;</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <div className="container-fluid px-0">
                    <div className="row mx-0 position-relative">
                        <div className="col-10 offset-1 text-center">
                            <img src="https://floodmasterrestorationllc.com/img/logo.png" width="60%" alt="Flood Master Restoration" />
                        </div>
                        <div className="col-12 px-0">
                            <nav className="navbar navbar-dark navbar-expand-lg py-0 bg-menu">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" style={{ position: "absolute", top: "-29px", left: "10px", backgroundColor: "blue" }}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item px-1">
                                            <Link href="/" className="menu-link" onClick={hideNavbar}>Home</Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/" className="menu-link" onClick={hideNavbar}>Water</Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/" className="menu-link" onClick={hideNavbar}>Mold</Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/" className="menu-link" onClick={hideNavbar}>Fire</Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/" className="menu-link" onClick={hideNavbar}>Sewer</Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/" className="menu-link" onClick={hideNavbar}>Hoarding</Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/" className="menu-link" onClick={hideNavbar}>Biohazard</Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/" className="menu-link" onClick={hideNavbar}>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Header;