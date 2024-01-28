//The header of our webapp that will be present on all other pages.
import Link from "next/link";

//need to make utility classes for text so im not repeating again
const Header = () => {
  return (
    <div className="w-screen bg-primary-green flex items-center p-1">
      <Link href="..">
        <h1 className="basic_text_italic text-3xl pl-5">stocksTBD</h1>
      </Link>
      <Link href="login" className="ml-auto">
        <p className="basic_text_italic text-xl pr-5">Log In</p>
      </Link>
    </div>
  );
};

export default Header;
