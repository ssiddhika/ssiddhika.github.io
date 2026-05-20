import Head from 'next/head';
import Image from 'next/image';

const PITCH_URL =
  'https://www.canva.com/design/DAG25j8cht4/pzidE1VgMKwdbECfezk1iA/edit';

const Project5 = () => {
  return (
    <>
      <Head>
        <title>Omada — Networking App</title>
        <meta
          name="description"
          content="Cross-platform Flutter app for sharing and organising contact details, built in 12 weeks for UTS Software Innovation Studio."
        />
      </Head>
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
          Omada — Networking App
        </h1>
        <p className="text-lg text-base-content mb-8">
          A cross-platform mobile app for sharing and organising contact details, built in 12 weeks
          for UTS Software Innovation Studio.
        </p>

        {/* Image */}
        <div className="relative w-full h-72 md:h-96 mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/Projects/Omada.png"
            alt="Omada networking app"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-3">Overview</h2>
          <p className="text-base lg:text-lg text-base-content mb-4">
            Sharing contact details at events and networking situations is still surprisingly
            awkward — business cards get lost, phone number exchanges are clunky, and there&apos;s
            no easy way to organise the people you meet by context or occasion.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            Omada was built to solve that. Developed as part of UTS Software Innovation Studio — a
            subject that runs like a startup sprint — the project took us from initial market
            research and competitor analysis through to a working cross-platform app in 12 weeks.
            The app lets users share their contact details instantly and organise their network in
            one place, running natively on both iOS and Android from a single Flutter codebase.
          </p>
        </section>

        {/* My Role */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-3">My Role</h2>
          <ul className="list-disc list-inside text-base lg:text-lg text-base-content space-y-2">
            <li>Contributed to cross-platform UI development in Flutter</li>
            <li>
              Participated in market research and competitor analysis to identify gaps in existing
              networking and contact-sharing tools
            </li>
            <li>
              Collaborated in an agile team environment across the full product lifecycle — from
              pitch and scoping through to build and demo
            </li>
            <li>Co-presented the project pitch to subject coordinators and peers</li>
          </ul>
        </section>

        {/* Impact & Outcomes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-3">Impact & Outcomes</h2>
          <p className="text-base lg:text-lg text-base-content mb-4">
            Omada was delivered as a working product within the 12-week studio timeframe. The
            project sharpened my understanding of mobile development with Flutter, product scoping
            under real constraints, and what it takes to go from an idea to something functional in
            a short sprint.
          </p>
          <p className="text-base lg:text-lg text-base-content mb-6">
            A video pitch was recorded and presented as part of the final assessment — you can
            watch it below.
          </p>
          <a
            href={PITCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary rounded-full"
          >
            Watch the pitch →
          </a>
        </section>

        {/* Skills & Tools */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-3">Skills & Tools</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="badge badge-outline">Flutter</span>
            <span className="badge badge-outline">Dart</span>
            <span className="badge badge-outline">Figma</span>
            <span className="badge badge-outline">Agile</span>
            <span className="badge badge-outline">Mobile Development</span>
            <span className="badge badge-outline">UI Design</span>
            <span className="badge badge-outline">Market Research</span>
            <span className="badge badge-outline">Product Thinking</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project5;
