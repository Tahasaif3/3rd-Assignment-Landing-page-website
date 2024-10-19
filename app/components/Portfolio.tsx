export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Assignment 1',
      description: `Assignment 1: 
Create About, Contact Us, and Service Page page
- In Service Create nested pages (app-development & website-development)
- Link them via Next.js Link Tag.`,
      link: 'https://website-iuck.vercel.app/',
    },
    {
      id: 2,
      title: 'Assignment 2',
      description: `Assignment 2:
Create a component folder
- Inside component folder create 3 components: Header, Footer & Hero
- Styled them properly using custom CSS (not Tailwind CSS)
- Use all components in home, about, and contact us pages.`,
      link: 'https://website-assignment-three.vercel.app/',
    },
    {
      id: 3,
      title: 'Assignment 3',
      description: `Create a minimal landing page
- Create header & footer components
- Create 2 to 3 sections in the landing page (e.g., about us, portfolio)
- Style all components and sections properly using Tailwind CSS.`,
      link: 'https://3rd-assignment-landing-page-website-j8j5.vercel.app/',
    },
  ];

  return (
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 opacity-0 translate-y-4 animate-fadeIn transition-all duration-500 ease-out">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md opacity-0 translate-y-4 animate-fadeIn transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
