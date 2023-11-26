import { redirect } from "react-router-dom";

export async function getPostById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}
export async function getCommentsByPost(id) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return res.json();
}

export const createPost = async ({title, body, userId}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId })
    })
    const newPost = await res.json()

    return newPost
}

export const createPostAction = async ({request}) => {
    const formData = await request.formData();
    const newPost = {
        title: formData.get('title'),
        body: formData.get('description'),
        userId: formData.get('userId')
    }
    console.log(newPost);
    const post = await createPost(newPost)

    return redirect('/posts/' + post.id)
}