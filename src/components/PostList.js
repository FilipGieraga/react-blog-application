import PostItem from "./PostItem";

function PostList(props) {
  return (
    <div className="row">
      {props.postDetails.map((item) => (
        <PostItem
          id={item.id}
          key={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          createdDate={item.createdDate}
        />
      ))}
    </div>
  );
}
export default PostList;
