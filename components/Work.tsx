"use client"

import { useState } from "react"
import Image from "next/image"

type WorkItem = {
  id: number
  title: string
  fullTitle: string
  subtitle?: string
  role: string
  location: string
  year: string
  description: string
  color: string
  icon: React.ReactElement
}

const policyWork: WorkItem[] = [
  {
    id: 1,
    title: "The Foundation for Research on Equal Opportunity",
    fullTitle: "Foundation for Research on Equal Opportunity",
    role: "Visiting Fellow & Research Analyst",
    location: "Washington D.C",
    year: "2024—Present",
    description: "Acting as the organization's 'Tariff Guy.' Analyzing how trade policy actually affects real communities—which factories close, which towns die. Worked with Avik Roy to grow the World Index of Healthcare Innovation's media reach by 30%. Research on higher education, social welfare, central bank digital currencies. The work is fine. The coffee chats are better.",
    color: "bg-[#1e3a5f]",
    icon: (
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg className="w-14 h-14" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="14" fill="none"/>
          <rect x="55" y="72" width="90" height="18" fill="#d4862f"/>
          <rect x="55" y="110" width="90" height="18" fill="#d4862f"/>
        </svg>
      </div>
    ),
  },
  {
    id: 2,
    title: "Off the Battlefield",
    fullTitle: "Off the Battlefield Foundation",
    role: "Co-Founder & Head of Operations",
    location: "Washington D.C",
    year: "2023—Present",
    description: "Started a 501(c)3 to support Ukrainian veterans with mental health challenges. Built a companionship program pairing 40 US students with veterans. 85% satisfaction rate. Reduced isolation by 40%. Sometimes the best policy is just being there for someone. Not sure if this is my thing long-term, but it matters right now.",
    color: "bg-[#4E944C]",
    icon: (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden">
        <Image 
          src="/off_the_battlefield_foundation_logo.png" 
          alt="Off the Battlefield Logo" 
          width={110} 
          height={80}
          className="scale-150
        "
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Surplus People Project",
    fullTitle: "Surplus People Project",
    role: "Policy Consultant",
    location: "Cape Town, South Africa",
    year: "2024",
    description: "Allocated €500K in German government funding. Designed a 10-month fellowship for land rights and agroecology. Secured $20K from ProVeg. The work was fine. But Cape Town changed me—learned to swim in the ocean, played tennis, stopped optimizing for the future. Peak happiness was conquering my biggest fear in cold water at Camps Bay.",
    color: "bg-black/70",
    icon: (
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image 
          src="/image.png" 
          alt="Surplus People Project Logo" 
          fill
          className="object-cover scale-110"
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Girringun",
    fullTitle: "Girringun Aboriginal Corporation",
    role: "Policy Consultant",
    location: "Queensland, Australia",
    year: "2024",
    description: "Developed a 10-year land management plan for 5,000+ hectares. Advised on investment strategy projecting 20% growth. Ran 40 workshops on financial literacy. Lived with Aboriginal communities in Northern Queensland. Learned more from listening to people's stories than from any policy textbook.",
    color: "bg-black/60",
    icon: (
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image 
          src="/image copy.png" 
          alt="Girringun Aboriginal Corporation Logo" 
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    id: 5,
    title: "Hoover",
    fullTitle: "Hoover Institute Summer Policy Bootcamp",
    subtitle: "Stanford University",
    role: "Participant",
    location: "Stanford, CA",
    year: "2023",
    description: "Immersive program with Condoleezza Rice, Scott Atlas, H.R. McMaster. Analyzed 7 key policy issues across healthcare, education, and environment. Received Honorable Distinction. Sometimes you learn more from being in the room than from any textbook.",
    color: "bg-black",
    icon: (
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image 
          src="/image copy 2.png" 
          alt="Stanford University Logo" 
          fill
          className="object-cover"
        />
      </div>
    ),
  },
]

const startups: WorkItem[] = [
  {
    id: 6,
    title: "Cancer-Ex",
    fullTitle: "Cancer-Ex",
    role: "Co-Founder",
    location: "New Delhi, India",
    year: "2018—2021",
    description: "At 16, built the world's first non-invasive pancreatic cancer test using saliva. $1.75 per test. Patented. Partnered with MD Anderson and UNC Cancer Center. Managed 25 researchers. Raised $80K from Nexus Venture. Won Bal Shakti Puraskar (India's highest civilian award for students, 1 in 5 million), Forbes Teenpreneurs, Regeneron ISEF Grand Award, Google Science Fair. Then I left it. I have this pattern.",
    color: "bg-white",
    icon: (
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image 
          src="/image copy 3.png" 
          alt="Cancer-Ex Logo" 
          fill
          className="object-cover scale-90"
        />
      </div>
    ),
  },
]

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const allWork = [...policyWork, ...startups]

  return (
    <section id="work" className="py-32 px-6 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-7xl font-semibold mb-6 tracking-tight">Work</h2>
          <p className="text-lg text-black/50 italic">Click to explore each journey</p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative py-20">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-black/10 -translate-y-1/2" />
          
          {/* Work items */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-16 md:gap-4 relative">
            {allWork.map((work, index) => (
              <div 
                key={work.id} 
                className="flex flex-col items-center relative"
              >
                {/* Info card - appears above circle */}
                <div className={`absolute ${
                  index % 2 === 0 
                    ? (work.id === 1 ? '-top-28' : '-top-20') 
                    : (work.id === 1 ? '-bottom-28' : '-bottom-20')
                } text-center transition-all duration-300 ${
                  hoveredId === work.id ? 'opacity-100 scale-105' : 'opacity-70'
                } ${work.id === 1 ? 'max-w-[180px]' : 'max-w-[140px]'}`}>
                  <div className="text-sm font-medium mb-1 leading-tight">{work.title}</div>
                  {work.subtitle && <div className="text-xs text-black/40 mb-1">{work.subtitle}</div>}
                  <div className="text-xs text-black/40">{work.year}</div>
                </div>

                {/* Circle with icon */}
                <button
                  onClick={() => setSelectedWork(work)}
                  onMouseEnter={() => setHoveredId(work.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative z-10 w-28 h-28 rounded-full ${work.color}
                    flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    ${hoveredId === work.id ? 'scale-110 shadow-2xl' : 'shadow-lg'}`}
                >
                  {work.icon}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section labels */}
        <div className="mt-20 flex justify-center gap-12 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black" />
            <span className="text-black/60">Policy & Research</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black/40" />
            <span className="text-black/60">Start-ups</span>
          </div>
        </div>
      </div>

      {/* Modal - Enhanced */}
      {selectedWork && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="bg-white max-w-3xl w-full p-12 relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative element */}
            <div className={`absolute top-0 left-0 w-2 h-full ${selectedWork.color}`} />

            {/* Close button */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-8 right-8 text-black/30 hover:text-black transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 ${selectedWork.color}`} />
                  <span className="text-sm font-medium text-black/40 tracking-wider uppercase">{selectedWork.year}</span>
                </div>
                <h3 className="text-5xl font-semibold tracking-tight leading-tight">{selectedWork.fullTitle}</h3>
                {selectedWork.subtitle && <p className="text-2xl text-black/50">{selectedWork.subtitle}</p>}
                <p className="text-xl text-black/60">{selectedWork.role}</p>
                <p className="text-base text-black/40">{selectedWork.location}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-black/10" />

              {/* Description */}
              <div>
                <p className="text-xl leading-relaxed text-black/70">
                  {selectedWork.description}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
