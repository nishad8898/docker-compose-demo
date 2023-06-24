/* eslint-disable react/prop-types */
import { deleteTask } from "../../api/task";
import "./ListItem.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ListItem = ({ item, index }) => {
  const queryClient = useQueryClient();

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["task"], { exact: true });
    },
  });

  const handleDelete = (item) => {
    deleteTaskMutation.mutate(item._id);
  };

  return (
    <div className="list-card">
      <div className="list-card-sr">
        <p>{index + 1}</p>
      </div>
      <div className="list-card-title">
        <p>{item.name}</p>
      </div>
      <div className="list-card-delete" onClick={() => handleDelete(item)}>
        delete
      </div>
    </div>
  );
};

export default ListItem;
