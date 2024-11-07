import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const UserProfile = () => {
  return (
    <div>
      <h1>UserProfile</h1>

      <Button variant="outlineViolet" onClick={() => signOut()}>
        Log out
      </Button>
    </div>
  );
};

export default UserProfile;
