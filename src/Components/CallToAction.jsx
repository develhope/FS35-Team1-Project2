const CallToAction = ({ text }) => {
  return (
    <>
      <div className="w-screen flex items-center justify-center">
        <button className="w-[240px] h-[52px] rounded-[20px] bg-[#A7D6E0] ">
          {text}
        </button>
      </div>
    </>
  );
};

export default CallToAction;
