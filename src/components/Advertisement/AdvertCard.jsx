import './AdvertCard.css';

export default function AdvertCard({ product }) {
    const { name, price, image, rating } = product;

    return (
        <article className="advert-card">
            <div className="img-wrap">
                <img src={image} alt={name} loading="lazy" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <div className="meta">
                    <span className="price">₹{price}</span>
                    <span className="rating">⭐ {rating}</span>
                </div>
            </div>
        </article>
    );
}
