'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
    form.current.reset();
    window.alert('Message sent successfully!');
  };

  return (
    <form
      className="grid grid-cols-2 gap-6 w-full max-w-[500px] h-fit border border-transparent p-4 rounded-xl justify-center bg-prime-jet"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="col-span-2">
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input type="text" name="name" id="name" className="w-full p-1" />
      </div>
      <div className="md:col-span-1 col-span-2 flex flex-col">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input type="email" name="email" id="email" className="p-1" />
      </div>
      <div className="md:col-span-1 col-span-2 flex flex-col">
        <label htmlFor="phone" className="text-white">
          Phone
        </label>
        <input type="tel" name="phone" id="phone" className="p-1" />
      </div>
      <div className="col-span-2">
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={5}
          className="w-full p-1"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-white text-black w-fit py-2 px-6 rounded font-bold uppercase hover:brightness-95 transition-all duration-200 ease-in-out col-span-full"
      >
        Send
      </button>
    </form>
  );
};
export default ContactForm;
