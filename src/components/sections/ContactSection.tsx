import { ContactForm } from '@/components';

const ContactSection = () => {
  return (
    <section className="w-full h-full overflow-hidden bg-gradient-to-b from-white via-prime-alabaster to-platinum">
      <div className="section__container relative z-20">
        <h2 className="heading-text pb-10 text-prime">Get In Touch</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center justify-center w-full h-full">
          <div className="bg-gradient-to-br from-white via-prime-saffron to-prime-saffron-700 w-full h-full max-h-[1000px] rounded-[50%] absolute -z-0 left-[40%]" />
          <div className="bg-gradient-to-tl opacity-60 from-prime-eerie-black to-prime-jet w-full h-full max-h-[1000px] rounded-[50%] absolute -z-10 right-[40%] top-10" />
          <div className="w-full z-20 md:flex-col justify-center p-4 bg-white bg-opacity-30 h-fit mx-4 hidden md:flex">
            <h3 className="text-[1.6em] font-bold my-4">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              quaerat? Minima, error. Labore, quis veniam odit quos earum
              tempore tenetur. Exercitationem velit totam repudiandae nulla
              perspiciatis sunt sit iusto.
            </p>
          </div>
          <div className="flex items-center justify-center z-30 max-h-[200px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
