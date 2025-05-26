import React from 'react';

export default function Card({ pp }) {
    const {
        name,
        origin,
        color,
        isSpecial,
        isNatural,
        rating,
        numberOfLike,
        category,
        image
    } = pp;

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img
                src={image}
                className="card-img-top"
                alt={name}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    <strong>Origin:</strong> {origin}<br />
                    <strong>Color:</strong> {color}<br />
                    <strong>Category:</strong> {category}<br />
                    <strong>Special:</strong> {isSpecial ? 'Yes' : 'No'}<br />
                    <strong>Natural:</strong> {isNatural ? 'Yes' : 'No'}<br />
                    <strong>Rating:</strong> {'⭐'.repeat(rating)}<br />
                    <strong>Likes:</strong> {numberOfLike}
                </p>
                <a href="#" className="btn btn-primary">
                    Details
                </a>
            </div>
        </div>
    );
}
