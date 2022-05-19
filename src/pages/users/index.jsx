import { usePost } from "../../hooks/usePost";
import Link from "next/link";

const Users = () => {
  const { users, error, isLoading } = usePost();

  return (
    <ol>
      {users?.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Users;
