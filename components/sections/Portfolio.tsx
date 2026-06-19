const projects = [
  {
    title: "Glow With Kunal",
    category: "Makeup Artist Website",
    description:
      "Premium personal brand website designed to showcase services, portfolio and consultations.",
    link: "https://glowwith-kunal.vercel.app/",
    image:
      "https://i.ibb.co/xtZM3SNk/Screenshot-2026-06-19-141152.png",
  },
  {
    title: "Glam By Priyanka",
    category: "Makeup Artist Website",
    description:
      "Luxury makeup artist website with portfolio gallery and testimonials.",
    link: "https://glamby-priyanka.vercel.app/",
    image:
      "https://i.ibb.co/ccjxr7J8/Screenshot-2026-06-19-140934.png",
  },
  {
    title: "Layers Unisex Salon & Makeup Studio",
    category: "Salon Website",
    description:
      "Modern salon website featuring premium design and booking experience.",
    link: "https://layers-unisex-salon-makeup-studio.vercel.app/",
    image:
      "https://i.ibb.co/wXkPMv2/Screenshot-2026-06-19-123505.png",
  },
  {
    title: "Namita Garg Makeover & Academy",
    category: "Beauty Studio Website",
    description:
      "Elegant beauty studio website built to establish a strong online presence.",
    link: "https://demo-perlour.vercel.app/",
    image:
      "https://i.ibb.co/8gdY0YLf/Screenshot-2026-06-19-123921.png",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen  pb-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-color-black font-semibold tracking-[3px] uppercase">
            Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#fd9c52] mt-4">
            Selected Projects
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500 mt-5">
            Premium websites designed to help brands build trust,
            attract customers and establish a strong online presence.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] object-cover group-hover:scale-105 duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-7">

                <p className="text-[#E05A00] text-sm font-semibold uppercase tracking-wider">
                  {project.category}
                </p>

                <h2 className="text-2xl font-bold text-[#1A1A1A] mt-3">
                  {project.title}
                </h2>

                <p className="text-gray-500 mt-4 leading-7">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex mt-6 bg-[#fd9c52] text-white px-6 py-3 rounded-full font-medium hover:scale-105 duration-300"
                >
                  Live Preview →
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">

          <div>
            <h2 className="text-4xl font-bold text-[#fd9c52]">30+</h2>
            <p className="text-gray-500 mt-2">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#fd9c52]">100%</h2>
            <p className="text-gray-500 mt-2">Responsive</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#fd9c52]">SEO</h2>
            <p className="text-gray-500 mt-2">Optimized</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#fd9c52]">24/7</h2>
            <p className="text-gray-500 mt-2">Support</p>
          </div>

        </div>

      </div>
    </main>
  );
}