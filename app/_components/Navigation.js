import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  // switching the route to dynamic, this component is on every single route.because this component is on every single route.
  const session = await auth(); // this will make entire route dynamic

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex flex-row-reverse items-center gap-4"
            >
              <Image
                src={session.user.image}
                alt={session.user.className || "User profile image"}
                className="rounded-full object-cover"
                width={50}
                height={50}
                referrerPolicy="no-referrer" // to avoid CORS issues
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
