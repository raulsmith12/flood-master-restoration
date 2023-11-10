import Link from "next/link";

const Footer = () => {
    return (
        <div className="row mx-0 py-2 bg-header">
            <div className="col-10 offset-1">
                <p className="text-center fw-bold">
                    &nbsp;<br />
                    <Link href="/">Home</Link>&nbsp;&nbsp;
                    <Link href="/contact">Contact</Link>&nbsp;&nbsp;
                    <Link href="/privacy">Privacy</Link><br />
                    &copy; {(new Date().getFullYear())} Flood Master Restoration LLC. All Rights Reserved.
                </p>
            </div>
            <div className="col-1 text-center">
                <a href="https://www.facebook.com/FloodMasterrestorationllc/?modal=admin_todo_tour" target="_blank">
                    <img src="https://floodmasterrestorationllc.com/img/facebook.png" width="70%" alt="Follow Us on Facebook" style={{ border: "none" }} /><br />
                    <strong>Follow Us</strong>
                </a>
            </div>
        </div>
    )
}

export default Footer;