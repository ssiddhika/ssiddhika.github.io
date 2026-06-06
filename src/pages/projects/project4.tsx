import Head from 'next/head';
import Image from 'next/image';
import SectionHeading from '../../components/SectionHeading';

const Project4 = () => {
  return (
    <>
      <Head>
        <title>AI in Space Workshop </title>
        <meta name="description" content="A three-day workshop on spacecraft design and AI ethics at the Powerhouse Museum." />
      </Head>
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        {/* Title */}
        <SectionHeading as="h1" className="mb-4">
          AI in Space Workshop
        </SectionHeading>
        <p className="text-lg text-base-content mb-8">
          A three-day student innovation workshop on spacecraft design and AI ethics, held at the Powerhouse Museum in collaboration with ING Bank and Space Machines Company.
        </p>

        {/* Image */}
        <div className="relative w-full h-72 md:h-96 mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/Projects/Space.avif" 
            alt="AI in Space Workshop at Powerhouse Museum"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Overview</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            As part of Powerhouse's Creative Studios program, I co-facilitated a workshop series introducing high school students to the intersection of artificial intelligence and space technology. Students collaborated in teams to design spacecrafts and discuss ethical AI decision-making in extreme environments.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            This was a dynamic educational experience combining STEM education, design thinking, and soft skills — all within a real-world aerospace context.
          </p>
        </section>

        {/* My Role */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">My Role</SectionHeading>
          <ul className="list-disc list-inside text-base lg:text-lg text-base-content space-y-2">
            <li>Co-designed workshop content alongside UTS and Space Machines Company engineers</li>
            <li>Led student groups through design challenges and interactive activities</li>
            <li>Facilitated discussions on AI ethics, autonomy, and responsibility in space systems</li>
            <li>Helped shape an inclusive and encouraging learning environment for curious high school students</li>
          </ul>
        </section>

        {/* Impact & Outcomes */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Impact & Outcomes</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            The workshop helped students explore career paths in space, AI, and engineering through hands-on learning. It also fostered critical thinking around ethical technology development.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            The success of this initiative led to discussions about expanding similar formats to future outreach and STEM education events at UTS.
          </p>
        </section>

        {/* Skills & Tools */}
        <section>
          <SectionHeading className="section-heading--sm mb-3">Skills & Tools</SectionHeading>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="badge badge-outline">Workshop Design</span>
            <span className="badge badge-outline">Facilitation</span>
            <span className="badge badge-outline">Teaching</span>
            <span className="badge badge-outline">Leadership</span>
            <span className="badge badge-outline">AI Ethics</span>
            <span className="badge badge-outline">Teamwork</span>
            <span className="badge badge-outline">Adobe Firefly</span>
            <span className="badge badge-outline">Adobe Photoshop</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project4;
