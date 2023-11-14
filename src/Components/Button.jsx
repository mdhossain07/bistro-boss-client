/* eslint-disable react/prop-types */
const Button = ({ title }) => {
  return (
    <div>
      <div className="flex justify-center my-5">
        <button className="btn btn-outline btn-warning border-0 border-b-4 border-orange-400">
          {title}
        </button>
      </div>
    </div>
  );
};

export default Button;
