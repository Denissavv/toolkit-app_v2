import { useEffect } from "react";
import "./App.css";
import { PostContainer } from "./components/post-component/PostContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/redusers/ActionCreators";
import { userSlice } from "./store/redusers/UserSlise";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div style={{ flex: "flex" }}>
      <PostContainer />
    </div>
  );
}

export default App;
