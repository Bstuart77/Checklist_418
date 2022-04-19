package ChecklistApp;

import javax.persistence.*;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userID;

    private String userFirstName;
    private String userLastName;

    private Integer userPoints;

    @Column(unique = true)
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

    public Integer getUserPoints() {
        return userPoints;
    }
    public void setUserPoints(Integer userPoints) {
        this.userPoints = userPoints;
    }


}
