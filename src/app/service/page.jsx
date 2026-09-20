import { FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaPlug, FaRocket } from "react-icons/fa";

const services = [
    {
        icon: FaLaptopCode,
        title: "Frontend Development",
        desc: "Building modern, responsive and interactive user interfaces using React and Next.js.",
    },
    {
        icon: FaServer,
        title: "Backend Development",
        desc: "Building secure, scalable server-side applications with Node.js, Express, and MongoDB.",
    },
    {
        icon: FaPlug,
        title: "API Development",
        desc: "Creating and integrating RESTful APIs with third-party services for dynamic data flow.",
    },
    {
        icon: FaMobileAlt,
        title: "Responsive Design",
        desc: "Crafting mobile-first, pixel-perfect layouts that look great on every device.",
    },
    {
        icon: FaDatabase,
        title: "CRUD Operations",
        desc: "Implementing Create, Read, Update, and Delete functionality for dynamic, data-driven applications.",
    },
    {
        icon: FaRocket,
        title: "Full-Stack Applications",
        desc: "Delivering complete MERN stack applications from concept to production.",
    },
];

const Services = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-20">

            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                    Services
                </h2>
                <div className="w-32 md:w-40 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">

                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={index}
                            className="group relative bg-[#141414] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            {/* Serial Number */}
                            <span className="absolute top-4 right-5 text-5xl font-bold text-green-700 group-hover:text-blue-500/20 transition-colors duration-300">
                                0{index + 1}
                            </span>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:bg-blue-500 transition-colors duration-300">
                                <Icon className="text-2xl text-blue-500 group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default Services;