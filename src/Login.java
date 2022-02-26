package ChecklistApp;
public class Login {
    String emailAddress = "";
    String firstName = "";
    String lastName = "";
    String userName = "";
    String password = "";

    public void register(String email, String FN, String LN, String UN, String pass) {
        // send all params to database with a new entry.

    }

    public int login(String username, String password){

        // compare username and password to database. If it matches an entry return a positive login code (code 200)
        // else return error code
        // if login is successful send a redirect code as well to log them into main page.
        return 0;
    }

    public int setEmailAttribute(String emailAddress) {
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