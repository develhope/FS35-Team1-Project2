const SezioniLaDiscalculia = (props) => {
  const isReverseColumns = props.reverseColumns;
  const isReverse = props.reverse;
  const isLastRevers = props.lastReverse;
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div
          className="ml-10 rounded-tl-4xl rounded-bl-4xl "
          style={{ backgroundColor: `#${props.bg}` }}
        >
          <h2 className="  p-3 text-white font-medium text-2xl md:text-4xl">
            {props.title}
          </h2>
        </div>

        <div
          className={`relative flex mt-2 ${
            isReverseColumns
              ? "flex-col items-center"
              : isReverse
              ? "flex-row-reverse gap-6 mr-2.5] "
              : isLastRevers
              ? "pb-14"
              : "flex-row gap-7"
          }`}
        >
          <p
            className={`font-[Arial] md:text-2xl mr-4 ml-4 text-[14px] pt-4 font-bold ${
              isLastRevers ? "ml-22 md:ml-45" : ""
            }`}
          >
            {props.text}
          </p>
          <img
            src={props.srcImg}
            alt=""
            className={` ${
              isLastRevers
                ? "w-30 md:w-50 md:ml-2 absolute top-20 md:top-18"
                : isReverseColumns
                ? "w-[220px] mt-7 md:w-80"
                : "w-30 mt-7 md:w-35 md:ml-4 z-10"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default SezioniLaDiscalculia;
