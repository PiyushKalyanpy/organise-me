import { useState } from "react";
const Contact = () => {
  const [contactForm, setContactForm] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log(contactForm);
  };

  return (
    <div
      id="contact"
      className="w-screen text-black bg-white p-20 items-center flex flex-col gap-12 mt-10"
    >
      <h2 className="flex flex-row w-fit m-auto text-4xl  font-bold ">
        Contact Us
      </h2>
      <form
        
        method="POST"
        className="w-1/4 flex flex-col gap-4 items-center place-content-center "
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="flex w-full items-center flex-row bg-gray-100 rounded-2xl p-4 h-fit hover:bg-gray-200 hover:scale-[1.03] transition "
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="flex w-full items-center flex-row bg-gray-100 rounded-2xl p-4 h-fit hover:bg-gray-200 hover:scale-[1.03] transition "
        />
        <textarea
          name="message"
          placeholder="Enter message"
          className="flex w-full h-40 items-center flex-row bg-gray-100 rounded-2xl  p-4  hover:bg-gray-200 hover:scale-[1.03] transition "
        ></textarea>
        <button
          type="submit"
          className="flex w-full items-center flex-row  rounded-2xl p-4 h-fit hover:bg-gray-200 bg-gradient-to-r from-violet-400 to-purple-300 hover:from-violet-500 hover:to-purple-400   hover:scale-[1.03] transition text-white gap-4  active:from-violet-600 active:to-purple-600"
        >
          <p>Send</p>
          <i className="material-icons">arrow_forward</i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
