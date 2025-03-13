import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UploadImage = () => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    // Xử lý khi chọn ảnh
    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // Xử lý tải ảnh lên Firebase
    const handleUpload = () => {
        if (!image) {
            alert("Vui lòng chọn một ảnh!");
            return;
        }

        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {
                console.error("Lỗi tải ảnh:", error);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setImageUrl(downloadURL);
            }
        );
    };

    return (
        <div className="container mt-4">
            <h2>Tải ảnh lên Firebase</h2>

            <input type="file" onChange={handleFileChange} className="form-control mb-3" />
            <button onClick={handleUpload} className="btn btn-primary mb-3">Upload</button>

            {progress > 0 && <p>Đang tải: {Math.round(progress)}%</p>}

            {imageUrl && (
                <div>
                    <h4>Ảnh đã tải lên:</h4>
                    <img src={imageUrl} alt="Uploaded" style={{ width: "300px", marginTop: "10px" }} />
                </div>
            )}
        </div>
    );
};

export default UploadImage;
