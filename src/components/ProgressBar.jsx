export default function ProgressBar({ progress }) {
  return (
    <div className="card__progress">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}
