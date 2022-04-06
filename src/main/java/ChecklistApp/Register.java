//package ChecklistApp;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.web.bind.annotation.*;
//
//
//public class Register {
//    int userID;
//
//    @Autowired
//    JdbcTemplate jdbcTemplate;
//
//
//    @RequestMapping(method = RequestMethod.POST,path = "/register")
//    public void register(@RequestParam("emailAddress")String emailAddress,
//                         @RequestParam("firstName") String firstName,
//                         @RequestParam("lastName") String lastName,
//                         @RequestParam("password") String password){
//        jdbcTemplate.execute("UPDATE usersDatabase SET userEmail = " + emailAddress + "WHERE userID =" + userID);
//        jdbcTemplate.execute("UPDATE usersDatabase SET userFirstName = " + firstName + "WHERE userID =" + userID);
//        jdbcTemplate.execute("UPDATE usersDatabase SET userLastName = " + lastName + "WHERE userID =" + userID);
//        jdbcTemplate.execute("UPDATE usersDatabase SET userPass = " + password + "WHERE userID =" + userID);
//
//
//    }

//    /**
//     * Function to set an email address attribute in the sql database.
//     * @param emailAddress
//     * @return
//     * @throws SQLException
//     */
//    @RequestMapping(method = RequestMethod.POST, path = "/register")
//    public int setEmailAttribute(@RequestParam("emailAddress")String emailAddress) throws SQLException {
//        try {
//
//        } catch(Exception e){
//            return 500;
//        }
//        return 200;
//        // set the email attribute in the database. //Complete
//        // if successful return code 200.//Complete
//        // else return server error.//Complete
//    }
//
//    /**
//     * Function to set the first name attribute in the sql database.
//     * @param firstname
//     * @return
//     */
//    @RequestMapping(method = RequestMethod.POST, path = "/register")
//    public int setFirstNameAttribute(@RequestParam("firstName")String firstname){
//        try {
//
//        } catch(Exception e){
//            return 500;
//        }
//        return 200;
//        // set the user firstname in the database. //Complete
//        // if successful return code 200.//Complete
//        // else return server error.//Complete
//    }
//
//    /**
//     * Function to set the last name attribute in the sql database.
//     * @param lastname
//     * @return
//     */
//    @RequestMapping(method = RequestMethod.POST, path = "/register")
//    public int setLastNameAttribute(@RequestParam("lastName")String lastname) {
//        try {
//
//        } catch(Exception e){
//            return 500;
//        }
//        return 200;
//        // set the user last name in the database. //Complete
//        // if successful return code 200.//Complete
//        // else return server error.//Complete
//    }
//
//    /**
//     * Function to set the password attribute in the sql database.
//     * @param password
//     * @return
//     */
//    @RequestMapping(method = RequestMethod.POST, path = "/register")
//    public int setPassAttribute(@RequestParam("password") String password){
//        try {
//
//        } catch(Exception e){
//            return 500;
//        }
//        return 200;
//        // set the password with the correct data entry.
//        // if successful return code 200
//        // else return server error.
//    }

//}
