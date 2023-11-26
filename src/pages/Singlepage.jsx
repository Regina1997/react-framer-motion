import { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

import ButtonAdd from "../components/ButtonAdd";
import Post from "../components/fullpost/Post";
import Comments from "../components/fullpost/Comments";
import { getCommentsByPost, getPostById } from "../api/api";

const postLoader = async ({ params }) => {
  const id = params.id;

  return defer({
    post: await getPostById(id),
    id,
    comments: getCommentsByPost(id),
  });
};

const Singlepage = () => {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="post__container">
      <ButtonAdd text="Go back" onClick={goBack} />
      <Suspense fallback={<h2>Post is loading...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <Suspense fallback={<h2>Comments is loading...</h2>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
      <Link to={`/posts/id/${id}/edit`} style={{textDecoration: 'underline'}} className="post__link--edit">Edit this post</Link>
    </div>
  );
};

export { Singlepage, postLoader };
