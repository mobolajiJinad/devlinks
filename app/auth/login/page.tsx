import LoginForm from "@/components/LoginForm";

const Page = () => {
  return (
    <main className="flex flex-col items-start gap-10 md:w-[29rem] md:items-center md:rounded-xl md:bg-white">
      <div className="flex w-full flex-col gap-10 self-stretch md:p-10">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <h1 className="self-stretch text-2xl font-bold text-charcoal">
            Login
          </h1>
          <p className="self-stretch text-base text-gray">
            Add your details below to get back into the app
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
};

export default Page;
