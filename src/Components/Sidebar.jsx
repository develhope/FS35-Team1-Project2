const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-4 p-4 w-full max-w-xs">
      <div className="flex justify-center">
        
        <img className="w-[111px]" src="immagini/logo.svg" alt="Logo" />
      </div>

      <div><a href="http://">Cos'è la discalculia</a></div>
      <div><a href="http://">Quiz</a></div>
      <div><a href="http://">Feedback</a></div>
    </div>
  );
};

export default Sidebar;
