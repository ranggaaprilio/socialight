import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  VscAccount,
  VscHome,
  VscSignIn,
  VscSignOut,
  VscPerson,
} from "react-icons/vsc";
import { IconHoverEffect } from "./IconHoverEffect";
import React from "react";

export function SideNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <VscHome className="h-8 w-8" />
                <span className="hidden text-lg md:inline">Home</span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user.id}`}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscAccount className="h-8 w-8" />
                  <span className="hidden text-lg md:inline">Profile</span>
                </span>
              </IconHoverEffect>
            </Link>
          </li>
        )}
        {user == null ? (
          <React.Fragment>
            <li>
              <button onClick={() => void signIn()}>
                <IconHoverEffect>
                  <span className="flex items-center gap-4">
                    <VscSignIn className="h-8 w-8 fill-green-700" />
                    <span className="hidden text-lg text-green-700 md:inline">
                      Sign In
                    </span>
                  </span>
                </IconHoverEffect>
              </button>
            </li>
            <li>
              <Link href={`/signUp`}>
                <IconHoverEffect>
                  <span className="flex items-center gap-4">
                    <VscPerson className="h-8 w-8 fill-blue-700" />
                    <span className="hidden text-lg text-blue-700 md:inline">
                      Sign Up
                    </span>
                  </span>
                </IconHoverEffect>
              </Link>
            </li>
          </React.Fragment>
        ) : (
          <li>
            <button onClick={() => void signOut()}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscSignOut className="h-8 w-8 fill-red-700" />
                  <span className="hidden text-lg text-red-700 md:inline">
                    Log Out
                  </span>
                </span>
              </IconHoverEffect>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
