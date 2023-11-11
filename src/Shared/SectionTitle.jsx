/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <>
      <p className="text-[#D99904] text-center"> ---{subHeading}--- </p>
      <div className="border-y-4 w-4/12 my-3 py-3 text-center mx-auto">
        <h2 className="text-4xl font-medium">{heading}</h2>
      </div>
    </>
  );
};

export default SectionTitle;
