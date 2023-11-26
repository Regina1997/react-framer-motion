import {
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation /*useParams*/,
} from "react-router-dom";
import UpdatePost from "../components/UpdatePost";

const Editpost = () => {
  // const {id} = useParams();
  const data = useActionData();
  const { post, id } = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  return (
    <div className="container__edit-post">
      <div className="edit-post__main">
        <h1>Edit post {id}</h1>
        {data?.message ? (
          <div className="container__message">
            <div>{data.message}</div>
            <button
              onClick={() => navigate("/posts", { replace: true })}
            >
              Go Back
            </button>
          </div>
        ) : (
          <UpdatePost
            {...post}
            submitting={navigation.state === "submitting"}
          />
        )}
      </div>
    </div>
  );
};

const updatePost = async (post) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.get("id")}`,
    {
      method: "PUT",
      body: post,
    }
  );
  return res.json();
};

const updatePostAction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);

  if (!formData.get("title") || !formData.get("body")) {
    return { message: "All field are required!!!" };
  }

  const updatedPost = await updatePost(formData);

  return { message: `Post ${updatedPost.id} was successfully updated` };
};

export { Editpost, updatePostAction };
