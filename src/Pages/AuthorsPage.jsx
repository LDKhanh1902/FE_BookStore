import React, { useState, useEffect } from 'react';

import { getAuthors, insertAuthor, updateAuthor, deleteAuthor } from "../Services/AuthorService"

const AuthorsPage = () => {
    const [authors, setAuthors] = useState([
        { authorId: 0, name: "", birthDate: "", nationality: "" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ authorId: '', name: '', birthDate: '', nationality: '' });

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = async () => {
        const data = await getAuthors();
        setAuthors(data);
    }

    const formatDate = (isoString) => {
        return isoString ? isoString.split("T")[0] : "";
    };

    // Mở Modal khi nhấn Thêm/Sửa
    const handleShowModal = (author = null) => {
        if (author) {
            setFormData({
                ...author,
                birthDate: formatDate(author.birthDate), // Chuyển đổi ngày tháng
            });
        } else {
            setFormData({ authorId: '', name: '', birthDate: '', nationality: '' });
        }
        setShowModal(true);
    };

    // Đóng Modal
    const handleCloseModal = () => setShowModal(false);

    // Xử lý thay đổi input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Xử lý lưu dữ liệu
    const handleSave = async () => {
        const data = {
            name: formData.name,
            birthDate: formData.birthDate,
            nationality: formData.nationality
        };

        if (formData.authorId) {
            // Cập nhật dữ liệu
            setAuthors(authors.map(a => a.authorId === formData.authorId ? formData : a));
            const success = await updateAuthor(formData.authorId, data);
            fetchAuthors();
        } else {
            // Thêm mới
            const newAuthor = { ...formData, authorId: authors.length + 1 };
            setAuthors([...authors, newAuthor]);
            const success = await insertAuthor(data);
            fetchAuthors();
        }

        handleCloseModal();
    };


    const handleDeleteAuthor = async (id) => {
        const success = await deleteAuthor(id);
        if (!success) {
            alert("Xóa không thành công");
            return;
        }

        fetchAuthors();
        console.log("Xóa thành công");
    }

    return (
        <div className="container mt-4">
            <h1>Danh sách tác giả</h1>

            <button className="btn btn-primary btn-sm mb-3" onClick={() => handleShowModal()}>Thêm</button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Mã tác giả</th>
                        <th>Tên tác giả</th>
                        <th>Ngày sinh</th>
                        <th>Quốc tịch</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.length > 0 ? (
                        authors.map((author) => (
                            <tr key={author.authorId}>
                                <td>{author.authorId}</td>
                                <td>{author.name}</td>
                                <td>{new Date(author.birthDate).toLocaleDateString("vi-VN")}</td>
                                <td>{author.nationality}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleShowModal(author)}>Sửa</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteAuthor(author.authorId)}>Xóa</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">Không có tác giả nào</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Modal Thêm/Sửa */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{formData.authorId ? 'Sửa Tác Giả' : 'Thêm Tác Giả'}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Tên tác giả</label>
                                    <input type="text" name="name" value={formData.name} className="form-control" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ngày sinh</label>
                                    <input type="date" name="birthDate" value={formData.birthDate} className="form-control" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quốc tịch</label>
                                    <input type="text" name="nationality" value={formData.nationality} className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Hủy</button>
                                <button type="button" className="btn btn-primary" onClick={handleSave}>Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthorsPage;
