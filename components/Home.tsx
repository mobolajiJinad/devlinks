import HomeMain from "@/components/HomeMain";

const Home = () => {
  return (
    <main className="my-4 rounded-xl bg-white p-4 md:p-6">
      <section className="mb-10">
        <h1 className="mb-1.5 text-xl font-bold text-charcoal md:text-2xl">
          Customize your links
        </h1>
        <p className="text-sm text-gray md:text-base">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </section>

      <HomeMain />
    </main>
  );
};

export default Home;
