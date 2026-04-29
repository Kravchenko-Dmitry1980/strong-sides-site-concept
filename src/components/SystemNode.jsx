export default function SystemNode({ label, active = false }) {
  return (
    <div className={`system-node ${active ? "is-active" : ""}`}>
      <span className="system-node__dot" />
      <p>{label}</p>
    </div>
  );
}
