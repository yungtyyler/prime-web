import { SplitContent } from '@/components';

const AboutSection = () => {
  return (
    <div className="section__container bg-gradient-to-b from-white via-prime-alabaster to-prime-platinum">
      <h2 className="heading-text">About Prime Web</h2>
      <div className="w-full h-full flex flex-col md:my-12 md:gap-16 gap-4">
        <SplitContent left />
        <SplitContent />
      </div>
    </div>
  );
};
export default AboutSection;
