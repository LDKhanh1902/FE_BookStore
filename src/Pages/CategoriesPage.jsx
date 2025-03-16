import React, { useState, useEffect } from 'react';
<<<<<<< Updated upstream

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
=======
import { getCategories, insertCategory, updateCategory, deleteCategory } from "../Services/CategoryService";

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ categoryId: '', categoryName: '', description: '' });

>>>>>>> Stashed changes
    useEffect(() => {
        fetchCategories();
    }, []);

<<<<<<< Updated upstream
    // Mở Modal khi nhấn Thêm/Sửa
    const handleShowModal = (category = null) => {
        if (category) {
            setFormData({
                ...category
            });
        } else {
            setFormData({ categoryId: 0, categoryName: '', description: '' });
=======
    const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    };

    const handleShowModal = (category = null) => {
        if (category) {
            setFormData({ ...category });
        } else {
            setFormData({ categoryId: '', categoryName: '', description: '' });
>>>>>>> Stashed changes
        }
        setShowModal(true);
    };

<<<<<<< Updated upstream
    // Đóng Modal
    const handleCloseModal = () => setShowModal(false);

    // Xử lý thay đổi input
=======
    const handleCloseModal = () => setShowModal(false);

>>>>>>> Stashed changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

<<<<<<< Updated upstream
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
=======
    const handleSave = async () => {
        const data = {
            categoryName: formData.categoryName,
            description: formData.description
        };
        console.log(formData.categoryId)
        if (formData.categoryId) {
            await updateCategory(formData.categoryId, data);
        } else {
            await insertCategory(data);
        }
        fetchCategories();
        handleCloseModal();
    };

    const handleDeleteCategory = async (id) => {
        const success = await deleteCategory(id);
>>>>>>> Stashed changes
        if (!success) {
            alert("Xóa không thành công");
            return;
        }
<<<<<<< Updated upstream

        fetchCategories();
        console.log("Xóa thành công");
    }


    return (
        <div className="container mt-4">
            <h1>Danh sách thể loại</h1>

=======
        fetchCategories();
    };

    return (
        <div className="container mt-4">
            <h1>Danh sách danh mục</h1>
>>>>>>> Stashed changes
            <button className="btn btn-primary btn-sm mb-3" onClick={() => handleShowModal()}>Thêm</button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
<<<<<<< Updated upstream
                        <th>Mã Thể loại</th>
                        <th>Tên Thể loại</th>
=======
                        <th>Mã danh mục</th>
                        <th>Tên danh mục</th>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                            <td colSpan="5" className="text-center">Không có tác giả nào</td>
=======
                            <td colSpan="4" className="text-center">Không có danh mục nào</td>
>>>>>>> Stashed changes
                        </tr>
                    )}
                </tbody>
            </table>

<<<<<<< Updated upstream
            {/* Modal Thêm/Sửa */}
=======
>>>>>>> Stashed changes
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
<<<<<<< Updated upstream
                                <h5 className="modal-title">{formData.categoryId ? 'Sửa Tác Giả' : 'Thêm Tác Giả'}</h5>
=======
                                <h5 className="modal-title">{formData.categoryId ? 'Sửa Danh Mục' : 'Thêm Danh Mục'}</h5>
>>>>>>> Stashed changes
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
<<<<<<< Updated upstream
                                    <label className="form-label">Tên thể loại</label>
=======
                                    <label className="form-label">Tên danh mục</label>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
}

export default CategoriesPage;
=======
};

export default CategoriesPage;
>>>>>>> Stashed changes
