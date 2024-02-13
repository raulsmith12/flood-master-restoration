import MetaHeader from '../components/MetaHeader';

const Home = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Flood Master Restoration LLC"
                metadesc = "Flood Master Restoration LLC is a trusted water damage and flood damage restoration and cleanup company based in Weber County, Utah, but servicing the Wasatch Front."
                metaurl = "https://floodmasterrestorationllc.com/404"
            />
            <div className="container-fluid bg-water px-0">
                <div className="row mx-0">
                    <div className="col px-0">
                        <div className="container-fluid bg-overlay px-0">
                            <div className="row mx-0">
                                <div className="col px-0">
                                    <h1 className="text-center text-white display-3">Uh oh!</h1>
                                    <h3 className="text-center text-white display-4">It appears you have come across a bad link. Please try entering the page you're looking for manually or using the navigation menu in the upper right corner.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;