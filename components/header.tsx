import Link from "next/link";

const Header = () => {
  return (
    <header className="header-container">
      <div className="container flex justify-between h-14 items-center">
        <Link href="/">asset tracker</Link>

        <div>user</div>
      </div>
    </header>
  );
};

export default Header;
