
public interface LoginInterface {
    void register(String email, String FN, String LN, String UN, String pass);
    int login(String username, String password);
    int setEmailAttribute(String emailAddress);
    int setNameAttribute(String firstname, String lastname);
    int setUserAttribute(String username);
    int setPassAttribute(String password);
}
