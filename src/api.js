const URL = "https://jsonplaceholder.typicode.com/posts/";

const apiSettings = {
    fetchPosts: async () => {
        return await (await fetch(URL)).json();
    },

    updatePost: async (props) => {
        if (props.id) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: props.id,
                    title: props.title,
                    body: props.body,
                    userId: props.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const data = await response.json();

            return data;
        }
    },

    getPost: async postId => {
        const endpoint = `${URL}/${postId}`
        const data = await (await fetch(endpoint)).json();
        return data;
    },

    delePost: async postId => {
        const method = {
            method: 'DELETE',
        };
        const endpoint = `${URL}/${postId}`;
        return await (await fetch(endpoint, { ...method })).json();
    },

    createPost: async (title, body, userId) => {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        return await (await fetch(URL, { ...headers })).json();
    },


};

export default apiSettings;