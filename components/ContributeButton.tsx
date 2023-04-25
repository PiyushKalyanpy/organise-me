const ContributeButton = () => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://github.com/PiyushKalyanpy/organise-me-website";
        }}
        className="flex items-center flex-row  gap-4 bg-gradient-to-r from-pink-200 to-violet-500 hover:from-pink-300 hover:to-violet-600 shadow-xl shadow-purple-200  px-4  py-2 rounded-3xl text-white font-medium text-lg cursor-pointer transition hover:scale-[1.04]"
      >
        <p>Contribute Now</p>
        <i className="material-icons">arrow_forward</i>
      </button>
    </div>
  );
};

export default ContributeButton;
