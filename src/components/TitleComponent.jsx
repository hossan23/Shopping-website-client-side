const TitleComponent = ({ title }) => {
  return (
    <div className="my-10 relative">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold z-10">
        {title}
      </h2>
      <svg
        className="absolute top-2 left-20 lg:left-40 -z-10 w-24 md:w-40 lg:w-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 186 35"
        fill="none"
      >
        <path
          d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
          fill="#EBD96B"
        />
      </svg>
    </div>
  );
};

export default TitleComponent;
