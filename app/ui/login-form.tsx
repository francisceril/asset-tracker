export default function LoginForm() {
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}
