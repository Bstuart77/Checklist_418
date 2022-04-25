package ChecklistApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Date;

@CrossOrigin
@Controller
@RequestMapping(path = "/tasks")
public class TaskRestController {
    @Autowired

    private TaskRepository taskRepository;

    @PostMapping(path = "/addTask")
    public @ResponseBody Task createNewTask(@RequestParam("title")String title,
                                         @RequestParam("startDate") Date startDate,
                                         @RequestParam("endDate") Date endDate,
                                         @RequestParam("description") String description){
        Task newTask = new Task();
        newTask.setTitle(title);
        newTask.setDescription(description);
        newTask.setStartDate(startDate);
        newTask.setEndDate(endDate);
        return newTask;

    }

    @GetMapping(path = "/findTask")
    public @ResponseBody Integer findTask(@RequestParam("title") String title){

        Task DBTask = taskRepository.findTaskByTitle(title);
        if(DBTask.getTitle().equals(title)){
            return 200; // successful match
        }else{
            return 404; //task not found
        }

    }

}
