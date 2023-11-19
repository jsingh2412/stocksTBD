//A component to sign up for emails on our dashboard.

const SignUp = () => {
  const signUpStyle = {
    minHeight: "300px", // Set your desired minimum width in pixels
    minWidth: "150px",
  };
  return (
    <div className="bg-secondary-green w-3/4 shadow m-3" style={signUpStyle}>
      <h1 className="basic_text text-2xl p-3">Sign up for</h1>
      <div className="flex flex-col p-3 h-4/5 items-center justify-center lg:text-2xl text-xl">
        <div className="flex flex-col">
          <label
            htmlFor="textMessage"
            className="block lg:text-lg text-sm basic_text w-full lg:pb-0 pb-1"
          >
            Text Messages
          </label>
          <input
            type="text"
            id="textMessage"
            placeholder="913-999-9999"
            className="p-3 basic_text_black lg:text-lg text-sm w-full"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="block lg:text-lg text-sm basic_text w-full lg:pb-0 pb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="p-3 basic_text_black lg:text-lg text-sm w-full"
          />
        </div>

        <button className="bg-primary-gray w-1/2 basic_text_black text-lg mt-5 text-center">
          Join
        </button>
      </div>
    </div>
  );
};

export default SignUp;
