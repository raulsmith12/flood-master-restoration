import Head from 'next/head';
import Script from 'next/script';
import ReactPlayer from 'react-player';

const Home = () => {
    return (
        <>
            <Head>
                <title>Flood Master Restoration LLC</title>
                <meta name="title" content="Flood Master Restoration LLC" />
                <meta name="description" content="Flood Master Restoration LLC is a trusted water damage and flood damage restoration and cleanup company based in Weber County, Utah, but servicing the Wasatch Front." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://floodmasterrestorationllc.com/" />
                <meta property="og:title" content="Flood Master Restoration LLC" />
                <meta property="og:description" content="Flood Master Restoration LLC is a trusted water damage and flood damage restoration and cleanup company based in Weber County, Utah, but servicing the Wasatch Front." />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://floodmasterrestorationllc.com/" />
                <meta property="twitter:title" content="Flood Master Restoration LLC" />
                <meta property="twitter:description" content="Flood Master Restoration LLC is a trusted water damage and flood damage restoration and cleanup company based in Weber County, Utah, but servicing the Wasatch Front." />
                <meta property="twitter:image" content="" />
            </Head>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-RQWPNM9BFY"/>
            <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-RQWPNM9BFY', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
            <div className="container-fluid bg-water px-0">
                <div className="row mx-0">
                    <div className="col px-0">
                        <div className="container-fluid bg-overlay px-0">
                            <div className="row mx-0">
                                <div className="col px-0">
                                    <h1 className="display-1 page-header text-center">24 HOUR FLOOD DAMAGE SERVICE</h1>
                                    <h2 className="text-center text-white text-shadow-lg display-5 font-weight-bold">SERVING HOMES AND BUILDINGS THROUGHOUT THE STATE OF UTAH</h2>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-6 offset-3">
                                                <ReactPlayer
                                                    url="https://floodmasterrestorationllc.com/img/Shortwebintro.MP4"
                                                    playing={true}
                                                    loop={true}
                                                    muted={true}
                                                    width="100%"
                                                    height="auto"
                                                    className="text-center align-self-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3 className="text-center text-white text-shadow-lg display-6">Let Flood Master Restoration Help You Recover from Disaster</h3>
                                                <p className="text-white">Welcome to Flood Master Restoration, your trusted partner in mitigating the devastating effects of flood damage in the Wasatch Front in northern Utah. We understand that flood damage can be a nightmare, leaving homes and businesses in disarray. We&rsquo;re here to assure you that no matter how severe the flood damage is, we have the experience, expertise, and dedication to restore your property to its pre-flood condition.</p>
                                                <p className="text-white">Floods are an unfortunate reality in the Wasatch Front region, and they can strike at any time, causing significant property damage. Whether it&rsquo;s a sudden torrential downpour, snowmelt, or a burst pipe, floods can wreak havoc on your property. Our team of flood restoration experts is ready to respond promptly, with state-of-the-art equipment and a commitment to providing efficient, comprehensive, and compassionate services.</p>
                                                <p className="text-white">Our flood damage restoration technicians have been serving the Wasatch Front in Utah for years, and we understand the unique challenges that the region&rsquo;s climate and topography can pose. Our local expertise allows us to provide tailored solutions that address the specific needs of your property.</p>
                                                <p className="text-white">We understand that experiencing flood damage is a stressful and emotional time. Our team is not only skilled but also compassionate, ensuring you receive the support and understanding you need during this challenging period.</p>
                                                <p className="text-white">Thorough drying is crucial to prevent structural damage and the growth of mold and mildew. We use high-tech drying equipment to ensure your property is moisture-free.</p>
                                            </div>
                                            <div className="col-md-3 col-sm-12 align-content-center">
                                                <img src="https://floodmasterrestorationllc.com/img/8.jpg" width="95%" className="my-2" alt="Water damage from roof" /><br /><br />
                                                <img src="https://floodmasterrestorationllc.com/img/10.jpg" width="95%" className="my-2" alt="Flood damaged floor" />
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <p className="text-white">We understand that your personal belongings are invaluable. Our flood damage restoration services include cleaning and restoring damaged items, from furniture to electronics and sentimental possessions.</p>
                                                <p className="text-white">Our flood damage restoration process is designed to be thorough and efficient, ensuring your property is restored as quickly as possible while adhering to the highest industry standards.</p>
                                                <p className="text-white">At Flood Master Restoration, we believe that an important part of our service is helping you prevent future flood damage. While we can&rsquo;t control the weather, there are steps you can take to reduce your property&rsquo;s vulnerability to flooding:</p>
                                                <ul>
                                                    <li className="text-white">Conduct regular inspections and maintenance to identify and address potential issues before they become major problems.</li>
                                                    <li className="text-white">Ensure that your property&rsquo;s drainage systems are functioning correctly to redirect water away from your home or business.</li>
                                                    <li className="text-white">Installing a sump pump in your basement can help prevent water from accumulating during heavy rainfall.</li>
                                                    <li className="text-white">Elevate electrical panels, heating systems, and other utilities to reduce the risk of water damage during a flood.</li>
                                                    <li className="text-white">Periodically review your flood insurance policy to ensure it provides adequate coverage for your property.</li>
                                                </ul>
                                                <p className="text-white">Flood Master Restoration is your trusted partner in mitigating the devastating effects of flooding in the Wasatch Front in northern Utah. We bring together local expertise, rapid response, certified professionals, and cutting-edge equipment to restore your property to its pre-flood condition. Our comprehensive services, insurance assistance, and compassionate approach make us the right choice for all your flood restoration needs.</p>
                                                <p className="text-white">Don&rsquo;t let flood damage define your future. Trust the experts at Flood Master Restoration to restore your property and your peace of mind.</p>
                                            </div>
                                            <div className="col-md-3 col-sm-12 align-content-center">
                                                <img src="https://floodmasterrestorationllc.com/img/7.jpg" width="95%" className="my-2" alt="Flood damaged carpet" /><br /><br />
                                                <img src="https://floodmasterrestorationllc.com/img/42857450_1693963147375219_7508422678240296960_o.jpg" width="95%" className="my-2" alt="Flood damaged warehouse" />
                                            </div>
                                        </div>
                                    </div>
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