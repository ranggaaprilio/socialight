import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function SideNav() {
  const userSession = useSession();
  const user = userSession.data?.user;

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user.id}`}>Profile</Link>
          </li>
        )}
        {/* render the log out button if the user is logged in */}
        {user === null ? (
          <button onClick={() => void signIn()}>Log in</button>
        ) : (
          <button onClick={() => void signOut()}>Log Out</button>
        )}
      </ul>
    </nav>
  );
}
