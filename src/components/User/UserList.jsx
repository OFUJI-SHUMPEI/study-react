import { usePost } from "../../hooks/usePost";
import Link from "next/link";
import { SWRConfig } from "swr";
import { API_URL } from "../../utility/const";

export const getStaticProps = async () => {
  const USERS_API = `${API_URL}/users`;
  const USERS = await fetch(USERS_API);
  const USERSData = await USERS.json();

  /*if (!USERSData.ok) {
      return {
        notFound: true,
        revalidate: 1,
      };
    }*/

  return {
    props: {
      fallback: {
        [USERS_API]: USERSData,
      },
    },
    revalidate: 1,
  };
};

export const UserList = (props) => {
  const { fallback } = props;
  const { users } = usePost();

  return (
    <ol>
      <SWRConfig value={{ fallback }}>
        {users?.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          );
        })}
      </SWRConfig>
    </ol>
  );
};
