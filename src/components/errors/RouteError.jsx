export default function RouteError({ error }) {
  console.error(error);
  return (
    <div style={{ padding: "1rem", color: "red" }}>
      <h2>Something went wrong</h2>
      <p>{error?.message || "Unknown error."}</p>
    </div>
  );
}
