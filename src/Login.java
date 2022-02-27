package ChecklistApp;
public class Login implements LoginInterface {
    String emailAddress = "";
    String firstName = "";
    String lastName = "";
    String userName = "";
    String password = "";

    public int login(String username, String password) {
        // compare username and password to database. If it matches an entry return a positive login code (code 200)
        // else return error code
        // if login is successful send a redirect code as well to log them into main page.
        return 0;
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
