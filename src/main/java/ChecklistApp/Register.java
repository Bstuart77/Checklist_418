package ChecklistApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.*;


@RestController
public class Register implements RegisterInterface  {
    String url = "jdbc:postgresql://localhost:5432/ICSI418Y";
    String dbUsername = "postgres";
    String password = "database1";
    int userID;

    @Autowired
    JdbcTemplate jdbcTemplate;

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
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public int setEmailAttribute(@RequestParam("emailAddress")String emailAddress) throws SQLException {
        try {
            jdbcTemplate.execute("UPDATE usersDatabase SET userEmail = " + emailAddress + "WHERE userID =" + userID);
        } catch(Exception e){
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
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public int setFirstNameAttribute(@RequestParam("firstName")String firstname){
        try {
            jdbcTemplate.execute("UPDATE usersDatabase SET userFirstName = " + firstname + "WHERE userID =" + userID);
        } catch(Exception e){
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
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public int setLastNameAttribute(@RequestParam("lastName")String lastname) {
        try {
            jdbcTemplate.execute("UPDATE usersDatabase SET userLastName = " + lastname + "WHERE userID =" + userID);
        } catch(Exception e){
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
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public int setPassAttribute(@RequestParam("password") String password){
        try {
            jdbcTemplate.execute("UPDATE usersDatabase SET userPass = " + password + "WHERE userID =" + userID);
        } catch(Exception e){
            return 500;
        }
        return 200;
        // set the password with the correct data entry.
        // if successful return code 200
        // else return server error.
    }

}
