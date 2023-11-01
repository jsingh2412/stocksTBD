import Link from "next/link";

//need to make utility classes for text so im not repeating again
const Header = () => {
  return (
    <div className="w-screen bg-primary-green flex items-center p-1">
      <Link href=".">
        <h1 className="basic_text_italic text-5xl pl-5">stocksTBD</h1>
      </Link>
      <p className="basic_text_italic text-xl ml-auto pr-5">Log In</p>
    </div>
  );
};

export default Header;
