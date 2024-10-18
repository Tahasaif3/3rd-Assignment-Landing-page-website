export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Assignment 1',
      description: `Assignment 1: Website Creation
Create a multi-page website with:

Home, About, Contact, and Services pages.
Links between all pages.
One nested page under Services.
CSS organized in a dedicated folder.`,
      link: 'https://website-iuck.vercel.app/',
    },
    {
      id: 2,
      title: 'Assignment 2',
      description: `Assignment 2:

Create a homepage that includes:
Header component
Footer component
Hero section
style all components appropriately to enhance the overall design.`,
      link: 'https://website-assignment-three.vercel.app/',
    },
    {
      id: 3,
      title: 'Assignment 3',
      description: `Assignment 3: 
    Create a Home Page that includes the following elements:  
    Header: Make sure it contains navigation links and is visually appealing.  
    Footer: Include relevant information and links.  
    2-3 additional sections styled using Tailwind CSS, such as an About section, Services section, or Contact section.  
    Use at least one image to enhance the visual appeal of your homepage.  
    Experiment with multiple colors and various style sizes to create a cohesive and engaging design.`,

     link: 'https://3rd-assignment-landing-page-website-j8j5.vercel.app/', 
    },
  ]

  return (
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 animate-text opacity-0 translate-y-4 transition-all duration-500 ease-out">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md animate-text opacity-0 translate-y-4 transition-all duration-500 ease-out" style={{transitionDelay: `${index * 100}ms`}}>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
