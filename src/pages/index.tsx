import Head from 'next/head';
import IntroSection from '../components/IntroSection';
import RightNowSection from '../components/RightNowSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import AboutTeaserSection from '../components/AboutTeaserSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>Siddhika Prasad</title>
        <meta
          name="description"
          content="Siddhika Prasad — software engineering and HRM student in Sydney. Warm, personal portfolio."
        />
      </Head>
      <IntroSection />
      <div
        id="home-content"
        className="home-content px-6 lg:px-8 max-w-screen-lg mx-auto pb-20 pt-4"
      >
        <RightNowSection />
        <FeaturedProjectsSection />
        <AboutTeaserSection />
      </div>
    </>
  );
};

export default Home;
