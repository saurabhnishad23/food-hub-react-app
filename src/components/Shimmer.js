const Shimmer = () => {
  return (
    <>
      <div className="restaurant-List">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-Card"></div>
          ))}{" "}
      </div>
    </>
  );
};

export default Shimmer;
