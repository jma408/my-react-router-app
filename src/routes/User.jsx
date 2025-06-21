import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return <h3>Viewing user {userId}</h3>;
}
