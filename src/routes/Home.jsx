import { useLoaderData } from "react-router-dom";

export function homeLoader() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  );
}

export default function Home() {
  const post = useLoaderData();
  return (
    <div>
      <h2>Title:{post.title}</h2>
      <p>Body: {post.body}</p>
    </div>
  );
}
