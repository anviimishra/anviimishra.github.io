import { useState } from 'react';
import {
  Github, GraduationCap,
  ExternalLink, Code, Brain, Phone, Sun, Moon, Book,
  Briefcase, Calendar, ChevronRight, User, FolderOpen
} from 'lucide-react';


// ── DATA ──────────────────────────────────────────────────────────────────────

const experience = [
  { role: "Incoming Software Engineering Intern", company: "Google",                                    period: "May 2026 – Aug 2026",  stack: ["Golang", "Python", "Databases"],                          color: "blue"   },
  { role: "Software Engineering Intern",          company: "Ava Labs",                                  period: "Jun 2025 – Aug 2025",  stack: ["Golang", "Distributed Systems", "Performance Testing", "CI/CD"], color: "indigo" },
  { role: "Research Intern",                      company: "Sports Analytics Research Group",           period: "Aug 2025 – Dec 2025",  stack: ["Python", "LLM", "RAG", "AWS", "NLP"],                     color: "violet" },
  { role: "Research Intern",                      company: "Lab of Computational Sensing & Robotics",   period: "Oct 2024 – Present",   stack: ["Python", "ROS", "TypeScript", "React", "LLM"],            color: "cyan"   },
  { role: "Software Engineering Intern",          company: "UL Fire Safety Research Institute",         period: "Jun 2024 – Aug 2024",  stack: ["Python", "Flask", "React", "Concurrency"],                color: "sky"    },
];

const leadership = [
  {
    role: "Vice Chair",
    org: "Women in Computer Science",
    period: "May 2024 – Present",
    desc: "Oversee sponsorships with Jane Street and Bloomberg, lead technical workshops, and manage a semester-long mentorship program.",
    icon: User,
  },
  {
    role: "Lead Teaching Assistant",
    org: "JHU Computer Science Department",
    period: "Aug 2024 – Present",
    desc: "Run weekly sections and office hours for Algorithms and Discrete Mathematics, supporting 300+ students.",
    icon: GraduationCap,
  },
];

const projects = [
  { title: "Plate-Pal",              description: "An ML-powered food tracking and nutrition assistant.",                                             tech: ["React", "Node", "Generative AI", "MySQL"],                  github: "https://devpost.com/software/plate-pal",                          icon: Book        },
  { title: "Interview Wizard",       description: "ML-powered interview prep tool with real-time feedback.",                                          tech: ["Python", "Machine Learning", "Computer Vision", "Django"],   github: "https://devpost.com/software/interview-wizard",                   icon: Book        },
  { title: "DocVigilance",           description: "ML monitoring system for patient safety protocol compliance.",                                     tech: ["Python", "Machine Learning", "Computer Vision"],             github: "https://devpost.com/software/doctorvigilance",                    icon: Brain       },
  { title: "ADHD Voice Assistant",   description: "Browser-based study assistant with Google Calendar integration for focus and task management.",    tech: ["JavaScript", "Web Speech API", "Google Calendar API"],       github: "https://github.com/anviimishra/adhd-voice-assistant",             icon: Phone       },
  { title: "Visionary",              description: "Vision Aid gloves with Google Maps integration built with Arduino for the visually impaired.",     tech: ["Arduino", "Google Maps API", "Hardware"],                    github: "https://github.com/candpixie/visionary",                          icon: Code        },
  { title: "TerraVision",            description: "Visually analyze your soil and get AI-powered recommendations for crops and soil health.",         tech: ["Computer Vision", "Python", "ML"],                           github: "https://github.com/tranade/TerraVisionTechnologies",              icon: ExternalLink},
];

const colorMap: Record<string, { dot: string; tag: string; tagDark: string }> = {
  blue:   { dot: 'bg-violet-600',   tag: 'bg-violet-50 text-violet-700 border-violet-100',   tagDark: 'bg-violet-900/40 text-violet-300 border-violet-800'   },
  indigo: { dot: 'bg-indigo-600', tag: 'bg-indigo-50 text-indigo-700 border-indigo-100', tagDark: 'bg-indigo-900/40 text-indigo-300 border-indigo-800' },
  violet: { dot: 'bg-violet-600', tag: 'bg-violet-50 text-violet-700 border-violet-100', tagDark: 'bg-violet-900/40 text-violet-300 border-violet-800' },
  cyan:   { dot: 'bg-cyan-600',   tag: 'bg-cyan-50 text-cyan-700 border-cyan-100',   tagDark: 'bg-cyan-900/40 text-cyan-300 border-cyan-800'   },
  sky:    { dot: 'bg-violet-600',    tag: 'bg-violet-50 text-violet-700 border-violet-100',      tagDark: 'bg-violet-900/40 text-violet-300 border-violet-800'      },
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────

const BlobBg = ({ dm }: { dm: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="blob1 absolute top-[15%]  left-[20%]  w-[480px] h-[480px] rounded-full bg-pink-400    blur-[90px]"  />
    <div className="blob2 absolute top-[30%]  right-[15%] w-[420px] h-[420px] rounded-full bg-purple-500  blur-[100px]" />
    <div className="blob3 absolute bottom-[10%] left-[35%] w-[380px] h-[380px] rounded-full bg-fuchsia-400 blur-[80px]"  />
    <div className="blob4 absolute top-[5%]   right-[30%] w-[320px] h-[320px] rounded-full bg-violet-400  blur-[110px]" />
    <div className={`absolute inset-0 ${dm ? 'bg-slate-950/60' : 'bg-white/50'} backdrop-blur-[2px]`} />
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);


  const nav = [
    { id: 'home',       icon: User,       label: 'Home'       },
    { id: 'experience', icon: Briefcase,  label: 'Experience' },
    { id: 'projects',   icon: FolderOpen, label: 'Projects'   },  ];

  const dm = isDarkMode;
  const bg      = dm ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900';
  const muted   = dm ? 'text-slate-400' : 'text-slate-500';
  const card    = dm ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bg}`}>

      {/* ── TOP BAR ──────────────────────────────────────────────────────────── */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md border-b ${
        dm ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-100'
      }`}>
        <span className="font-bold text-lg tracking-tight">
          Anvii Mishra
        </span>
        <div className="flex items-center gap-1">
          {nav.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === id
                  ? 'bg-violet-600 text-white'
                  : dm ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => setIsDarkMode(!dm)}
            className={`ml-2 p-2 rounded-lg border transition-all ${
              dm ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'
            }`}
          >
            {dm ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-slate-500" />}
          </button>
        </div>
      </div>

      {/* ── HOME ─────────────────────────────────────────────────────────────── */}
      <section className={`min-h-screen pt-16 ${activeSection === 'home' ? 'flex' : 'hidden'} flex-col`}>

        {/* Hero tinted glass bg */}
        <div className="relative flex-1 flex items-center overflow-hidden">
          <BlobBg dm={dm} />

          <div className="container mx-auto px-8 max-w-5xl py-24 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>

                <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6 tracking-tight">
                  Anvii<br />
                  Mishra
                </h1>

                <p className={`text-lg leading-relaxed mb-8 max-w-md ${muted}`}>
                  CS &amp; Cognitive Science student at Johns Hopkins, passionate about distributed systems, machine learning, and building software at scale.
                </p>

                <div className="flex flex-wrap gap-3">

                  <button
                    onClick={() => setActiveSection('experience')}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium border text-sm transition-all hover:scale-105 ${
                      dm ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    View Experience <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Right — info cards */}
              <div className="space-y-4">
                <div className={`p-6 rounded-2xl border ${card} shadow-sm`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-violet-600">
                      <GraduationCap size={16} className="text-white" />
                    </div>
                    <span className="font-semibold">Education</span>
                  </div>
                  <p className="font-bold">Johns Hopkins University</p>
                  <p className={`text-sm ${muted}`}>BS Computer Science &amp; Cognitive Science · GPA 3.95</p>
                  <p className={`text-sm ${muted}`}>MS Computer Science Engineering · 2027</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Dean's List", "Provost Award", "HackPrinceton 2024", "HopHacks 2023"].map(a => (
                      <span key={a} className={`px-2 py-0.5 rounded-md text-xs border ${
                        dm ? 'bg-violet-900/30 border-violet-800 text-violet-300' : 'bg-violet-50 border-violet-100 text-violet-700'
                      }`}>{a}</span>
                    ))}
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border ${card} shadow-sm`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-600">
                      <Code size={16} className="text-white" />
                    </div>
                    <span className="font-semibold">Technical Skills</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Languages", skills: "Python · Golang · C++ · TypeScript · SQL · Kotlin · C" },
                      { label: "Frameworks", skills: "React · Next · Django · Flask · FastAPI · ROS"    },
                      { label: "Tools",      skills: "Docker · Kubernetes · AWS · Redis · PostgreSQL"   },
                    ].map(row => (
                      <div key={row.label} className="flex gap-2 text-sm">
                        <span className={`shrink-0 font-medium w-24 ${dm ? 'text-slate-300' : 'text-slate-700'}`}>{row.label}</span>
                        <span className={muted}>{row.skills}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────────── */}
      <section className={`min-h-screen pt-24 pb-20 relative overflow-hidden ${activeSection === 'experience' ? 'block' : 'hidden'}`}>
        <BlobBg dm={dm} />
        <div className="container mx-auto px-8 max-w-3xl relative z-10">

          <div className="mb-12">
            <p className={`text-sm tracking-widest uppercase font-medium mb-2 ${muted}`}>Career</p>
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-dashed border-violet-200 dark:border-violet-900 space-y-10">
            {experience.map((job, i) => {
              const c = colorMap[job.color];
              return (
                <div key={i} className="relative">
                  <div className={`absolute -left-[41px] top-5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 ${c.dot} shadow-md`} />
                  <div className={`p-6 rounded-2xl border ${card} shadow-sm hover:shadow-md transition-shadow`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-bold leading-tight">{job.role}</h3>
                        <p className="text-violet-600 font-semibold text-sm">{job.company}</p>
                      </div>
                      <div className={`text-xs text-right ${muted}`}>
                        <div className="flex items-center gap-1 justify-end">
                          <Calendar size={11} />{job.period}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.stack.map(s => (
                        <span key={s} className={`px-2 py-0.5 rounded-md text-xs border ${dm ? c.tagDark : c.tag}`}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {leadership.map((l, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-violet-600 shadow-md" />
                <div className={`p-6 rounded-2xl border ${card} shadow-sm hover:shadow-md transition-shadow`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold leading-tight">{l.role}</h3>
                      <p className="text-violet-600 font-semibold text-sm">{l.org}</p>
                    </div>
                    <div className={`text-xs text-right ${muted}`}>
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar size={11} />{l.period}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────────── */}
      <section className={`min-h-screen pt-24 pb-20 relative overflow-hidden ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
        <BlobBg dm={dm} />
        <div className="container mx-auto px-8 max-w-5xl relative z-10">

          <div className="mb-12">
            <p className={`text-sm tracking-widest uppercase font-medium mb-2 ${muted}`}>Work</p>
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className={`group p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 ${card} ${
                    hoveredProject === i ? (dm ? 'border-violet-700' : 'border-violet-300') : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all ${dm ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                  <h3 className="font-bold text-base mb-2">{p.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${muted}`}>{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t, j) => (
                      <span key={j} className={`px-2 py-0.5 rounded-md text-xs border ${
                        dm ? 'bg-violet-900/30 border-violet-800 text-violet-300' : 'bg-violet-50 border-violet-100 text-violet-700'
                      }`}>{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



    </div>
  );
}
