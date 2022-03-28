package ChecklistApp;

import java.sql.SQLException;

public interface RegisterInterface{
    void dbConnection(String query) throws SQLException;
    int setEmailAttribute(String emailAddress) throws SQLException;
    int setFirstNameAttribute(String firstName);
    int setLastNameAttribute(String lastName);
    int setPassAttribute(String password);

}
