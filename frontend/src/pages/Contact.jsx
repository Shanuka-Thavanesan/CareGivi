

const Contact =()=>{
    return <section className='mt-20 mb-20'>
        <div className='px-4 mx-auto max-w-screen-md filter drop-shadow-md md:drop-shadow-xl '>
            <h2 className='heading text-center text-yellowGreen'>
            Contact<span className='text-primaryColor '> Us </span>
            </h2>
            <p className='mb-8 lg:mb-16 font-light text-center text-primaryColor'>
                 Feedback or general inquires, Freely contact with us!
                 </p>
                <form action="#" className='space-y-8'>
                    <div>
                        <label htmlFor="email" className='form_label text-primaryColor'>Your Email</label>
                        <input 
                        type="email"
                        id='email'
                        placeholder='example@gmail.com' 
                        className='form_input mt-1 text-yellowGreen' />
                    </div>

                    <div>
                        <label htmlFor="subject" className='form_label text-primaryColor'>Subject</label>
                        <input 
                        type="text"
                        id='subject'
                        placeholder='Let us know how we can help you' 
                        className='form_input mt-1 text-yellowGreen' />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className='form_label text-primaryColor'>Your Message</label>
                        <textarea
                        rows='6'
                        type="text"
                        id='message'
                        placeholder='Leave a comment....' 
                        className='form_input mt-1 text-yellowGreen' />
                    </div>
                    <button type="submit" className="btn bg-peach text-primaryColor rounded sm:w-full text-center">
                        Submit
                        </button>
                </form>
        </div>
    </section>  
};

export default Contact;