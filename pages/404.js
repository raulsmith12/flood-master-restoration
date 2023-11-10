import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

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