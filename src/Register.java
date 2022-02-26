package ChecklistApp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Register implements RegisterInterface  {
    String url = "jdbc:postgresql://localhost:5432/postgres";
    String dbUsername = "postgres";
    String password = "database1";
    int userID;

    public void dbConnection(String query) throws SQLException{
        Connection con = DriverManager.getConnection(url,dbUsername,password);
        Statement statement = con.createStatement();
        ResultSet resultFromDB = statement.executeQuery(query);
    }

    public int setEmailAttribute(String emailAddress) throws SQLException {
        String queryForEmail = "UPDATE userInfo SET EmailAddress = " + emailAddress + "WHERE userID =" + userID + ";";
        dbConnection(queryForEmail);
        // set the email attribute in the database.
        // if successful return code 200.
        // else return server error.
        return 0;
    }

    public int setNameAttribute(String firstname, String lastname) {
        // set the first and last name attribute in the database.
        // if successful return code 200
        // else return server error.
        return 0;
    }
    public int setUserAttribute(String username){
        // set the username with the correct data entry.
        // if successful return code 200
        // else return server error.
        return 0;
    }
    public int setPassAttribute(String password){
        // set the password with the correct data entry.
        // if successful return code 200
        // else return server error.
        return 0;
    }

}
