const ErrorPage = () => {
  return (
    <section className="flex items-center h-svh p-16 bg-[#fff4ed]">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-[#f9a06f]">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-[#1e1b4b]">
            Sorry, we couldn&#39;t find this page.
          </p>
          <p className="mt-4 mb-8 text-[#05386B]">
            But don&#39;t worry, you can find plenty of other things on our
            homepage.
          </p>
          <a rel="noopener noreferrer" href="/" className="">
            <button className="font-bold mt-6 rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
              <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Back to Home Page
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
