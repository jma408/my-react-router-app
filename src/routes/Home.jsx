import { useLoaderData } from "react-router-dom";

export function homeLoader() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  );
}

export default function Home() {
  const post = useLoaderData();
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2 className="fancy-heading">Title:{post.title}</h2>
      <p>Body: {post.body}</p>
    </div>
  );
}
