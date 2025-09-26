import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Instagram } from "lucide-react";
import IMG from '../src/images/home-img.jpg'



const PHOTO_URL = IMG
   

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "About Me" },
  { id: "about", label: "Skills   " },
  // { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const slideVariants = {
  initial: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: (direction) => ({ x: direction < 0 ? 60 : -60, opacity: 0, transition: { duration: 0.35 } }),
};

export default function PortfolioSPA() {
  const [active, setActive] = useState("home");
  const [history, setHistory] = useState(["home"]);

  const direction = useMemo(() => {
    // Positive when moving forward in SECTIONS order; negative when moving back
    const lastTwo = history.slice(-2);
    if (lastTwo.length < 2) return 1;
    const a = SECTIONS.findIndex((s) => s.id === lastTwo[0]);
    const b = SECTIONS.findIndex((s) => s.id === lastTwo[1]);
    return b > a ? 1 : -1;
  }, [history]);

  const go = (id) => {
    if (id === active) return;
    setActive(id);
    setHistory((h) => [...h, id]);
  };

  return (
    <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden bg-stone-100 text-stone-900">
{/* Top nav */}
          <nav className="flex justify-self-end fixed z-100 backdrop-blur-2xl bg-amber-50/40 shadow-xl  min-w-full justify-between px-4 md:px-8 py-4 border-b border-stone-200">
            <div className=" transition duration-300   hover:cursor-pointer hidden md:block">
            <h2 className="text-2xl font-semibold tracking-tight ">Leo Christian</h2>
            {/* <p className="text-sm mt-1 text-stone-700 ">Software Developer · Kigali, Rwanda</p> */}
          </div>
            <ul className="flex  justify-self-end gap-2 md:gap-4 text-sm md:text-[15px]">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className={`px-4 py-2  rounded-xl transition-all hover:bg-stone-100 active:scale-[0.98] cursor-pointer ${
                      active === s.id
                        ? "bg-stone-900 text-white hover:text-stone-700"
                        : "text-stone-700"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

      {/* Shell */}
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-[1fr_1.6fr] ">

        {/* Left fixed photo / identity */}
        <aside className="relative hidden md:flex items-center justify-center overflow-hidden border-r border-stone-200 bg-stone-900">
          <img
            src={PHOTO_URL}
            alt="Leo Christian"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          

        </aside>
        {/* Right panel: nav + animated section */}
        <main className="relative flex flex-col h-full ">
          
          {/* Section viewport (no scrolling) */}
          <section className="relative flex-1 overflow-hidden p-5 md:p-8">
            <div className="h-11/12 mt-14 w-full rounded-3xl border border-stone-200 bg-white shadow-sm p-5 md:p-8">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  variants={slideVariants}
                  custom={direction}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="h-full"
                >
                  {active === "home" && <Home go={go} />}
                  {active === "about" && <About />}
                  {active === "experience" && <Experience />}
                  {active === "education" && <Education />}
                  {active === "projects" && <Projects />}
                  {active === "contact" && <Contact />}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// ---------------- Sections ---------------- //

function Home({ go }) {
  return (
    <div className="h-full flex flex-col items-center  justify-center text-center ">
       <div className=" bg-[url('../src/images/home-img.Jpg')] bg-cover md:hidden w-30 h-30 shadow-xl border-4 border-emerald-600 rounded-full"></div>
      <p className="uppercase tracking-widest text-xs text-stone-500">Welcome to my portfolio</p>
      <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
        Hello, I am <span className="text-stone-900">Leo Christian</span>
      </h1>
      <p className="mt-4 max-w-xl text-stone-700">
        Looking for opportunities to collaborate and contribute to exciting projects. Thrilled to be part of
        Rwanda's growing tech scene and contribute to its development.
      </p>
      <div className="mt-8 flex gap-3">
        <button onClick={() => go("about")} className="px-5 py-3 rounded-xl bg-stone-900 text-white">
          Get Started
        </button>
        <button onClick={() => go("projects")} className="px-5 py-3 rounded-xl border border-stone-300">
          See Projects
        </button>
      </div>
    </div>
  );
}

function About() {
  const skills = [
    { name: "HTML", icon: "lab la-html5" },
    { name: "CSS", icon: "lab la-css3" },
    { name: "JavaScript", icon: "lab la-js" },
    { name: "Node.js", icon: "lab la-node-js" },
    { name: "Vue.js", icon: "lab la-vuejs" },
    { name: "PHP", icon: "lab la-php" },
    { name: "Laravel", icon: "lab la-laravel" },
    { name: "Flutter", icon: "las la-gem" },
    { name: "Python", icon: "lab la-python" },
    { name: "Web3", icon: "lab la-ethereum" },
    { name: "MySQL", icon: "las la-database" },
    { name: "MongoDB", icon: "las la-leaf" },
    { name: "Linux", icon: "lab la-linux" },
    { name: "React", icon: "lab la-react" },
    // { name: "flask", icon: "las " },
    { name: "ML/AI", icon: "las la-project-diagram" },
    { name: "Git", icon: "lab la-git-alt" },
    { name: "Java", icon: "lab la-java" },
  ];

  return (
    <div className="h-full flex flex-col">
      <header>
        <h2 className="text-2xl md:text-3xl font-semibold">My Skills</h2>
        <p className="text-stone-600">Backend | Frontend | CyberSecurity</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 mt-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="rounded-xl cursor-pointer border border-stone-200 p-1 flex flex-col items-center hover:shadow-sm transition bg-stone-50"
          >
            <i className={skill.icon} aria-label={skill.name} style={{ fontSize: "2rem" }} />
            <span className=" text-sm  font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-4 cursor-pointer">
        <ServiceCard title="Interface Design" subtitle="Web|Mobile|Marketing">
          Creating designs that reflect your brand identity and goals.
        </ServiceCard>
        <ServiceCard title="CyberSecurity" subtitle="Offensive|Defensive">
          Pentesting and threat intelligence, mitigation, and response.
        </ServiceCard>
        <ServiceCard title="Mobile Apps" subtitle="Frontend|Backend">
          Building Flutter-based UI and APIs for mobile experiences.
        </ServiceCard>
        <ServiceCard title="Coding" subtitle="Frontend|Backend">
          Turning ideas into functional digital products for businesses and individuals.
        </ServiceCard>
      </div>
    </div>
  );
}

function ServiceCard({ title, subtitle, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 p-5 bg-white shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-stone-600">{subtitle}</p>
      <p className="mt-2 text-sm text-stone-700">{children}</p>
    </div>
  );
}

function Experience() {
  return (
    <>
    <div className="mb-2 flex flex-col">
      <header>
        <h2 className="text-2xl md:text-3xl ml-2 font-semibold">My Education</h2>
      </header>

      <div className="mt-6 grid gap-4">
        <EducationItem
          title="Advanced Diploma in Software Development"
          period="Sept 2022 – Jul 2025"
          desc="Rwanda TVET Board — Frontend · Backend · ML · DevOps"
        />
        <EducationItem
          title="Advanced Diploma in CyberSecurity"
          period="Jul 2025 – Present"
          desc="MINICT Digital Talent Program — Incident Response · Offensive · Defensive Security"
        />
      </div>
    </div>
    <div className="h-full flex flex-col">
      <header className="ml-2 ">
        <h2 className="text-2xl md:text-3xl  font-semibold">My Experiences</h2>
        <p className="text-stone-600">Previous companies and my tasks</p>
      </header>

      <div className="mt-6 grid gap-4">
        <ExperienceItem
          role=" Developer Intern"
          year="2024"
          org="MINECOFIN — Integrated Financial Management Systems"
        />
        <ExperienceItem
          role=" Developer Intern"
          year="2025"
          org="SALTEL — Software Design & Development"
          />
      </div>
    </div>
          </>
  );
}

function ExperienceItem({ role, year, org }) {
  return (
    <>
    
    <div className="rounded-2xl border border-stone-200 p-5 bg-stone-50">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{role}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-stone-900 text-white">{year}</span>
      </div>
      <p className="text-sm mt-2 text-stone-700">{org}</p>
    </div>
    </>
  );
}

function Education() {
  return (
    <div className="h-full flex flex-col">
      <header>
        <h2 className="text-2xl md:text-3xl font-semibold">My Education</h2>
      </header>

      <div className="mt-6 grid gap-4">
        <EducationItem
          title="Advanced Diploma in Software Development"
          period="Sept 2022 – Jul 2025"
          desc="Rwanda TVET Board — Frontend · Backend · ML · DevOps"
        />
        <EducationItem
          title="Advanced Diploma in CyberSecurity"
          period="Jul 2025 – Present"
          desc="MINICT Digital Talent Program — Incident Response · Offensive · Defensive Security"
        />
      </div>
    </div>
  );
}

function EducationItem({ title, period, desc }) {
  return (
    <div className="rounded-2xl border border-stone-200 p-5 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-stone-900 text-white">{period}</span>
      </div>
      <p className="text-sm mt-2 text-stone-700">{desc}</p>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      name: "Soma Online School (UI/UX)",
      summary: " Sickness or vacation? Keep learning! Soma was designed to help you stay on track with your studies, providing resources for when you're at home (unwell or on break)",
      link: "https://www.figma.com/proto/oa0B0kTn2GJblyHrRxtBf9/Untitled?node-id=0-1&p=f&t=Aso55ikrIFudVf7T-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
    },
    {
      name: "Vistors Management System (VMS)  UI/UX",
      summary: " Allows user to track vistors and visted individuals on visiting days, it can be used in schools,Hospitals, correctional facilities and others.",
      link: "https://www.figma.com/proto/rUUxSGQEY2L5mEgOZm6ytA/VMS?node-id=0-1&p=f&t=6gukULwD8PEOnwnc-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A2",
    },
    {
      name: "Digital Portfolio Management system ",
      summary: " vue-js based Digital Portfolio management System is a software application that helps TVET schools to manage to manage students portfolio data by making them accessible anytime anywhere.",
      link: "https://github.com/namahoroleochristian/learners-portfolio-solution",
    },
    {
      name: "Tax Management System ",
      summary: "Mobile first cross platform made to enable business owners to calculate their taxes automatically from sales made and generate reports and statstics.Made with REST API using Nodejs and mongoDB for database UI with Google's Flutter framework",
      link: "https://github.com/namahoroleochristian/mobile_shop_tax_manager",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <header>
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <p className="text-stone-600">Selected work and experiments Click to visit project</p>
      </header>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            className="rounded-2xl border border-stone-200 p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-stone-700 mt-2">{p.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="h-full grid grid-rows-[1fr_auto] gap-6 ">
      <div className=" ml-14 max-w-xl">
        <h2 className="text-2xl text-center md:text-3xl font-semibold">Get in touch</h2>
        <form className="mt-4 grid gap-3 ">
          <input className="h-11 rounded-xl border border-stone-300 px-4" placeholder="Your Name" />
          <input className="h-11 rounded-xl border border-stone-300 px-4" placeholder="Your Email" type="email" />
          <textarea className="min-h-[120px] rounded-xl border border-stone-300 p-4" placeholder="Write your message…" />
          <button type="button" className="h-11 cursor-pointer rounded-xl bg-stone-900 text-white px-6 hover:text-stone-900 hover:bg-white border hover:border-bg-stone-900 transition duration-300">Send</button>
        </form>
      </div>

      <footer className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-stone-200">
        <div>
          <p className="text-sm">Kigali, Rwanda</p>
          <div className="text-sm text-stone-700 flex items-center gap-3 mt-2">
            <span className="inline-flex items-center gap-2"><Phone size={16}/> +250 794-377-377</span>
            <a className="inline-flex items-center gap-2 hover:underline" href="mailto:leonamahoro1@gmail.com"><Mail size={16}/> leonamahoro1@gmail.com</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="Email" href="mailto:leonamahoro1@gmail.com" className="p-2 rounded-xl border border-stone-300"><Mail size={18}/></a>
          <a aria-label="GitHub" href="https://github.com/namahoroleochristian" className="p-2 rounded-xl border border-stone-300"><Github size={18}/></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/christian-leo-a21448317/" className="p-2 rounded-xl border border-stone-300"><Linkedin size={18}/></a>
          <a aria-label="Instagram" href="https://www.instagram.com/christian_namahoro/" className="p-2 rounded-xl border border-stone-300"><Instagram size={18}/></a>
        </div>
        <p className="text-xs text-stone-500">© {new Date().getFullYear()} christian_namahoro</p>
      </footer>
    </div>
  );
}
