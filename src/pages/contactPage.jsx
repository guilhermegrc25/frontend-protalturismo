import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";


const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="mt-auto">
                <ContactForm/>
                <Footer />
            </div>
        </div>
    );
};

export default ContactPage;