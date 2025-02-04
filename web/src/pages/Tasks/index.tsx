import { useState } from "react";

import { TaskList } from "../../components/TaskList";
import { Task } from "../../entities/Task";
import { PageWrapper } from "../../components/PageWrapper";

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Wash the windows", done: false },
    { id: 2, name: "Wash the floor", done: true },
    { id: 3, name: "Cook dinner", done: false },
  ]);

  const toggleTaskDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <PageWrapper>
      <TaskList tasks={tasks} toggleTaskDone={toggleTaskDone} />
    </PageWrapper>
  );
};
