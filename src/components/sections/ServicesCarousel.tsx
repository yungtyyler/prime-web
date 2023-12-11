'use client';

import { CarouselCard } from '@/components';

const Page = () => {
  return (
    // Carousel for services
    // MAKE THIS AN OVERLAY INSTEAD OF HEAD, BODY, FOOTER CARD
    <div className="border border-gray-300 md:max-w-3xl mx-auto flex flex-col gap-2">
      <CarouselCard />
    </div>
  );
};

export default Page;
