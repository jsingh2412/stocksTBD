//The header of our webapp that will be present on all other pages.
import Link from "next/link";
import HeaderLogIn from '@components/headerLogIn'
//need to make utility classes for text so im not repeating again
const Header = () => {
  return (
    <div className="w-screen bg-primary-green flex items-center p-1">
      <Link href="..">
        <h1 className="basic_text_italic text-3xl pl-5">stocksTBD</h1>
      </Link>
      <HeaderLogIn/>
    </div>
  );
};

export default Header;
