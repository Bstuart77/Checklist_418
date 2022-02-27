
import java.sql.*;

public class Login implements LoginInterface {

    // JDBC Driver
    final String JDBC_DRIVER = "";
    // Database URL
    final String DB_URL = "jdbc:postgresql://localhost:5432/ICSI418Y";
    // Database Username
    final String DB_USERNAME = "postgres";
    // Database Password
    final String DB_PASS = "database1";

    public ResultSet dbConnect(String query) throws SQLException {
        Connection connect = DriverManager.getConnection(DB_URL,DB_USERNAME,DB_PASS);
        Statement statement = connect.createStatement();
        return statement.executeQuery(query);
    }


    public int login(String username, String password) {
        // compare username and password to database. If it matches an entry return a positive login code (code 200)
        // else return error code
        // if login is successful send a redirect code as well to log them into main page.
        try {
            String query = "SELECT userPass FROM usersDatabase WHERE userID =" + username;
            ResultSet passwordResult = dbConnect(query);
            String storedPassword = passwordResult.getString("userPass");

            if(storedPassword.equals(password)){
                return 200;
            } else {
                return 500;
            }
        } catch (SQLException e) {
            return 500;
        }
    }

    public int getEmailAttribute(String emailAddress) {
        // get the email attribute in the database.
        // if successful return code 200.
        // else return server error.
        return 0;
    }

    public int getNameAttribute(String firstname, String lastname) {
        // get the first and last name attribute in the database.
        // if successful return code 200
        // else return server error.
        return 0;
    }
    public int getUserAttribute(String username){
        // get the username with the correct data entry.
        // if successful return code 200
        // else return server error.
        return 0;
    }
    public int getPassAttribute(String password){
        // get the password with the correct data entry.
        // if successful return code 200
        // else return server error.
        return 0;
    }

}
