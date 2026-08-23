import { useMemo, useState } from "react";
import { Mail, Package, BadgeCheck, ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

type Shot = {
  category: string;
  title: string;
  caption: string;
  image: string; // leave "" for a placeholder tile until the screenshot is added
};

// One solid accent per category — drives tile theming via the --accent CSS var.
const categoryMeta: Record<string, { color: string; icon: typeof Mail }> = {
  "Email Support": { color: "#3b82f6", icon: Mail },
  "Product Listings": { color: "#14b8a6", icon: Package },
  "Evidence & Results": { color: "#a855f7", icon: BadgeCheck },
};

// Drop screenshots in /public and set `image` to the path (e.g. "/gallery/email-1.png").
const gallery: Shot[] = [
  { category: "Email Support", title: "Customer Correspondence", caption: "Professional refund & returns resolution in Outlook", image: "/gallery/email-customer-support.png" },
  { category: "Product Listings", title: "Shopify Product Catalog", caption: "Catalog setup & product management", image: "/gallery/shopify-product-catalog.png" },
  { category: "Product Listings", title: "AI-Assisted Descriptions", caption: "Product copy generated & refined with Claude", image: "/gallery/ai-product-descriptions.png" },
  { category: "Product Listings", title: "Product Data & Size Charts", caption: "Metafields, size charts & specs configured", image: "/gallery/product-metafields-size-chart.png" },
  { category: "Evidence & Results", title: "Order Fulfillment", caption: "165+ orders managed & batched in Shopify", image: "/gallery/order-fulfillment-dashboard.png" },
  { category: "Evidence & Results", title: "Fulfilled Orders", caption: "Orders shipped with tracking added", image: "/gallery/fulfilled-orders.png" },
  { category: "Evidence & Results", title: "Backend Operations", caption: "Ticket resolution across brands in Basecamp", image: "/gallery/backend-operations-basecamp.png" },
];

const GallerySection = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filters = useMemo(() => {
    const counts = new Map<string, number>();
    gallery.forEach((g) => counts.set(g.category, (counts.get(g.category) ?? 0) + 1));
    return [
      { label: "All", count: gallery.length },
      ...Array.from(counts, ([label, count]) => ({ label, count })),
    ];
  }, []);

  const visible = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  // Lightbox only cycles through items that actually have an image.
  const withImage = visible.filter((g) => g.image);
  const openLightbox = (shot: Shot) => {
    const idx = withImage.findIndex((g) => g === shot);
    if (idx !== -1) setLightbox(idx);
  };
  const step = (dir: number) => {
    setLightbox((cur) => {
      if (cur === null) return cur;
      return (cur + dir + withImage.length) % withImage.length;
    });
  };

  return (
    <section id="gallery" className="section-white py-24">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary text-center mb-3">
          My Work in Action
        </p>
        <h2 className="section-title">Work Showcase</h2>
        <div className="section-title-underline" />
        <p className="text-muted-foreground text-center text-sm mb-10 -mt-6">
          A visual look at what I do day to day — email support, product listings, and results
        </p>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => {
            const isActive = active === f.label;
            return (
              <button
                key={f.label}
                onClick={() => setActive(f.label)}
                aria-pressed={isActive}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25 scale-105"
                    : "bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-primary hover:-translate-y-0.5"
                }`}
              >
                {f.label}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none ${
                    isActive ? "bg-white/25 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid — re-keyed per filter so tiles re-animate in */}
        <div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {visible.map((shot, i) => {
            const meta = categoryMeta[shot.category] ?? { color: "#3b82f6", icon: ImageIcon };
            const Icon = meta.icon;
            const accent = meta.color;
            const hasImage = Boolean(shot.image);
            return (
              <Reveal key={shot.title} delay={i * 70}>
                <button
                  onClick={() => hasImage && openLightbox(shot)}
                  className={`group relative w-full text-left rounded-xl overflow-hidden border border-border shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                    hasImage ? "cursor-zoom-in" : "cursor-default"
                  }`}
                  style={{ ["--accent" as string]: accent }}
                >
                  {/* Media area (4:3) */}
                  <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                    {hasImage ? (
                      <img
                        src={shot.image}
                        alt={shot.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      // Placeholder until a screenshot is dropped in
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                        style={{ background: `color-mix(in srgb, ${accent} 7%, white)` }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `color-mix(in srgb, ${accent} 14%, white)` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: accent }} />
                        </div>
                        <span className="text-[11px] font-medium text-muted-foreground">Screenshot coming soon</span>
                      </div>
                    )}

                    {/* Category chip */}
                    <span
                      className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full border backdrop-blur-sm"
                      style={{
                        color: accent,
                        borderColor: `color-mix(in srgb, ${accent} 30%, transparent)`,
                        background: `color-mix(in srgb, ${accent} 12%, white)`,
                      }}
                    >
                      <Icon className="w-3 h-3" />
                      {shot.category}
                    </span>
                  </div>

                  {/* Caption bar */}
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-foreground text-sm leading-tight">{shot.title}</h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{shot.caption}</p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && withImage[lightbox] && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {withImage.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-4 sm:left-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-4 sm:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={withImage[lightbox].image}
              alt={withImage[lightbox].title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <figcaption className="text-center text-white/90 text-sm mt-4">
              <span className="font-semibold">{withImage[lightbox].title}</span>
              <span className="text-white/60"> — {withImage[lightbox].caption}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
