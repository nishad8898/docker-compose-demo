import { useRef } from "react";
import "./InputBox.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creatTask } from "../../api/task";

function InputBox() {
  const queryClient = useQueryClient();
  const todoRef = useRef();

  const createTaskMutation = useMutation({
    mutationFn: creatTask,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["task"], { exact: true });
    },
  });

  const handleAdd = () => {
    if (!todoRef.current.value) return;
    createTaskMutation.mutate({ name: todoRef.current.value });
  };

  return (
    <div className="input-box">
      <div className="input-todo">
        <label>add to do :</label>
        <input type="text" name="to-do" ref={todoRef} />
        <div className="input-add" onClick={handleAdd}>
          add
        </div>
      </div>
    </div>
  );
}

export default InputBox;
