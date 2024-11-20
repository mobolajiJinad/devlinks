import UserProfileMain from "@/components/UserProfileMain";

const UserProfile = () => {
  return (
    <main className="my-4 rounded-xl bg-white p-4 md:p-6">
      <section className="mb-10">
        <h1 className="mb-1.5 text-xl font-bold text-charcoal md:text-2xl">
          Profile Details
        </h1>
        <p className="text-sm text-gray md:text-base">
          Add your details to create a personal touch to your profile.
        </p>
      </section>

      <UserProfileMain />
    </main>
  );
};

export default UserProfile;
