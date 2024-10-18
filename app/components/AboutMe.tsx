import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="/profile.png"
          alt="Taha Saif"
          width={128} 
          height={128}
          className="rounded-full mx-auto mb-8 animate-text opacity-0 translate-y-4 transition-all duration-500 ease-out"
        />
        <h2 className="text-3xl font-bold mb-8 animate-text opacity-0 translate-y-4 transition-all duration-500 ease-out">
          About Me
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-text opacity-0 translate-y-4 transition-all duration-500 ease-out">
          Hello! I&apos;m Taha Saif, a passionate web developer dedicated to building seamless and engaging web experiences. With expertise in modern frameworks like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, I strive to deliver high-quality, user-friendly applications that not only meet user needs but also enhance their digital interactions.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 animate-text opacity-0 translate-y-4 transition-all duration-500 ease-out">
          I have a strong foundation in both front-end and back-end technologies, allowing me to work effectively across the entire web development stack. My goal is to continually learn and adapt in this ever-evolving field, contributing innovative ideas and solutions to projects I undertake.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 animate-text opacity-0 translate-y-4 transition-all duration-500 ease-out">
          When I&apos;m not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enhancing my skills through online courses. I&apos;m excited about the possibilities that technology offers and look forward to building the future of the web.
        </p>
      </div>
    </section>
  );
}
