import React, { useState, useEffect } from 'react';

import { getCategories, insertCategory, updateCategory, deleteCategory } from '../Services/CategoryService'

const CategoriesPage = () => {
    const [categories, setCategories] = useState([{
        categoryId: 0,
        categoryName: '',
        description: '',
    }]);

    const [formData, setFormData] = useState({
        categoryId: '',
        categoryName: '',
        description: '',
    });

    const [showModal, setShowModal] = useState(false);

    const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    }
    useEffect(() => {
        fetchCategories();
    }, []);

    // Mở Modal khi nhấn Thêm/Sửa
    const handleShowModal = (category = null) => {
        if (category) {
            setFormData({
                ...category
            });
        } else {
            setFormData({ categoryId: 0, categoryName: '', description: '' });
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
            categoryId: formData.categoryId,
            categoryName: formData.categoryName,
            description: formData.description,
        };
        console.log(data)
        if (formData.categoryId) {
            // Cập nhật dữ liệu
            const success = await updateCategory(formData.categoryId, data);
            if (success) {
                setCategories(categories.map(a => a.categoryId === formData.categoryId ? formData : a));
                fetchCategories(); // Fetch updated authors if update was successful
            }
        } else {
            // Thêm mới
            const newCategory = { ...formData, categoryId: categories.length + 1 };
            setCategories([...categories, newCategory]);
            const success = await insertCategory(data);
            if (success) {
                fetchCategories();
            }
        }

        handleCloseModal();
    };

    const handleDeleteCategory = async (categoryId) => {
        const success = await deleteCategory(categoryId);
        if (!success) {
            alert("Xóa không thành công");
            return;
        }

        fetchCategories();
        console.log("Xóa thành công");
    }


    return (
        <div className="container mt-4">
            <h1>Danh sách thể loại</h1>

            <button className="btn btn-primary btn-sm mb-3" onClick={() => handleShowModal()}>Thêm</button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Mã Thể loại</th>
                        <th>Tên Thể loại</th>
                        <th>Mô tả</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <tr key={category.categoryId}>
                                <td>{category.categoryId}</td>
                                <td>{category.categoryName}</td>
                                <td>{category.description}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleShowModal(category)}>Sửa</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCategory(category.categoryId)}>Xóa</button>
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
                                <h5 className="modal-title">{formData.categoryId ? 'Sửa Tác Giả' : 'Thêm Tác Giả'}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Tên thể loại</label>
                                    <input type="text" name="categoryName" value={formData.categoryName} className="form-control" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mô tả</label>
                                    <input type="text" name="description" value={formData.description} className="form-control" onChange={handleChange} />
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
}

export default CategoriesPage;