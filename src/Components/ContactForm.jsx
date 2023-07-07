const ContactForm = () => {
    return (
        <section>

            <h2>Contact Form Here</h2>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            <div id="error-message" tabIndex="-1"></div>
            <p>* denotes required fields.</p>
            
            <form id="contact-form" action="" method="">
                <div class="container">
                    <div class="item">
                    
                        <label htmlFor="name">Name *</label>
                        <p id="error1" className="error"></p>
                        <input type="text" id="name" name="name" required aria-describedby="error1"></input>
            
                        <label htmlFor="email">Your email *</label>
                        <p id="error2" className="error"></p>
                        <input type="email" id="email" name="email" autoComplete="email" required aria-describedby="error2"></input>

                        <label htmlFor="message">Message *</label>
                        <p id="error3" className="error"></p>
                        <input type="text" id="message" name="message" required aria-describedby="error3"></input>

                    </div>
                </div>
            </form>
            
            
        </section>
    )
}

export default ContactForm