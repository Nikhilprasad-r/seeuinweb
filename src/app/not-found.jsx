import Link from "next/link";

const NotFound = ({}) => {
  return (
    <div>
      <h2>The page you are looking for is not found</h2>
      <p>Please look for something else</p>
      <Link href={"/"}>Return to SeeUinWeb</Link>
    </div>
  );
};

export default NotFound;
