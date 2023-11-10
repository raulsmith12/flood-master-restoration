import { useState, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import axios from 'axios';
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';

import { GoogleKey } from '../../components/GoogleKey';

const API_PATH = 'https://floodmasterrestorationllc.com/backend/public/api/contact';

const Contact = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [message, setMessage] = useState('');
    const [mailSent, setMailSent] = useState(false);

    const captchaRef = useRef(null);

    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: {
                'name': customerName,
                'email': customerEmail,
                'phone_no': customerPhone,
                'message': message
            }
        })
        .then(result => {
            setMailSent(result.data.sent),
            swal('Thank you!', 'We have received your message. You should hear back from us within the next two or three business days.', 'success')
        })
        .catch(error => swal('Uh oh!', 'Something went wrong. Please try sending your message again.', 'danger'));
    };

    return (
        <>
            <Head>
                <title>Contact Us - Flood Master Restoration LLC</title>
                <meta name="title" content="Contact Us - Flood Master Restoration LLC" />
                <meta name="description" content="Contact Flood Master Restoration LLC today by contact form, email, phone, or by following us on Facebook." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://floodmasterrestorationllc.com/contact" />
                <meta property="og:title" content="Contact Us - Flood Master Restoration LLC" />
                <meta property="og:description" content="Contact Flood Master Restoration LLC today by contact form, email, phone, or by following us on Facebook." />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://floodmasterrestorationllc.com/contact" />
                <meta property="twitter:title" content="Contact Us - Flood Master Restoration LLC" />
                <meta property="twitter:description" content="Contact Flood Master Restoration LLC today by contact form, email, phone, or by following us on Facebook." />
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
                                    <h1 className="display-1 page-header text-center">CONTACT FLOOD MASTER RESTORATION</h1>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12 my-2 text-center">
                                                <a href="tel:1-801-637-8033" className="text-white text-center h4">801-637-8033</a>
                                            </div>
                                            <div className="col-md-4 col-sm-12 my-2 text-center">
                                                <a href="https://www.facebook.com/FloodMasterrestorationllc/?modal=admin_todo_tour" target="_blank" className="text-white text-center h4">Follow Us on Facebook</a>
                                            </div>
                                            <div className="col-md-4 col-sm-12 my-2 text-center">
                                                <a href="mailto:floodmasterut@gmail.com" className="text-white text-center h4">FloodMasterUT@gmail.com</a>
                                            </div>
                                            <div className="col-12">
                                                <form onSubmit={e => handleFormSubmit(e)}>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="mb-3">
                                                                    <label htmlFor="customerName" className="form-label">Name</label>
                                                                    <input type="text" className="form-control" id="customerName" name="customerName" required value={customerName} onChange={e => setCustomerName(e.target.value)} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="customerEmail" className="form-label">Email</label>
                                                                    <input type="email" className="form-control" id="customerEmail" name="customerEmail" required value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="customerPhone" className="form-label">Phone Number</label>
                                                                    <input type="phone" className="form-control" id="customerPhone" name="customerPhone" required value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="messageText" className="form-label">Message</label>
                                                                    <textarea className="form-control" id="messageText" name="messageText" required value={message} onChange={e => setMessage(e.target.value)} rows="3" />
                                                                </div>
                                                                <ReCAPTCHA
                                                                    sitekey={GoogleKey}
                                                                    ref={captchaRef}
                                                                />
                                                                <button type="submit" className="btn btn-alpha">Submit</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {mailSent}
                                                        </div>
                                                    </div>
                                                </form>
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

export default Contact;