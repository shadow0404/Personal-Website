export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12">Get in touch</h2>
        <div className="space-y-8 text-base">
          <p className="text-black/70 leading-relaxed">
            Always open to conversations about policy research, social impact, start-ups, 
            or anything at the intersection of economics, business, and human welfare.
          </p>
          
          {/* Email */}
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <p className="text-sm text-black/50 mb-1">For policy work queries</p>
                <a
                  href="mailto:arathi@freopp.org"
                  className="text-black hover:opacity-60 transition-opacity"
                >
                  arathi@freopp.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <p className="text-sm text-black/50 mb-1">For start-ups and everything else</p>
                <a
                  href="mailto:anmolrathiedu@gmail.com"
                  className="text-black hover:opacity-60 transition-opacity"
                >
                  anmolrathiedu@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-black/10">
            <div className="flex flex-wrap gap-6">
              <a
                href="https://linkedin.com/in/anmol-rathi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/anmol__rathi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://anmolrathi4.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
                <span>Substack</span>
              </a>

              <a
                href="https://medium.com/@anmol-rathi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span>Medium</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
