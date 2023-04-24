const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen text-black bg-white p-20 items-center flex flex-col gap-12 mt-10"
    >
      <h2 className="flex flex-row w-fit m-auto text-4xl  font-bold ">
        Contact Us
      </h2>
      <div className="w-full flex flex-col gap-4 items-center place-content-center ">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="flex w-1/4 items-center flex-row bg-gray-100 rounded-2xl w-fit p-4 h-fit hover:bg-gray-200 hover:scale-[1.03] transition "
        />
      <textarea
        name="email"
        placeholder="Enter message"
        className="flex w-1/4 h-40 items-center flex-row bg-gray-100 rounded-2xl w-fit p-4 h-fit hover:bg-gray-200 hover:scale-[1.03] transition "
      ></textarea>
      <button className="flex w-1/4 items-center flex-row  rounded-2xl w-fit p-4 h-fit hover:bg-gray-200 bg-gradient-to-r from-violet-400 to-purple-300 hover:from-violet-500 hover:to-purple-400   hover:scale-[1.03] transition text-white gap-4 items-center ">
        <p>Send</p>
        <i className="material-icons">arrow_forward</i>
      </button>
      </div>
    </div>
  );
};

export default Contact;
