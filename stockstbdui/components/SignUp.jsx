//Sign Up component on dashboard

const SignUp = () => {
  //Not exactly what i want to do but close!
  const signUpStyle = {
    minHeight: "500px", // Set your desired minimum width in pixels
  };
  return (
    <div className="bg-secondary-green w-1/5 h-2/5 m-4" style={signUpStyle}>
      <h1 className="basic_text text-3xl p-3">Sign up for</h1>
      <div className="flex flex-col p-3 h-4/5 items-center justify-center lg:text-2xl sm:text-sm">
        <label
          htmlFor="textMessage"
          className="block md:text-lg sm:text-sm basic_text w-full h-1/8"
        >
          Text Messages
        </label>
        <input
          type="text"
          id="textMessage"
          placeholder="913-999-9999"
          className="p-3 basic_text_black text-lg w-full h-1/6"
        />
        <label
          htmlFor="email"
          className="block text-sm basic_text w-full h-1/8"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="p-3 basic_text_black text-lg w-full h-1/6"
        />

        <button className="bg-primary-gray w-3/4 basic_text_black text-lg h-1/5 mt-auto mb-2 text-center">
          Join
        </button>
      </div>
    </div>
  );
};

export default SignUp;
