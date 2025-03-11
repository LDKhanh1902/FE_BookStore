export const GetAuthors = async () => {
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
