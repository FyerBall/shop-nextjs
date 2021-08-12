// if the user is sign in we can pull their info and greet them.
// ? replace "username" with ... redux slice??

import { useAuth } from "../store/authContext";

function Greeting() {
  const { auth } = useAuth();
  const username = auth.user_metadata.full_name;
  return (
    <div>
      <span>Hello!</span> <span>{username}</span>
    </div>
  );
}

export default Greeting;
