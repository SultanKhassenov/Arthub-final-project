import React from 'react';
import "../styles/AboutUs.css"

const AboutUs = () => {
    return (
        <div className="about-us container m-5 ">
            <h1 className="display-1 text-center">
                About us
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet in autem excepturi, exercitationem fugit eum <br/>
                nam tempore dolor porro voluptas minima nulla,
                odio neque sequi. Non error quaerat qui commodi. Lorem ipsum dolor, <br/>
                sit amet consectetur adipisicing elit. Numquam quasi illum necessitatibus
                temporibus ducimus molestias at. <br/> Ducimus quod dolore eos. Laudantium totam magnam natus,
                quae corporis possimus ipsum officia dolorem. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui odit incidunt sequi dicta unde sed eius officia <br/> numquam atque cumque. Vel perferendis
                        magnam excepturi et? Odio doloremque quidem saepe dicta.
            </p>

            <img src="https://artdiscount.co.uk/cdn/shop/files/proarte-cover_1400x.progressive.jpg?v=1689079216"
                 alt="About page image" className="img-fluid"
                 style={{marginTop: '15px', marginLeft: '10%', width: '90%'}}/>

                <br/><br/><br/>

                    <h1 className="display-1 text-center">
                        Another information
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet in autem excepturi, exercitationem fugit eum <br/>
                        nam tempore dolor porro voluptas minima nulla,
                        odio neque sequi. Non error quaerat qui commodi. Lorem ipsum dolor, <br/>
                        sit amet consectetur adipisicing elit. Numquam quasi illum necessitatibus
                        temporibus ducimus molestias at. <br/> Ducimus quod dolore eos. Laudantium totam magnam natus,
                        quae corporis possimus ipsum officia dolorem. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Qui odit incidunt sequi dicta unde sed eius officia <br/> numquam atque cumque. Vel perferendis
                                magnam excepturi et? Odio doloremque quidem saepe dicta.
                    </p>

                <img src="https://artdiscount.co.uk/cdn/shop/files/watercolourbanner_1400x.progressive.jpg?v=1694100382"
                     alt="About page image" class="img-fluid"
                     style={{marginTop: "15px", marginLeft: "10%", width: "90%"}} />

        </div>
    );
}

export default AboutUs;
