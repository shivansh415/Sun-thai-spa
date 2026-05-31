"use client";

type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
  active: boolean;
};

const POSTS: readonly BlogPost[] = [
  {
    date: "APRIL 2025",
    title: "The Art of Thai Massage",
    excerpt:
      "Discover how traditional Thai techniques release chronic muscle tension and restore energy flow to your entire body.",
    active: false,
  },
  {
    date: "MARCH 2025",
    title: "Aromatherapy: Healing Through Scent",
    excerpt:
      "Essential oils have been used for centuries. Learn how our therapists choose blends tailored to your needs.",
    active: true,
  },
  {
    date: "FEBRUARY 2025",
    title: "Why You Should Book a Couples Massage",
    excerpt:
      "Shared relaxation deepens connection. Find out why couples who spa together, stay together.",
    active: false,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-spa-bg py-24 px-4">
      <header className="text-center">
        <p className="text-spa-gold text-xs font-sans uppercase tracking-[0.3em] font-medium">
          Insights &amp; Wellness
        </p>
        <h2 className="mt-4 font-playfair text-4xl sm:text-5xl text-spa-cream">
          From Our Blog
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-12 md:mt-16 max-w-6xl mx-auto">
        {POSTS.map((post) => {
          const baseClasses =
            "group bg-spa-card rounded-xl p-8 transition-all duration-300 cursor-pointer";
          const stateClasses = post.active
            ? "border border-spa-gold/40"
            : "border border-spa-cream/10 hover:border-spa-gold/40";

          return (
            <article
              key={post.title}
              className={`${baseClasses} ${stateClasses}`}
            >
              <p className="text-spa-gold text-xs uppercase tracking-[0.2em] font-sans">
                {post.date}
              </p>
              <h3
                className={`mt-3 font-playfair text-xl md:text-2xl leading-snug transition-colors ${
                  post.active
                    ? "text-spa-gold"
                    : "text-spa-cream group-hover:text-spa-gold"
                }`}
              >
                {post.title}
              </h3>
              <p className="mt-4 text-spa-muted text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
