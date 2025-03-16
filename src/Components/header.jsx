import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* Logo */}
            <Link className="navbar-brand logo" to="/">Logo</Link>

            {/* Nút toggle trên mobile */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu chính */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Trang chủ</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/authors">Tác giả</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/categories">Thể loại</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/publishers">Nhà xuất bản</Link></li>
                </ul>

                {/* Ô tìm kiếm */}
                <form className="d-flex search-form">
                    <input className="form-control me-2" type="search" placeholder="Tìm kiếm..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Tìm kiếm</button>
                </form>

                {/* Nút đăng nhập / đăng xuất */}
                <div className="auth-buttons ms-3">
                    <button className="btn btn-primary me-2">Sign in</button>
                    <button className="btn btn-success">Sign out</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
