import Image from "next/image";

const posts = [
  {
    tag: "Product Update",
    title: "Introducing Batch Mode: Generate 100 Ad Variants Overnight",
    excerpt:
      "The biggest update in Creatify's history. Batch Mode lets you create and test hundreds of video ad variations simultaneously.",
    date: "Apr 8, 2026",
    readTime: "4 min read",
    img: "/images/img-13.png",
  },
  {
    tag: "Strategy",
    title: "Why Video Ads Beat Static Images on Meta in 2026",
    excerpt:
      "Meta's algorithm now favors video creatives 3:1 over static images. Here's the data — and how to take advantage.",
    date: "Apr 3, 2026",
    readTime: "6 min read",
    img: "/images/img-14.png",
  },
  {
    tag: "Tutorial",
    title: "The 3-Hook Formula: Creatify's Blueprint for Scroll-Stopping Ads",
    excerpt:
      "90% of ad performance is determined in the first 3 seconds. We analyzed 100,000 ads to find the winning hooks.",
    date: "Mar 28, 2026",
    readTime: "8 min read",
    img: "/images/img-15.png",
  },
];

export function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
              style={{ color: "rgb(87,60,255)", background: "rgba(87,60,255,0.08)" }}
            >
              Resources
            </span>
            <h2
              className="font-semibold text-gray-900 leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}
            >
              Learn from the best
            </h2>
          </div>
          <a
            href="#"
            className="shrink-0 text-sm font-semibold flex items-center gap-1.5"
            style={{ color: "rgb(87,60,255)" }}
          >
            View all posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gray-50">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                  style={{ color: "rgb(87,60,255)", background: "rgba(87,60,255,0.1)" }}
                >
                  {post.tag}
                </span>
                <h3 className="mt-3 text-base font-semibold text-gray-900 leading-snug group-hover:text-[rgb(87,60,255)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
