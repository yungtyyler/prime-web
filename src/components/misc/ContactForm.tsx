import { FormEvent } from 'react';
import { sendEmail } from './sendEmail';

const ContactForm = () => {
  const emailHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    sendEmail(formData);
    alert('Thank you for your message! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <form
      className="grid grid-cols-2 md:gap-6 gap-2 w-full max-w-[500px] max-h-[350px] md:max-h-full border border-transparent p-4 rounded-xl justify-center bg-prime-jet dark:border-prime-alabaster md:text-[1em] text-[0.8em]"
      onSubmit={(e) => emailHandler(e)}
      id="contact-form"
    >
      <div className="col-span-2">
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full p-1"
          autoComplete="name"
        />
      </div>
      <div className="md:col-span-1 col-span-2 flex flex-col">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="p-1"
          autoComplete="email"
        />
      </div>
      <div className="md:col-span-1 col-span-2 flex flex-col">
        <label htmlFor="phone" className="text-white">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="p-1"
          autoComplete="tel"
        />
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
          className="w-full p-1 overflow-scroll resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-white text-black w-fit md:py-2 py-1 px-6 rounded font-bold uppercase hover:brightness-95 transition-all duration-200 ease-in-out col-span-full md:text-[1em] text-[0.8em]"
      >
        Send
      </button>
    </form>
  );
};
export default ContactForm;
