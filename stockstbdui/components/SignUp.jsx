//Component to sign up for email and text

const SignUp = () => {
  return (
    <div className="bg-secondary-green shadow h-full overflow-hidden">
      <h6 className="basic_text p-3">Sign up for</h6>
      <div className="flex flex-col pl-3 pr-3 items-center justify-center sm:text-lg">
        <div className="flex flex-col">
          <label
            htmlFor="textMessage"
            className="text-sm basic_text w-full sm:pb-0 pb-1"
          >
            Text Messages
          </label>
          <input
            type="text"
            id="textMessage"
            placeholder="913-999-9999"
            className="p-2 basic_text_black text-sm w-full"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm basic_text w-full lg:pb-0 pb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="p-2 basic_text_black text-sm w-full"
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
