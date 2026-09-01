import SignUpForm from "./components/SignUpForm";
import logo from "../../assets/monkey-blogging-mark.png";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="grid w-full max-w-[900px] overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)] md:grid-cols-2">
        {/* Branding side */}
        <div className="hidden flex-col items-center justify-center gap-4 bg-[var(--accent-bg)] p-10 md:flex">
          <img src={logo} alt="Monkey Blogging" className="h-20 w-20" />
          <h1 className="!m-0 !text-3xl font-bold text-[var(--accent)]">
            Monkey Blogging
          </h1>
        </div>

        {/* Form side */}
        <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
          <div className="flex flex-col items-center gap-1 md:hidden">
            <img src={logo} alt="Monkey Blogging" className="h-14 w-14" />
            <h2 className="!m-0 text-xl font-bold text-[var(--accent)]">
              Monkey Blogging
            </h2>
          </div>

          <div>
            <h2 className="!m-0 text-2xl">Sign Up</h2>
            <p className="mt-1 text-sm text-[var(--text)]">
              Create your account to get started
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </div>
  );
}