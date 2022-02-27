
public interface LoginInterface {
    int login(String username, String password);
    int getEmailAttribute(String emailAddress);
    int getNameAttribute(String firstname, String lastname);
    int getUserAttribute(String username);
    int getPassAttribute(String password);
}
