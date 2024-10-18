export default function Hero() {
    return (
      <section id="home" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-black md:text-6xl font-bold mb-4 animate-text opacity-0 translate-y-10 transition-all duration-700 ease-out">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-text opacity-0 translate-y-10 transition-all duration-700 ease-out">
            Hello, I am Taha Saif (Front-End Web Developer )
          </p>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors animate-text opacity-0 translate-y-10 transition-all duration-700 ease-out">
            Learn More
          </button>
        </div>
      </section>
    )
  }
  