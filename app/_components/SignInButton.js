import Image from "next/image";
import { signInAction } from "../_lib/actions";

// server component,so it can't call signIn function using onClick

// entire flow is gonna stay on the server, and so therefore this SignInButton
// cannot be a client component.
// is to create something called a server action.
// asically they allow us to add interactivity also to server component and to form
function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
