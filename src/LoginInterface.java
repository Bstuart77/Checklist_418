
public interface LoginInterface {
    int login(String username, String password);
    int getEmailAttribute(String emailAddress);
    int getFirstNameAttribute(String firstname);
    int getLastNameAttribute(String lastname);
    int getUserAttribute(String username);
    int getPassAttribute(String password);
}
