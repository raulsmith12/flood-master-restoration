import Head from 'next/head';
import Script from 'next/script';

const Landing = () => {
    return (
        <>
            <Head>
                <title> - Flood Master Restoration LLC</title>
                <meta name="title" content=" - Flood Master Restoration LLC" />
                <meta name="description" content="Flood Master Restoration LLC is your trusted --- service provider for the ---, Utah area." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://floodmasterrestorationllc.com/services/" />
                <meta property="og:title" content=" - Flood Master Restoration LLC" />
                <meta property="og:description" content="Flood Master Restoration LLC is your trusted --- service provider for the ---, Utah area." />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://floodmasterrestorationllc.com/services/" />
                <meta property="twitter:title" content=" - Flood Master Restoration LLC" />
                <meta property="twitter:description" content="Flood Master Restoration LLC is your trusted --- service provider for the ---, Utah area." />
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
                                    <h1 className="display-1 page-header text-center"></h1>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">

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

export default Landing;