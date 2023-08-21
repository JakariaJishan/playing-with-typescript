import { useState } from "react";
import PostCard from "./PostCard";
import Children from "./childern";
const PostList = () => {
  type status = "success" | "pending" | "failure";
  const [value, setValue] = useState<status>("success");
  const [inputVal, setInputVal] = useState("change me");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const names = [
    {
      first: "jack",
      last: "joe",
    },
    {
      first: "jonas",
      last: "jessica",
    },
  ];
  return (
    <div>
      data
      <Children>
        <PostCard names={names} />
      </Children>
      <button onClick={() => setValue("failure")}>change status</button>
      <input value={inputVal} onChange={handleChange} />
      <p>{inputVal}</p>
    </div>
  );
};

export default PostList;
