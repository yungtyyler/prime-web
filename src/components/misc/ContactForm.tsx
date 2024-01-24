const ContactForm = () => {
  return (
    <form className="grid grid-cols-2 gap-6 w-full max-w-[500px] h-fit border border-transparent p-4 rounded-xl justify-center bg-prime-jet text-white">
      <div className="col-span-2">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="w-full" />
      </div>
      <div className="md:col-span-1 col-span-2 flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="md:col-span-1 col-span-2 flex flex-col">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div className="col-span-2">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="w-full"
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
