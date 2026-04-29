export default function SectionShell({ eyebrow, title, lead, children }) {
  return (
    <section className="section-shell">
      <header className="section-shell__header">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <p>{lead}</p>
      </header>
      {children}
    </section>
  );
}
