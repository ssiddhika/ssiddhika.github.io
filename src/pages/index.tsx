import Head from 'next/head';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import RecentProjectsSection from '../components/RecentProjectsSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>Siddhika&apos;s Portfolio</title>
        <meta name="description" content="Siddhika Prasad&apos;s Software Engineering Portfolio" />
      </Head>
      <IntroSection />
      <div className="px-4 lg:px-8 max-w-screen-lg mx-auto space-y-8 pb-12">
      <AboutSection />
      <SkillsSection />
      <RecentProjectsSection />
      </div>
    </>
  );
};

export default Home;
