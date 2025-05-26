import React from 'react';

export default function Navbar() {
    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Orchids', href: '/orchids' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">
                    Orchid Gallery
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.href}>
                                <a className="nav-link" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search orchids..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
