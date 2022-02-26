package ChecklistApp;

import java.sql.SQLException;

public interface RegisterInterface{
    void dbConnection(String query) throws SQLException;
    int setEmailAttribute(String emailAddress) throws SQLException;
    int setNameAttribute(String firstName, String lastName);
    int setUserAttribute(String username);
    int setPassAttribute(String password);

}
