package ChecklistApp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Register implements RegisterInterface  {
    String url = "jdbc:postgresql://localhost:5432/ICSI418Y";
    String dbUsername = "postgres";
    String password = "database1";
    int userID;

    /**
     * Function to establish a connection between the JDBC driver and the Postgresql Database.
     * @param query
     * @throws SQLException
     */
    public void dbConnection(String query) throws SQLException{
        Connection con = DriverManager.getConnection(url,dbUsername,password);
        Statement statement = con.createStatement();
        ResultSet resultFromDB = statement.executeQuery(query);
    }

    /**
     * Function to set an email address attribute in the sql database.
     * @param emailAddress
     * @return
     * @throws SQLException
     */
    public int setEmailAttribute(String emailAddress) throws SQLException {
        try {
            String queryForEmail = "UPDATE usersDatabase SET userEmail = " + emailAddress + "WHERE userID =" + userID + ";";
            dbConnection(queryForEmail);
        } catch(SQLException e){
            return 500;
        }
        return 200;
        // set the email attribute in the database. //Complete
        // if successful return code 200.//Complete
        // else return server error.//Complete
    }

    /**
     * Function to set the first name attribute in the sql database.
     * @param firstname
     * @return
     */
    public int setFirstNameAttribute(String firstname){
        try {
            String queryForFirstName = "UPDATE usersDatabase SET userFirstName = " + firstname + "WHERE userID =" + userID + ";";
            dbConnection(queryForFirstName);
        } catch(SQLException e){
            return 500;
        }
        return 200;
        // set the user firstname in the database. //Complete
        // if successful return code 200.//Complete
        // else return server error.//Complete
    }

    /**
     * Function to set the last name attribute in the sql database.
     * @param lastname
     * @return
     */
    public int setLastNameAttribute(String lastname) {
        try {
            String queryForName = "UPDATE usersDatabase SET userLastName = " + lastname + "WHERE userID =" + userID + ";";
            dbConnection(queryForName);
        } catch(SQLException e){
            return 500;
        }
        return 200;
        // set the user last name in the database. //Complete
        // if successful return code 200.//Complete
        // else return server error.//Complete
    }

    /**
     * Function to set the password attribute in the sql database.
     * @param password
     * @return
     */
    public int setPassAttribute(String password){
        try {
            String queryForPass = "UPDATE usersDatabase SET userPass = " + password + "WHERE userID =" + userID + ";";
            dbConnection(queryForPass);
        } catch(SQLException e){
            return 500;
        }
        return 200;
        // set the password with the correct data entry.
        // if successful return code 200
        // else return server error.
    }

}
