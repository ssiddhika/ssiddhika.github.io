import Image from 'next/image';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Siddhika Prasad - Software Engineering and Business Student" />
      </Head>
      <div className="p-8 max-w-screen-lg mx-auto bg-surface min-h-screen">
        {/* Introduction */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="relative w-full h-64">
                <Image
                  src="/images/Grad.jpg"
                  alt="Siddhika Prasad"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="font-heading text-4xl font-bold text-primary mb-4">About Me</h1>
              <p className="text-base-content text-lg">
              I am a curious developer, designer, and leader currently studying Software Engineering and Business at UTS. 
                I’m passionate about using code, design, and communication to solve real-world problems and create meaningful impact.
              </p>
              <p className="text-base-content text-lg mt-4">
                I love building systems from the ground up and collaborating with people who care about making tech more human.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Growth */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-secondary mb-2">Education & Growth</h2>
              <h3 className="text-xl font-medium text-info mb-4">University of Technology Sydney</h3>
              <p className="text-lg text-base-content ">
                I’m currently pursuing a double degree in Software Engineering and Human Resource Management. 
                My academic journey has been shaped by hands-on projects, mentorship roles, and internships.
              </p>
              <p className="text-base-content text-lg mt-4">
                These experiences have taught me to think critically, lead effectively, and build with empathy. 
                I thrive in environments where curiosity and continuous learning are valued.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <div className="relative w-full h-64">
                <Image
                  src="/images/SUNSET.jpg"
                  alt="UTS Sunset"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Impact */}
        <section>
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
        <div className="w-full md:w-1/2 mb-6 md:mb-6">
      <div className="relative w-full h-64">
        <Image
          src="/images/AAA.jpg"
          alt="Siddhika at AAA awards"
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-lg"
        />       
        
      </div>
      <div className="w-full md:w-1/2 mb-6 md:mb-6"></div>
      <div className="relative w-full h-64">
        <Image
          src="/images/Award.jpg"
          alt="Siddhika with Dean"
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-lg"
        />       
        
      </div>
      
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary mb-4">Experience & Impact</h2>
              <ul className="list-disc list-inside text-base-content text-lg space-y-4">
                <li>
                  <strong>Engineering Intern at Optik Consultancy:</strong> Developed a plugin for Hilti to automate MEP design workflows using Autodesk Navisworks and .NET.
                </li>
                <li>
                  <strong>AI in Space Intern at Powerhouse Museum:</strong> Co-facilitated a 3-day student workshop on spacecraft design and AI ethics with Space Machines Company.
                </li>
                <li>
                  <strong>Project Co-Lead at AusBizGrowth.ai:</strong> Built a full-stack web app to identify high-growth SMEs; successfully pitched to Business NSW.
                </li>
                <li>
                  <strong>UTS Business School Mentor:</strong> Mentored over 50 students and co-led workshops for 200+ attendees, helping build inclusive classroom environments.
                </li>
                <li>
                  <strong>Head Teacher at Code Camp:</strong> Delivered engaging STEM classes, increasing student retention by 35% through strong facilitation and communication.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
