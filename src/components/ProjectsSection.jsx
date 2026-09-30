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
          <a href="https://github.com/juandelacruz/CSIT340-Lab1-DelaCruz" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
        </article>
        <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2025</p>
          <h3 className="mt-2 text-lg font-semibold">Canteen Queue</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">A page that shows how long the canteen line is so students can decide when to go.</p>
          <p className="mt-4 text-sm text-stone-500">HTML · CSS · JavaScript</p>
          <a href="https://github.com/juandelacruz/canteen-queue" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
        </article>
        <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2025</p>
          <h3 className="mt-2 text-lg font-semibold">Clinic Records</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">A desktop app for our database class that keeps visit records for a small clinic.</p>
          <p className="mt-4 text-sm text-stone-500">Java · MySQL</p>
          <a href="https://github.com/juandelacruz/clinic-records" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
        </article>
        <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2024</p>
          <h3 className="mt-2 text-lg font-semibold">Org Event Page</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">A one-page site for our org's freshman orientation, with the schedule and venue.</p>
          <p className="mt-4 text-sm text-stone-500">HTML · Bootstrap</p>
          <a href="https://github.com/juandelacruz/org-event-page" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
        </article>
      </div>
    </section>
    );
}