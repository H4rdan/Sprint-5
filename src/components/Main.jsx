import React from "react";
import anywhere from "/icons/icon-access-anywhere.svg"
import security from "/icons/icon-security.svg"
import collaboration from "/icons/icon-collaboration.svg"
import anyfile from "/icons/icon-any-file.svg"
import rightarrow from "/icons/circle-right.svg"
import productive from "/images/illustration-stay-productive.png"
import profile1 from "/images/profile-1.jpg"
import profile2 from "/images/profile-2.jpg"
import profile3 from "/images/profile-3.jpg"
import Features from "./main-components/Features";
import Testimonial from "./main-components/Testimonial";
import "../styles/components/Main.css"


const Main = () => {
    return (
        <>
            <section className="main-features">
                <div className="main-features-in">
                    <Features
                        icon={anywhere}
                        title="Access your files, anywhere"
                        txt="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere." />
                </div>
                <div className="main-features-in">
                    <Features
                        icon={security}
                        title="Security you can trust"
                        txt="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files." />
                </div>
                <div className="main-features-in">
                    <Features
                        icon={collaboration}
                        title="Real-time collaboration"
                        txt="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required." />
                </div>
                <div className="main-features-in">
                    <Features
                        icon={anyfile}
                        title="Store and type of file"
                        txt="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared." />
                </div>
            </section>

            <section className="main-productive">
                <img className="productive-img" src={productive} alt="" />
                <div className="main-productive-in">
                    <h3>Stay productive, wherever you are</h3>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration, No email attachments required.</p>
                    <div className="main-productive-in-a">
                        <p><a href="">See how Fylo works</a></p>
                    </div>
                </div>
            </section>
            <section className="main-testimonial">
                <div className="main-testimonial-in">
                    <Testimonial
                        txt="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                        icon={profile1}
                        title="Satish Patel"
                        job="Founder & CEO, Huddle"
                    />
                </div>
                <div className="main-testimonial-in">
                    <Testimonial
                        txt="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                        icon={profile2}
                        title="Bruce McKenzie"
                        job="Founder & CEO, Huddle"
                    />
                </div>
                <div className="main-testimonial-in">
                    <Testimonial
                        txt="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                        icon={profile3}
                        title="Iva Boyd"
                        job="Founder & CEO, Huddle"
                    />
                </div>
            </section>
        </>
    )
}

export default Main