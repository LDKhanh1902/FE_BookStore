export const getPublishers = async () => {
    try {
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/publishers');

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error:", errorData.message);
            return null;
        }

        const data = await response.json();
        console.log("Publishers fetched successfully:", data.data);
        return data.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}

export const insertPublisher = async (publisher) => {
    try {
        const response = await fetch('https://bookstoreapi-eebn.onrender.com/api/publishers', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(publisher)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error:", errorData.message);
            return false;
        }

        const data = await response.json();
        console.log("Publisher added successfully:", data.message);
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return false;
    }
}

export const updatePublisher = async (id, publisher) => {
    try {
        const response = await fetch(`https://bookstoreapi-eebn.onrender.com/api/publishers/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ publisherId: id, ...publisher })
        });

        const data = await response.json();
        if (response.ok) {
            console.log("Publisher updated successfully:", data.message);
            return true;
        } else {
            console.log("Update failed:", data.message);
            return false;
        }
    } catch (error) {
        console.error("Fetch error:", error);
        return false;
    }
}

export const deletePublisher = async (id) => {
    try {
        const response = await fetch(`https://bookstoreapi-eebn.onrender.com/api/publishers/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error:", errorData.message);
            return false;
        }

        const data = await response.json();
        console.log("Publisher deleted:", data.message);
        return true;
    } catch (error) {
        console.error("Fetch error:", error);
        return false;
    }
}
