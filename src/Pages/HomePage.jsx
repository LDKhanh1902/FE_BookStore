import React from "react";
import "../css/homepage.css";
import img from '../assets/react.svg'
const Homepage = () => {
    return (
        <div className="homepage">

            {/* Banner */}
            <section className="banner">
                <h1>Chào mừng đến với cửa hàng sách</h1>
                <p>Khám phá hàng ngàn cuốn sách hay</p>
            </section>

            {/* Danh mục sách */}
            <section className="categories">
                <h2>Danh mục sách</h2>
                <div className="category-list">
                    <button>Văn học</button>
                    <button>Khoa học</button>
                    <button>Kinh tế</button>
                    <button>Thiếu nhi</button>
                </div>
            </section>

            {/* Danh sách sách */}
            <section className="book-list">
                <h2>Sách bán chạy</h2>
                <div className="books">
                    <div className="book-card">
                        <img src={img} alt="Sách 1" />
                        <h3>Tiêu đề sách</h3>
                        <p>Tác giả</p>
                        <button>Mua ngay</button>
                    </div>
                    <div className="book-card">
                        <img src={img} alt="Sách 2" />
                        <h3>Tiêu đề sách</h3>
                        <p>Tác giả</p>
                        <button>Mua ngay</button>
                    </div>
                    <div className="book-card">
                        <img src={img} alt="Sách 3" />
                        <h3>Tiêu đề sách</h3>
                        <p>Tác giả</p>
                        <button>Mua ngay</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Cửa hàng sách. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;
