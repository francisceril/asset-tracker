import { Input } from "./input";
import { Button } from "./button";

export default function LoginForm() {
  return (
    <div className="p-8">
      <div className="space-y-4">
        <Input aria-label="Email" placeholder="Email" type="email" />
        <Input aria-label="Password" placeholder="Password" type="password" />
        <Button className="w-full">Sign in</Button>
      </div>
    </div>
  );
}
