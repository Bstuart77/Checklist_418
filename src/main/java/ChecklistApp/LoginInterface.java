package ChecklistApp;
import java.sql.ResultSet;
import java.sql.SQLException;

public interface LoginInterface {
    ResultSet dbConnect(String query) throws SQLException;
    int login(String username, String password);
    int getEmailAttribute(String emailAddress);
    int getFirstNameAttribute(String firstname);
    int getLastNameAttribute(String lastname);
    int getUserAttribute(String username);
    int getPassAttribute(String password);
}
