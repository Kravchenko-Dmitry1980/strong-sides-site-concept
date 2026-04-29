export default function ProductOfferCard({ title, description, cta }) {
  return (
    <article className="product-offer-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <button type="button">{cta}</button>
    </article>
  );
}
