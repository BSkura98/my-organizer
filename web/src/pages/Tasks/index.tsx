import { useQuery } from "@tanstack/react-query";

import { TaskList } from "../../components/TaskList";
import { PageWrapper } from "../../components/PageWrapper";
import { getTasks } from "../../api/tasks/getTasks";

export const Tasks = () => {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => await getTasks(),
  });

  const toggleTaskDone = (id: number) => {
    // TODO implement function
  };

  return (
    <PageWrapper>
      {query.isLoading && <p>Loading...</p>}
      {query.data && (
        <TaskList tasks={query.data} toggleTaskDone={toggleTaskDone} />
      )}
    </PageWrapper>
  );
};
