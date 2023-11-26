import { Suspense, useEffect } from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  Await,
  json,
} from "react-router-dom";
import { BlogFilter } from "../components/BlogFilter";
import { motion } from "framer-motion";
import ButtonAdd from "../components/ButtonAdd";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber, setTotalPages } from "../store/slice";

const Blogpage = () => {
  const { pageNumber } = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  const { posts, totalCount } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    dispatch(setTotalPages(totalCount));
  }, []);

  const onClick = (num) => {
    dispatch(setPageNumber(num));
  };

  const lastPageCallback = () => {
    dispatch(setPageNumber(Math.ceil(totalCount / 9)));
  };

  return (
    <motion.div className="blog-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
      >
        Our news
      </motion.h1>

      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />

      <Link to="/posts/new" >
        <ButtonAdd text="Add new post" />
      </Link>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <div className="container-posts">
              {resolvedPosts
                .filter(
                  (post) =>
                    post.title.includes(postQuery) && post.id >= startsFrom
                )
                .map((post) => (
                  <div className="post" key={post.id}>
                    <div className="content">
                      <p className="heading"> {post.title}</p>
                      <p className="para">{post.body}</p>
                      <Link to={`/posts/id/${post.id}`}>
                        <button className="btn">Read more</button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </Await>
      </Suspense>

      <Pagination
        totalPages={Math.ceil(totalCount / 9)}
        pageNumber={pageNumber}
        onClick={onClick}
        lastPageCallback={lastPageCallback}
      />
    </motion.div>
  );
};

async function getPosts(limit, page) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );

  if (!res.ok) {
      throw new Response('', {status: res.status, statusText: 'Not found!!!'})
  }
  
  const posts = await res.json();
  return { posts: posts, totalCount: res.headers.get("x-total-count") };
}

const blogLoader = async ({ params }) => {
  const page = params.page;
  const data = await getPosts(9, page);
  const posts = data.posts;
  const totalCount = data.totalCount;

  if (!posts.length) {
    throw json({ message: "Not Found", reason: "Wrong url" }, { status: 404 });
  }

  return {
    posts,
    totalCount,
  };
};

export { Blogpage, blogLoader };
