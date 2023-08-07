import Link from "next/link";

const Error404 = () => {
  return (
    <div>
      <h1 className="text-2xl mb-auto mt-auto text-center font-semibold ">
        Oops... something went wrong
        <p>
          {"Click here to go back: "}
          <Link
            href="/"
            className="text-stone-600 underline hover:cursor-pointer hover:text-stone-400"
          >
            Home
          </Link>
        </p>
      </h1>
    </div>
  );
};

export default Error404;
