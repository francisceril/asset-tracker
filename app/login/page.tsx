import LoginForm from "@/app/ui/login/login-form";

export default async function LoginPage() {
  return (
    <main className="bg-background dark:bg-background grid min-h-screen place-items-center">
      <div className="w-full max-w-md">
        <h1 className="mb-4 text-2xl font-medium">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}
