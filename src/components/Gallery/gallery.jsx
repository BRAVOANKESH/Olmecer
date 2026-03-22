import React from 'react';
import './gallery.css'; 

const Gallery = () => {
    // I added 'spanClass' to your data to create the uneven, premium Bento Box layout
    const galleryItems = [
        {
            "id": 1,
            "name": "Dark Chocolate Delight",
            "price": 199,
            "image": "https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=800&auto=format&fit=crop",
            "rating": 4.5,
            "spanClass": "olm-gal-large" // Takes up 2x2 space
        },
        {
            "id": 2,
            "name": "Milk Chocolate Bliss",
            "price": 149,
            "image": "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop",
            "rating": 4.2,
            "spanClass": "olm-gal-standard" 
        },
        {
            "id": 3,
            "name": "Hazelnut Crunch",
            "price": 249,
            "image": "https://images.unsplash.com/photo-1610450949065-1f2841536c88?q=80&w=800&auto=format&fit=crop",
            "rating": 4.8,
            "spanClass": "olm-gal-tall" // Takes up vertical space
        },
        {
            "id": 4,
            "name": "Caramel Fusion",
            "price": 229,
            "image": "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop",
            "rating": 4.3,
            "spanClass": "olm-gal-wide" // Takes up horizontal space
        },
        {
            "id": 5,
            "name": "Holi Special Mix",
            "price": 229,
            "image": "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop",
            "rating": 4.3,
            "spanClass": "olm-gal-standard"
        },
        {
            "id": 6,
            "name": "Heel",
            "price": 229,
            "image": "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop",
            "rating": 4.3,
            "spanClass": "olm-gal-tall"
        },
        {
            "id": 7,
            "name": "Dark Chocolate Delight",
            "price": 199,
            "image": "https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=800&auto=format&fit=crop",
            "rating": 4.5,
            "spanClass": "olm-gal-standard"
        },
        {
            "id": 8,
            "name": "Milk Chocolate Bliss",
            "price": 149,
            "image": "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop",
            "rating": 4.2,
            "spanClass": "olm-gal-wide"
        }
    ];

    return (
        <section className="olm-gal-section" id="collections">
            <div className="olm-gal-container">
                
                <div className="olm-gal-header">
                    <h2>The Olmecer <span className="olm-gal-highlight">Experience</span></h2>
                    <p>Crafted with passion. Designed for the senses.</p>
                </div>

                <div className="olm-gal-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className={`olm-gal-item ${item.spanClass ?? ''}`}>
                            <img src={item.image} alt={item.name} className="olm-gal-image" />
                            
                            {/* Glassmorphism Hover Overlay */}
                            {/* <div className="olm-gal-overlay">
                                <div className="olm-gal-glass-card">
                                    <h3 className="olm-gal-title">{item.name}</h3>
                                    <div className="olm-gal-details">
                                        <span className="olm-gal-price">₹{item.price}</span>
                                        <span className="olm-gal-rating">★ {item.rating}</span>
                                    </div>
                                </div>
                            </div> */}
                            
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Gallery;