import { useAuth } from "../hook/useAuth";
import { useNavigate, useNavigation } from "react-router-dom";
import NewPost from "./NewPost";

const Createpost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <div className="container__new-post">
      <div className="new-post__main">
        <h1>Create a post</h1>
        <NewPost submitting={navigation.state === "submitting"} />
        <button onClick={() => signout(() => navigate("/", { replace: true }))}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export { Createpost };
