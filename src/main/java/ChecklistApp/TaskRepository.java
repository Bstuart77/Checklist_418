package ChecklistApp;

import org.springframework.data.repository.CrudRepository;
import ChecklistApp.Task;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task,Integer>{
    Task findTaskByTitle(String title);
}
