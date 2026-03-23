import React from 'react';

const Gallery = () => {
    const images = [
        '/images/hero.png',
        '/images/about.png',
        '/images/hero.png',
        '/images/about.png',
        '/images/hero.png',
        '/images/about.png',
    ];

    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Life at <span className="text-secondary">SMR</span></h1>
                    <p className="hero-description mx-auto">Take a glimpse into our active campus life, modern facilities, and clinical training sessions.</p>
                </div>
            </div>

            <section className="section pt-3">
                <div className="container">
                    <div className="grid grid-3">
                        {images.map((imgSrc, index) => (
                            <div key={index} style={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow)',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img
                                    src={imgSrc}
                                    alt={`Gallery Image ${index + 1}`}
                                    style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
