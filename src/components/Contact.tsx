import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {HiLocationMarker} from "react-icons/hi"
import {AiTwotoneMail} from "react-icons/ai"
import {BsGithub, BsTwitter, BsLinkedin, BsFillTelephoneFill} from "react-icons/bs"


export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e :any) => {
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
    <div className='py-4 relative' id='contact'>
    <div className='flex flex-col-reverse md:flex-row gap-5 md:gap-14 items-center px-5 md:px-24 shadow-lg rounded-lg bg-gradient-to-r  from-purple-500 to-purple-400 animate-text py-3 md:py-16 w-full'> 
    <div className='text-white font-bold md:w-[33%]'>
      <p className='font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-l from-purple-900 to-purple-400 animate-text pb-1'>Get In touch</p>
      <p className='pb-5 text-white/80 text-xl font-semibold'>Don't be shy! Hit me up!</p>
      <div className='flex gap-2 items-center text-white/90 font-semibold'>
        <BsFillTelephoneFill className="border border-white rounded-full p-1 text-3xl"/>
        <div className=''>
        <p>PHONE</p>
        <p>+2349165643535</p>
        </div>
      </div>

      <div className='flex gap-2 items-center py-2 text-white/90 font-semibold'>
        <AiTwotoneMail className="border border-white rounded-full p-1 text-3xl"/>
        <div>
        <p>EMAIL</p>
        <p>oluwadarequeensheba@gmail.com</p>
        </div>
      </div>

      <div className='flex gap-2 items-center text-white/90 font-semibold'>
      <HiLocationMarker className="border border-white rounded-full p-1 text-3xl"/>
        <div>
        <p>LOCATION</p>
        <p>Lagos, Nigeria</p>
        </div>
      </div>

      <div className="flex gap-5 text-black/70 text-2xl pt-7 items-center  ">
            <a target="_blank" href="https://github.com/Queen-in-tech"><BsGithub/></a>
            <a target="_blank" href="https://twitter.com/Queenofsheba0"><BsTwitter/></a>
            <a href=""><BsLinkedin/></a>
        </div>
    </div>

    <form ref={form} onSubmit={sendEmail} className='flex flex-col md:w-[55%] gap-5'>
    <div className='flex gap-5 w-full'>
      <input type="text" name="user_name" placeholder='Your Name' className='bg-transparent border-b placeholder:text-white/80 outline-none w-[45%] text-white/90 capitalize'/>

      <input type="email" name="user_email" placeholder='Your Email' className='bg-transparent border-b placeholder:text-white/80 outline-none w-[45%] text-white/90 z-10'/>
    </div>
      <input type="text" name="subject" placeholder='Subject' className='bg-transparent border-b placeholder:text-white/80 outline-none text-white/90'/>
      <textarea name="message" placeholder='Say Something' rows={6} className='bg-transparent border-b placeholder:text-white/80 outline-none text-white/90 '/>
      <input type="submit" value="Send" className='p-2 bg-black/70 rounded-lg text-white text-center w-20 cursor-pointer hover:opacity-80'/>
    </form>

    <p className='md:hidden text-2xl text-white/70'>Contact Me!</p>

    <div >
      {/* <img src="IMG_2612.PNG" alt="" className='w-44 h-44 absolute left-64 top-5'/> */}
      <img src="IMG_2616.PNG" alt="" className='hidden md:block w-60 h-60 object-contain absolute right-0 top-0'/>

    </div>
    </div>
    </div>
  );
};

export default Contact
