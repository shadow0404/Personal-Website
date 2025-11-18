import Link from "next/link"

const bucketList = [
  { text: "Skydive in Interlaken Switzerland", completed: false },
  { text: "Bungee Jump from Bloukrans Bridge", completed: false },
  { text: "Paragliding from Lion's Head", completed: false },
  { text: "Everest Basecamp Trek", completed: false },
  { text: "Sydney Harbor Bridge Climb", completed: true },
  { text: "Host a DJ Party", completed: false },
  { text: "Do Vipassana in Jaipur or Dharmshala", completed: false },
  { text: "Start The Guerbois Project", completed: false },
  { text: "Hike to Everest Base Camp Trek", completed: false },
  { text: "Hike to Mount Kilimanjaro", completed: false },
  { text: "Start a School", completed: false },
  { text: "Have a Beach House in Sydney or Cape Town", completed: false },
  { text: "Scuba Dive in Great Barrier Reef", completed: false },
  { text: "Ride Shotover Jet in Queenstown", completed: false },
  { text: "Save a Rhino", completed: false },
  { text: "Visit 122 Countries (6 Done; 116 more to go)", completed: false },
  { text: "Live in a house with roommates from 10 different countries", completed: true },
  { text: "Meet Dalai Lama", completed: false },
  { text: "Become Monk for a Month", completed: false },
  { text: "Drive an RV across Europe", completed: false },
  { text: "Compete in a Professional PickleBall Competition", completed: false },
  { text: "Lunch with a Head of State", completed: false },
  { text: "Become an Adjunct Professor at a Top University", completed: false },
  { text: "Learn to Surf", completed: false },
  { text: "Take Parents on their first International Trip", completed: false },
  { text: "Write a Book", completed: false },
  { text: "Buy a House", completed: false },
  { text: "Line Dance in World's Biggest Honky Tonk", completed: true },
  { text: "Hitchhike Across Countries", completed: false },
  { text: "Go on an International Trip with Random Strangers", completed: false },
  { text: "Summit Mt Rinjani", completed: false },
]

export default function List100() {
  return (
    <main className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <nav className="max-w-3xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-base font-medium text-black hover:opacity-60 transition-opacity"
            >
              Anmol Rathi
            </Link>
            <Link
              href="/"
              className="text-sm text-black hover:opacity-60 transition-opacity"
            >
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-semibold tracking-tight mb-12 leading-tight">
            List 100
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-black/80 mb-16">
            <p>
              This bucket list was inspired by{" "}
              <a
                href="https://huyenchip.com/list-100/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:opacity-60 transition-opacity"
              >
                https://huyenchip.com/list-100/
              </a>
              {" "}— here&apos;s my shot at 100 things I want to do before I die.
            </p>
            <p>
              I&apos;m young and still figuring out life, so this list will keep growing 
              as I discover more of what I want to experience.
            </p>
          </div>

          <h2 className="text-3xl font-semibold mb-12 tracking-tight">
            Things I want to do before I die.
          </h2>

          <div className="space-y-4">
            {bucketList.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 py-3 border-b border-black/5 hover:border-black/20 transition-colors group ${
                  item.completed ? 'opacity-50' : ''
                }`}
              >
                <span className={`font-medium min-w-[3rem] transition-colors ${
                  item.completed 
                    ? 'text-black/30 line-through' 
                    : 'text-black/40 group-hover:text-black/60'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`transition-colors ${
                  item.completed 
                    ? 'text-black/40 line-through' 
                    : 'text-black/70 group-hover:text-black'
                }`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-black/10 text-center">
            <Link
              href="/"
              className="text-black/60 hover:text-black transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

