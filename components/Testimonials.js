const Testimonials = () => {
    return (
        <div id="testimonialsIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#testimonialsIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#testimonialsIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#testimonialsIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active bg-primary px-5 py-5">
                    <h3 className="text-center text-white">Michael W</h3>
                    <hr />
                    <p className="fw-bold text-center text-white">&ldquo;Juan was recommended with 5 stars when we got the call from our tenant with the sewer backup. They came right away at 2 in the morning. We appreciate these guys!&rdquo;</p>
                </div>
                <div className="carousel-item bg-secondary px-5 py-5">
                    <h3 className="text-center text-white">Layne L</h3>
                    <hr />
                    <p className="fw-bold text-center text-white">&ldquo;It was a surprise to come to my home to see the flood in the restroom.  How lucky I was to know this company to help me.&rdquo;</p>
                </div>
                <div className="carousel-item bg-dark px-5 py-5">
                    <h3 className="text-center text-white">Sam H</h3>
                    <hr />
                    <p className="fw-bold text-center text-white">&ldquo;We are happy to recommend this company if you ever have a problem like we did in our office.  They came right away and started to work.  Please contact them.&rdquo;</p>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialsIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Testimonials;