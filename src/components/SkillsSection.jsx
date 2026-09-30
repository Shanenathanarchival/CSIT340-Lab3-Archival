import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
    return(
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
        <SectionHeading title="Skills" subtitle="What I work with." />
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-stone-500">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">HTML</span>
            <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">CSS</span>
            <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">JavaScript</span>
            <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">Java</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Frameworks</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">React</span>
            <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">Tailwind CSS</span>
            <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">Bootstrap</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Tools</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <span class="rounded-full border border-stone-300 px-3 py-1 text-sm">Git</span>
            <span class="rounded-full border border-stone-300 px-3 py-1 text-sm">VS Code</span>
            <span class="rounded-full border border-stone-300 px-3 py-1 text-sm">MySQL</span>
            <span class="rounded-full border border-stone-300 px-3 py-1 text-sm">Figma</span>
          </div>
        </div>
      </div>
    </section>
    );
}