package ChecklistApp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;

@Entity
public class Task {

    private String title;
    private String description;

    private Date startDate;
    private Date endDate;

    public String getTitle(){ 
        return this.title;
    }

    public String getDescription(){
        return this.description;
    }

    public Date getStartDate(){
        return this.startDate;
    }

    public Date getEndDate(){
        return this.endDate;
    }


    public void setTitle(String title){
        this.title = title;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setStartDate(String startDate) throws ParseException{
        this.startDate = new SimpleDateFormat("MM/dd/yy").parse(startDate);
    }

    public void setEndDate(String endDate) throws ParseException{
        this.endDate = new SimpleDateFormat("MM/dd/yy").parse(endDate);
    }

}
