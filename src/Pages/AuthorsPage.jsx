import React, { useState, useEffect } from 'react';

import { getAuthors } from "../Services/AuthorService";

const AuthorsPage = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, [])

    const fetchAuthors = async () => {
        const data = await getAuthors();
        setAuthors(data);
    }

    return (
        <>
            <h1>Danh sách tác giả</h1>
            <table class="table table-striped">
                <thead>
                    <th>Mã tác giả</th>
                    <th>Tên tác giả</th>
                    <th>Ngày sinh</th>
                    <th>Quốc tịch</th>
                </thead>
                <tbody>
                    {authors.map((author, index) => (
                        <tr key={index}>
                            <td>{author.authorId}</td>
                            <td>{author.name}</td>
                            <td>{author.birthDate}</td>
                            <td>{author.nationality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AuthorsPage;