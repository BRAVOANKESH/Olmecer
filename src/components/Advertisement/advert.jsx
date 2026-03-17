import './advert.css';
import AdvertCard from './AdvertCard';
import products from '../../data/products.json';

export default function Advertisement() {
    // sort by price asc and take 4 lowest-priced products
    const lowest = [...products].sort((a, b) => a.price - b.price).slice(0, 4);

    return (
        <section className="advertisement">
            <div className="advert-header">
                <h3>Limited-time Picks</h3>
                <p className="sub">Hand-picked low-price deals for you</p>
            </div>

            <div className="advert-grid">
                {lowest.map((p) => (
                    <AdvertCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}