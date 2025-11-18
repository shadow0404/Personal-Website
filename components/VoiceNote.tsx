export default function VoiceNote() {
  return (
    <section className="voice-note-section py-32 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12">Listen</h2>
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-white/70">
            Sometimes writing isn't enough. Here's what I'm thinking about right now.
          </p>
          
          {/* Voice Note Player Placeholder */}
          <div className="bg-white/5 p-8 border border-white/10">
            <div className="flex items-center gap-6">
              {/* Play Button Placeholder */}
              <button className="w-16 h-16 flex items-center justify-center bg-white text-black hover:bg-white/90 transition-colors">
                <svg
                  className="w-6 h-6 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              
              {/* Waveform Placeholder */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-1 h-12">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white/20 hover:bg-white/40 transition-colors"
                      style={{
                        height: `${Math.random() * 100}%`,
                        minHeight: '4px',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-white/50">
                  <span>0:00</span>
                  <span>Add your voice note here</span>
                  <span>2:34</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-white/50 italic">
            Replace this placeholder with your actual voice note file
          </p>
        </div>
      </div>
    </section>
  )
}

