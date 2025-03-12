export const getAuthors = async () => {
    try {
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/authors');

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error:", errorData.message);
            return null;
        }

        const data = await response.json();
        console.log("Authors fetched successfully:", data.data);
        return data.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
};

export const insertAuthor = async (author) => {
    try{
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/insertauthor',
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

export const updateAuthor = async (id,author) => {
    try{
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/updateauthor',
            {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({id,author:author})
            }
        );

        if(response.ok){
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

export const deleteAuthor = async (id) => {
    try{
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/deleteauthor',
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
