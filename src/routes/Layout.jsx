import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/layout/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
