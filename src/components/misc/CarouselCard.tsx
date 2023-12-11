import Image from 'next/image';
import Slide from '@/types/slide';

const CarouselCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl text-center">Internal Apps</h1>
      <Image
        src="/carousel/internal-apps.jpg"
        alt="Internal Apps"
        width={500}
        height={500}
        className="object-contain w-full max-h-[400px]"
      />
    </div>
  );
};

export default CarouselCard;
