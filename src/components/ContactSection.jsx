import SectionHeading from "./SectionHeading";

export default function ContactSection() {
    return(
    <section id="contact" class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi."/>
      <ul class="mt-8 space-y-3">
        <li>
          <span class="inline-block w-24 text-sm text-stone-500">Email</span>
          <a href="mailto:juan.delacruz@cit.edu" class="font-medium hover:underline">juan.delacruz@cit.edu</a>
        </li>
        <li>
          <span class="inline-block w-24 text-sm text-stone-500">GitHub</span>
          <a href="https://github.com/juandelacruz" class="font-medium hover:underline">github.com/juandelacruz</a>
        </li>
        <li>
          <span class="inline-block w-24 text-sm text-stone-500">LinkedIn</span>
          <a href="https://linkedin.com/in/juandelacruz" class="font-medium hover:underline">linkedin.com/in/juandelacruz</a>
        </li>
      </ul>
    </section>
    );
}