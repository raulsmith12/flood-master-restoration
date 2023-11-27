import Head from 'next/head';
import Script from 'next/script';

const Privacy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - Flood Master Restoration LLC</title>
                <meta name="title" content="Privacy Policy - Flood Master Restoration LLC" />
                <meta name="description" content="We at Flood Master Restoration LLC take the privacy of our customers very seriously and adhere to all local and federal regulations and laws regarding the information we collect on our website." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://floodmasterrestorationllc.com/privacy" />
                <meta property="og:title" content="Privacy Policy - Flood Master Restoration LLC" />
                <meta property="og:description" content="We at Flood Master Restoration LLC take the privacy of our customers very seriously and adhere to all local and federal regulations and laws regarding the information we collect on our website." />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://floodmasterrestorationllc.com/privacy" />
                <meta property="twitter:title" content="Privacy Policy - Flood Master Restoration LLC" />
                <meta property="twitter:description" content="We at Flood Master Restoration LLC take the privacy of our customers very seriously and adhere to all local and federal regulations and laws regarding the information we collect on our website." />
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
                                    <h1 className="display-1 page-header text-center">PRIVACY POLICY</h1>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="text-white">This privacy notice discloses the privacy practices for Flood Master Restoration LLC and any businesses we are associated with. This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item text-white">What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                                                    <li className="list-group-item text-white">What choices are available to you regarding the use of your data.</li>
                                                    <li className="list-group-item text-white">The security procedures in place to protect the misuse of your information.</li>
                                                    <li className="list-group-item text-white">How you can correct any inaccuracies in the information.</li>
                                                </ul>
                                                <h4 className="text-white">Information Collection, Use, and Sharing</h4>
                                                <p className="text-white">We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                                                <p className="text-white">We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>
                                                <p className="text-white">Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                                                <h4 className="text-white">Your Access to and Control Over Information</h4>
                                                <p className="text-white">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item text-white">See what data we have about you, if any.</li>
                                                    <li className="list-group-item text-white">Change/correct any data we have about you.</li>
                                                    <li className="list-group-item text-white">Have us delete any data we have about you.</li>
                                                    <li className="list-group-item text-white">Express any concern you have about our use of your data.</li>
                                                </ul>
                                                <h4 className="text-white">Security</h4>
                                                <p className="text-white">We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                                                <p className="text-white">While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
                                                <p className="text-white">If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at 801-637-8033 or <a href="mailto:floodmasterut@gmail.com" className="text-white">via email.</a></p>
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

export default Privacy;