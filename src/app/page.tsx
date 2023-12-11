import { Hero, ServicesCarousel } from '@/components';

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="page__container">
        <div className="my-4">
          <h1 className="uppercase text-prime-purple-700 font-extrabold text-4xl text-center pb-8">
            What we can do for you
          </h1>
          <ServicesCarousel />
        </div>
      </div>
    </section>
  );
}
