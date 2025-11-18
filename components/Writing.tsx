const essays = [
  {
    title: "be delusional",
    date: "Aug 2024",
    description: "Why rational people never change the world. Everyone will tell you to be realistic. But what if delusion wasn't a bug, but a feature?",
    url: "https://anmolrathi4.substack.com/p/be-delusional",
  },
  {
    title: "Happiness is boring",
    date: "Jun 2024",
    description: "Happiness isn't what you think it is. It's not the presence of good things—it's the absence of wanting something else. That's it.",
    url: "https://anmolrathi4.substack.com/p/happiness-is-boring",
  },
]

export default function Writing() {
  return (
    <section id="writing" className="py-32 px-6 bg-black/[0.02]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12">Writing</h2>
        
        <div className="space-y-12 mb-16">
          {essays.map((essay, index) => (
            <a
              key={index}
              href={essay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-medium group-hover:opacity-60 transition-opacity">
                    {essay.title}
                  </h3>
                  <span className="text-sm text-black/40">{essay.date}</span>
                </div>
                <p className="text-base text-black/60 leading-relaxed">
                  {essay.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Substack Subscribe */}
        <div className="pt-12 border-t border-black/10">
          <h3 className="text-2xl font-semibold mb-4">Subscribe</h3>
          <p className="text-base text-black/60 mb-6 leading-relaxed">
            used to study cancer cells. now i study humans. went from pipettes to policy, 
            lab coats to life philosophy. turns out people are way more complex than tumors 
            (& sometimes just as destructive). currently avoiding my own advice while writing about it.
          </p>
          
          {/* Substack Custom Embed */}
          <form
            action="https://anmolrathi4.substack.com/api/v1/free?nojs=true"
            method="post"
            target="_blank"
            className="space-y-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

