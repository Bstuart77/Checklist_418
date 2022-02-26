package ChecklistApp;

public interface RegisterInterface {
    int setEmailAttribute(String emailAddress);
    int setNameAttribute(String firstName, String lastName);
    int setUserAttribute(String username);
    int setPassAttribute(String password);

}
