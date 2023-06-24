/* eslint-disable react/prop-types */
import ListItem from "../ListItem/ListItem";
import "./ListCollection.scss";
import { getAllTask } from "../../api/task";
import { useQuery } from "@tanstack/react-query";

function ListCollection({ title }) {
  const taskQuery = useQuery({
    queryKey: ["task"],
    queryFn: getAllTask,
    onError: (error) => console.log(error),
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="list-box">
      <div className="list-title">{title}</div>
      <div className="list-to-do">
        <div className="list-collection">
          {!taskQuery.isLoading ? (
            taskQuery?.data.length ? (
              taskQuery?.data.map((el, i) => (
                <ListItem key={i} index={i} item={el} />
              ))
            ) : (
              // eslint-disable-next-line react/no-unescaped-entities
              <div className="no-items">no todo's 🙌</div>
            )
          ) : (
            <div className="no-items">Loading... 🙌</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListCollection;
