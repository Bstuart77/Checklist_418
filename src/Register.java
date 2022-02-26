package ChecklistApp;

public class Register implements RegisterInterface {


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
