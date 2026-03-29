const setup = [
  {
    name: "Dell Latitude Laptop",
    detail: "My Primary Machine",
    image: "/dell-laptop.jpg",
    specs: [
      "Intel Core i5 processor",
      "16 GB RAM",
      "256 GB SSD + 1 TB Storage",
      "Dell Latitude series",
    ],
  },
  {
    name: "External Monitor",
    detail: "22-inch Display",
    image: "/22-monitor.png",
    specs: [
      "22-inch full HD display",
      "Extended workspace setup",
      "Multi-tab & CRM ready",
      "Dual-screen productivity",
    ],
  },
  {
    name: "Internet Connection",
    detail: "300 Mbps Fiber",
    image: "/pldt.png",
    specs: [
      "300 Mbps fiber connection",
      "Low latency for live calls",
      "Stable uptime for support",
      "Zero-downtime guarantee",
    ],
  },
  {
    name: "Jabra Headset",
    detail: "Noise Cancellation",
    image: "/jabra-headphones.jpeg",
    specs: [
      "Active noise cancellation",
      "Crystal-clear voice quality",
      "All-day comfort wear",
      "Professional call-ready",
    ],
  },
];

const SetupSection = () => {
  return (
    <section id="setup" className="section-white py-24">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          My Workspace
        </p>
        <h2 className="section-title">Setup & Equipment</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-14 -mt-6">
          Built for reliability — everything I need to deliver consistent, professional support
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {setup.map(({ name, detail, image, specs }) => (
            <div
              key={name}
              className="group relative rounded-xl overflow-hidden border border-border shadow-sm cursor-default"
              style={{ height: '260px' }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />

              {/* Base overlay — always visible, darkens on hover */}
              <div className="absolute inset-0 bg-white/60 group-hover:bg-black/55 transition-colors duration-300" />

              {/* Default state — just the title at the bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-bold text-foreground text-sm leading-tight">{name}</h3>
                <p className="text-[11px] text-primary font-semibold mt-0.5">{detail}</p>
              </div>

              {/* Hover state — specs revealed */}
              <div className="absolute inset-0 flex flex-col justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-white text-sm mb-1">{name}</h3>
                <p className="text-[11px] text-orange-300 font-semibold mb-3">{detail}</p>
                <ul className="space-y-1.5">
                  {specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                      <span className="text-[11px] text-white/90 leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SetupSection;
