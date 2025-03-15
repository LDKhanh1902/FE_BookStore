import React, { useState, useEffect } from "react";

import {getPublishers, insertPublisher, updatePublisher, deletePublisher} from '../Services/PublisherService'

const PublishersPage = () => {
    // Danh sách nhà xuất bản
    const [publishers, setPublishers] = useState([
        { publisherId: '', publisherName: '', publisherAddress: '', contact: '' }
    ]);

    const fecthData = async () =>{
        const data = await getPublishers();
        setPublishers(data);
    }

    useEffect(() => {
        fecthData();
    }, []);

    // Trạng thái Modal và dữ liệu form
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        publisherId: "",
        publisherName: "",
        publisherAddress: "",
        contact: ""
    });

    // Hiển thị Modal (Thêm hoặc Sửa)
    const handleShowModal = (publisher = null) => {
        if (publisher) {
            setFormData(publisher); // Nếu có dữ liệu, sửa
        } else {
            setFormData({ publisherId: "", publisherName: "", publisherAddress: "", contact: "" }); // Nếu không, thêm mới
        }
        setShowModal(true);
    };

    // Đóng Modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Xử lý thay đổi input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Lưu dữ liệu (Thêm/Sửa)
    const handleSave = async () => {
        const data = {
            publisherName: formData.publisherName,
            publisherAddress: formData.publisherAddress,
            contact: formData.contact
        }

        if (formData.publisherId) {
            // Cập nhật dữ liệu cũ
            setPublishers(publishers.map(p => p.publisherId === formData.publisherId ? formData : p));
            await updatePublisher(formData.publisherId,data);
            fecthData();
        } else {
            // Thêm dữ liệu mới
            setPublishers([...publishers, { ...formData, publisherId: Date.now() }]);
            await insertPublisher(data);
            fecthData();
        }
        handleCloseModal();
    };

    // Xóa Nhà xuất bản
    const handleDeletePublisher = async (id) => {
        await deletePublisher(id);
    };

    return (
        <div className="container mt-4">
            <h1>Danh sách nhà xuất bản</h1>

            <button className="btn btn-primary btn-sm mb-3" onClick={() => handleShowModal()}>Thêm</button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Tên nhà xuất bản</th>
                        <th>Địa chỉ</th>
                        <th>Liên hệ</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {publishers.length > 0 ? (
                        publishers.map((publisher) => (
                            <tr key={publisher.publisherId}>
                                <td>{publisher.publisherId}</td>
                                <td>{publisher.publisherName}</td>
                                <td>{publisher.publisherAddress}</td>
                                <td>{publisher.contact}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleShowModal(publisher)}>Sửa</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDeletePublisher(publisher.publisherId)}>Xóa</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">Không có nhà xuất bản nào</td>
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
                                <h5 className="modal-title">{formData.publisherId ? 'Sửa Nhà Xuất Bản' : 'Thêm Nhà Xuất Bản'}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Tên Nhà Xuất Bản</label>
                                    <input type="text" name="publisherName" value={formData.publisherName} className="form-control" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Địa chỉ</label>
                                    <input type="text" name="publisherAddress" value={formData.publisherAddress} className="form-control" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Liên hệ</label>
                                    <input type="text" name="contact" value={formData.contact} className="form-control" onChange={handleChange} />
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

export default PublishersPage;
