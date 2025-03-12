export const getAuthors = async () => {
    try {
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/authors');

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error:", errorData.message);
            return null;
        }

        const data = await response.json();
        console.log(data.message);
        console.log("Authors fetched successfully:", data.data);
        return data.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
};

export const insertAuthor = async (author) => {
    try{
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/authors',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(author)
            }
        );

        if(!response.ok)
        {
            const errorData = await response.json();
            console.error("Error:", errorData.message);
            return false;
        }

        const data = await response.json();
        console.log("Message:", data.message);
        console.log(data.data);
        return data;
    }
    catch(error){
        console.error("Fetch error:", error);
        return false;
    }
}

export const updateAuthor = async (id, author) => {
    try {
        // Ensure the authorId is passed in the body as expected by the API
        const response = await fetch(`https://bookstoreapi-eebn.onrender.com/api/authors/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ AuthorId: id, ...author }) // Make sure to send AuthorId instead of id
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Update successful:", data.message);
            return true;
        } else {
            console.log("Update failed:", data.message);
            return false;
        }
    } catch (error) {
        console.log("Fetch error:", error);
        return false;
    }
}


export const deleteAuthor = async (id) => {
    try{ 
        const response = await fetch(`https://bookstoreapi-eebn.onrender.com/api/authors/${id}`,
            {
                method:'DELETE',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({id:id})
            }
        );

        if(!response.ok){
            const data = await response.json();
            console.error(data);
            return false;
        }

        const data = await response.json();
        console.log("Message:", data.message);
        console.log(data.data);
        return true;
    }
    catch(error){
        console.error("Fetch error:", error);
        return false;
    }
}   
