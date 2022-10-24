import { useRouter } from "next/router";

const BlogPosts = () => {
  const router = useRouter();
  //   console.log(router);
  const id = router.query._id;
  return (
    <div>
      <h1>Dynamic page works no {id}</h1>
    </div>
  );
};

export default BlogPosts;
