package ChecklistApp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Account {
    private Integer userID;
    private String userFirstName;
    private String userLastName;
    private String userEmailAddress;
    private String userPass;


    public Integer getUserID(){
        return userID;
    }
    public String getUserFirstName() {
        return userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }
    public String getUserPass() {
        return userPass;
    }

    public String getUserEmailAddress() {
        return userEmailAddress;
    }
    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public void setUserEmailAddress(String userEmailAddress) {
        this.userEmailAddress = userEmailAddress;
    }
    public void setUserPass(String userPass) {
        this.userPass = userPass;
    }

}
