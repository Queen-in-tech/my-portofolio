import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiLocationMarker } from "react-icons/hi";
import { AiTwotoneMail } from "react-icons/ai";
import { BsGithub, BsTwitter, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm('service_56625pa', 'template_1goxs4a', form.current, '12XwjtMQwv4LxlQfx')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
      form.current.reset();
    }
  };

  return (
    <div className="py-10 relative" id="contact">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center px-6 md:px-20 shadow-xl rounded-3xl bg-gradient-to-r from-purple-600 to-purple-400 animate-text py-10 w-full">
        
        {/* Contact Info */}
        <div className="text-white font-semibold md:w-[35%] space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-900 to-purple-300">
              Get In Touch
            </h2>
            <p className="text-white/80 text-lg mt-2">Don't be shy! Reach out to me!</p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-3 items-center">
              <BsFillTelephoneFill className="text-2xl border border-white rounded-full p-1" />
              <div>
                <p className="text-sm">PHONE</p>
                <p className="text-white/90 text-base">+234 916 564 3535</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <AiTwotoneMail className="text-2xl border border-white rounded-full p-1" />
              <div>
                <p className="text-sm">EMAIL</p>
                <p className="text-white/90 text-base">oluwadarequeensheba@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <HiLocationMarker className="text-2xl border border-white rounded-full p-1" />
              <div>
                <p className="text-sm">LOCATION</p>
                <p className="text-white/90 text-base">Abuja, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-6 text-2xl text-white/90">
            <a href="https://github.com/Queen-in-tech" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <BsGithub />
            </a>
            <a href="https://twitter.com/Queenofsheba0" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <BsTwitter />
            </a>
            <a href="https://www.linkedin.com/in/oluwadare-queensheba" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <BsLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-[55%] gap-6">
          <div className="flex flex-col md:flex-row gap-5">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              className="bg-transparent border-b-2 border-white placeholder:text-white/70 text-white outline-none w-full md:w-1/2 py-2"
              required
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              className="bg-transparent border-b-2 border-white placeholder:text-white/70 text-white outline-none w-full md:w-1/2 py-2"
              required
            />
          </div>

          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            className="bg-transparent border-b-2 border-white placeholder:text-white/70 text-white outline-none py-2"
            required
          />

          <textarea 
            name="message" 
            placeholder="Say Something" 
            rows={6} 
            className="bg-transparent border-b-2 border-white placeholder:text-white/70 text-white outline-none py-2"
            required
          />

          <button 
            type="submit" 
            className="self-start bg-black/80 hover:bg-black text-white font-medium px-6 py-2 rounded-lg transition-all duration-300"
          >
            Send
          </button>
        </form>

        {/* Decorative Image */}
        <div>
          <img src="IMG_2616.PNG" alt="Contact illustration" className="hidden md:block w-60 h-60 object-contain absolute right-0 top-0" />
        </div>

      </div>
    </div>
  );
};

export default Contact;
