import SectionHeading from "./SectionHeading"; //title&subtitle
import NavLink from "./NavLink";

export default function ProjectsSection() {
    return(

    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built."/>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2026</p>
          <h3 className="mt-2 text-lg font-semibold">About Me in React</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">My first React project, rebuilt from a plain HTML page.</p>
          <p className="mt-4 text-sm text-stone-500">React · Tailwind CSS</p>
          <a href="https://github.com/Shanenathanarchival/CSIT340-Lab3-Archival.git" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
        </article>
        <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2025</p>
          <h3 className="mt-2 text-lg font-semibold">StudentExpenseTracker</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">The first time I ever did a project alone.</p>
          <p className="mt-4 text-sm text-stone-500">HTML · CSS · Kotlin · Java · JavaScript</p>
          <a href="https://github.com/Shanenathanarchival/IT342-Archival-StudentExpenseTracker.git" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
        </article>
        <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2025</p>
          <h3 className="mt-2 text-lg font-semibold">TaskIT</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">A desktop app for our database class that keeps visit records for a small clinic.</p>
          <p className="mt-4 text-sm text-stone-500">HTML · Python · CSS</p>
          <a href="https://github.com/Shanenathanarchival/CSIT327-G2-TaskIT.git" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
        </article>
      </div>
    </section>
    );
}