import React, { FC, useEffect, useState } from "react";
import { useStore } from "react-redux";
import { IPosts } from "../../models/IPosts";
import { postService } from "../../service/postService";
import { PostItem } from "../post-item/PostItem";
import cl from "./styles.module.css";

// interface PostInterface {

// }

export const PostContainer = () => {
  const [limit, setLimit] = useState(100);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(5);
  //   }, 2000);
  // }, []);

  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postService.useFetchAllPostsQuery(limit);

  const [createPost, {}] = postService.usePushPostMutation();
  const [refreshPost, {}] = postService.useRefreshPostMutation();
  const [deletePost, {}] = postService.useDeletePostMutation();

  const handleCreate = async () => {
    const post = prompt();
    await createPost({
      title: post,
      body: post,
    } as IPosts);
  };

  const handleEdit = (post: IPosts) => {
    refreshPost(post);
  };

  const handleDelete = (post: IPosts) => {
    deletePost(post);
  };

  return (
    <div style={cl}>
      <button onClick={handleCreate}>Create</button>
      {posts &&
        posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            edit={handleEdit}
            remove={handleDelete}
          />
        ))}
    </div>
  );
};
