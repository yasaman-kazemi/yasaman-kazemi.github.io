import './Contact.css'
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_93okbcl', 'template_mrezmio', form.current, {
                publicKey: 'xNmpm3Dei0EAaCrd1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email sent!')
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('please try again.')
                },
            );
    };


    return (
        <section id='contactPage'>
            <h1 className="contactPageTitle">Contact me!</h1>
            <span className="contactDesc">If you have any inquiries, wish to collaborate, or simply want to connect, feel free to reach out to me via email or through my GitHub profile. I'm always open to new opportunities and discussions. Additionally, you can explore my GitHub repository to discover more about my projects and contributions. Let's build something amazing together!</span>
            <form action="" ref={form} className="contactForm" onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='enter your name!' name='your_name' />
                <input type="email" className="email" placeholder='enter your email!' name='your_email' />
                <textarea name="message" rows="5" placeholder='enter your message' className='msg'></textarea>
                <button className="submitBtn" type='submit' value="send">submit</button>
                <div className="links">
                    <a href="https://www.linkedin.com/in/yasamankazemi1379/" target="_blank" rel="noopener noreferrer" >
                        <GrLinkedin className='link linkedin' />
                    </a>
                    <a href="https://github.com/yasaman-kazemi" target="_blank" rel="noopener noreferrer">
                        <GrGithub className='link github' />
                    </a>
                    <a href="https://t.me/yaasaaamaan" target="_blank" rel="noopener noreferrer" >
                        <BsTelegram className='link telegram' />
                    </a>
                    <a href="https://www.instagram.com/yaaaasamaaaan/" target="_blank" rel="noopener noreferrer" >
                        <GrInstagram className='link instagram' />
                    </a>
                </div>
            </form>
        </section>
    )
}

export default Contact
