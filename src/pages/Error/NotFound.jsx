import { Link, useRouteError } from "react-router-dom";
const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-8 bg-white rounded-md flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-semibold text-gray-800">Page Not Found</h1>
        <p className="text-gray-600">
          The page you're looking for doesn't exist.
        </p>
        <p className="text-red-500">{error.message}</p>
        <img
        loading="lazy"
          src="/assets/images/page-not-found.avif" // Replace with your image URL
          alt="Page Not Found"
          className="h-[300px] w-full"
        />
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
