import { SplitContent } from '@/components';

const AboutSection = () => {
  return (
    <section className="w-full h-full bg-gradient-to-b from-white via-prime-alabaster to-prime-platinum dark:from-black dark:to-prime-jet dark:via-prime-eerie-black">
      <div className="section__container">
        <h2 className="heading-text dark:text-prime-alabaster">
          About Prime Web
        </h2>
        <div className="w-full h-full flex flex-col md:my-12 md:gap-16 gap-4">
          <SplitContent left />
          <SplitContent />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
