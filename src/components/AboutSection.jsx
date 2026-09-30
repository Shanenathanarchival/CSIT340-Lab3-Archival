import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading h2_text="About" p_text="A little about who I am."/>
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Talisay and moved to Cebu City for college. I picked IT because I
        wanted to build things people actually open. So far my favorite part is the moment
        something finally runs.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div>
          <dt className="text-sm text-stone-500">Course</dt>
          <dd className="mt-1 font-medium">BS Information Technology</dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">Year level</dt>
          <dd className="mt-1 font-medium">Third year</dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">School</dt>
          <dd className="mt-1 font-medium">CIT-U</dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">Based in</dt>
          <dd className="mt-1 font-medium">Cebu City</dd>
        </div>
      </dl>
    </section>
  );
}