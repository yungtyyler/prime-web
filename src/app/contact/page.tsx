import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prime Web Solutions | Contact',
  description:
    'Contact us for your next project or to learn more about our services.',
};

const Contact = () => {
  return (
    <section className="w-full h-full">
      <div className="bg-dark-charcoal w-full md:h-[400px] py-12 text-center flex flex-col items-center justify-center gap-6">
        <h1 className="uppercase text-[1.8em] text-prime-green-500 font-bold">
          How can we best serve you?
        </h1>
        <p className="text-white">
          Fill out the form below to tell us about your dream, and we'll get
          right back to you with how we can make them a reality
        </p>
      </div>
      <div className="page__container">
        <div className="my-12 flex flex-col gap-10 items-center justify-center">
          <div className="text-center flex flex-col gap-4">
            <h2 className="uppercase text-[1.6em] font-bold text-prime-purple-700">
              Contact Us
            </h2>
            <p className="max-w-lg">
              Be sure to be concise, but expressive of your vision! This helps
              us to better understand how to help you more quickly
            </p>
          </div>
          <form className="border rounded-xl bg-off-white shadow-xl flex flex-col p-12">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
