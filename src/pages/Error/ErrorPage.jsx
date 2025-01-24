import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex flex-col items-center gap-6 justify-center h-svh bg-primary text-white">
      <h1 className="big-title">404 - Page Not Found</h1>
      <p className="text-white/60 font-medium text-xl">
        The page you are looking for does not exist.
      </p>
      <Link
        className="bg-white rounded-full px-8 py-3 text-primary font-bold text-xl hover:bg-secondary duration-300"
        to="/"
      >
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
