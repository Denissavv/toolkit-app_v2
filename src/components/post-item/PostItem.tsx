import React, { FC } from "react";
import { IPosts } from "../../models/IPosts";

interface PostItemProps {
  post: IPosts;
  edit: (post: IPosts) => void;
  remove: (post: IPosts) => void;
}

export const PostItem: FC<PostItemProps> = ({ post, edit, remove }) => {
  const handleDeletePost = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };
  const habdleUpdatePost = (event: React.MouseEvent) => {
    const title = prompt() || "";
    edit({ ...post, title });
  };

  return (
    <div
      style={{
        width: 250,
        height: 60,
        border: "solid",
        borderRadius: 12,
      }}
    >
      <div
        style={{ flexDirection: "row", alignItems: "center" }}
        onClick={habdleUpdatePost}
      >
        <p>
          {post.id}.{post.title}
        </p>
        <button onClick={handleDeletePost}>DELETE</button>
      </div>
    </div>
  );
};
