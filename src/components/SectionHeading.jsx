export default function SectionHeading({ title, subtitle }) { //h2 & p
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-stone-600">{subtitle}</p>
    </div>
  );
}