import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

// we did here was to first create this page and add this button.
// Then in order to connect our authentication flow with this new custom page,
// so to let Auth.js know about this page,
// we added it here into this pages field(in auth.js file).
export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      <SignInButton />
    </div>
  );
}
