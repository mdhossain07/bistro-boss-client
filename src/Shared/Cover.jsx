/* eslint-disable react/prop-types */
const Cover = ({ img, title }) => {
  return (
    <div>
      <div
        className="hero h-[800px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div
            style={{
              backgroundColor: "#15151599",
              height: "300px",
              padding: "10px",
            }}
          >
            <div className="flex flex-col p-3 items-center justify-center">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5 max-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
