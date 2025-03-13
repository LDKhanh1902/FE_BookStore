export const getCategories = async () =>{
    try {
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/categories');

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error:", errorData.message);
            return null;
        }

        const data = await response.json();
        console.log(data.message);
        console.log("Categories fetched successfully:", data.data);
        return data.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}

export const insertCategory = async (category) => {
    try{
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/categories',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(category)
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

export const updateCategory = async (id, category) => {
    try {
        // Ensure the authorId is passed in the body as expected by the API
        const response = await fetch(`https://bookstoreapi-eebn.onrender.com/api/categories/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ categoryId: id, ...category }) // Make sure to send AuthorId instead of id
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

export const deleteCategory = async (id) =>{
    try {
        const response = await fetch(`https://bookstoreapi-eebn.onrender.com/api/categories/${id}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if(!response.ok){
            const errorData = await response.json();
            console.error("Error:", errorData.message);
            return false;
        }

        const data = response.json();
        console.log(data.message);
        return true;
    }
    catch(error){
        console.error("Fetch error:", error);
        return false;
    }
}