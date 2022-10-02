export default function Card({ path, title, subtitle, link, background }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        style={{ background: background }}
        className="flex justify-center items-center md:h-32 lg:h-48 h-20 w-full  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 object-cover"
      >
        <div className="md:h-10 md:w-10 h-6 w-6">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Twitter</title>
            <path d={path} fill="#fff" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="pt-2">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
    </a>
  );
}
