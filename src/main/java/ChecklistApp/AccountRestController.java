package ChecklistApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/account")
public class AccountRestController {
    @Autowired

    private AccountRepository accountRepository; //initialize the repository

    @PostMapping(path = "/register")
    public @ResponseBody Integer registerNewUser (@RequestParam("emailAddress")String emailAddress,
                                                  @RequestParam("firstName") String firstName,
                                                  @RequestParam("lastName") String lastName,
                                                  @RequestParam("password") String password){

        Account newAccount = new Account();
        newAccount.setUserFirstName(firstName);
        newAccount.setUserLastName(lastName);
        newAccount.setUserEmailAddress(emailAddress);
        newAccount.setUserPass(password);
        newAccount.setUserPoints(0);
        accountRepository.save(newAccount);
        Integer uID = newAccount.getUserID();
        return uID; //return successful code 200
    }

    @PostMapping(path = "/login")
    public @ResponseBody Integer loginToUserAccount(@RequestParam("emailAddress")String emailAddress,
                                                    @RequestParam("password") String password){

        Account DBAccount = accountRepository.findByUserEmailAddress(emailAddress);
        if(DBAccount.getUserPass().equals(password)){
            return 200; // successful login
        }else{
            return 401; // authorization failure.
        }

    }
    @GetMapping(path = "/profile/points")
    public @ResponseBody Integer retrieveUserPointsAmount(@RequestParam("emailAddress")String emailAddress){
        Account getDBAccount = accountRepository.findByUserEmailAddress(emailAddress);
        if(!getDBAccount.getUserEmailAddress().equals(emailAddress)){ //account does not exist.
            return 401; // authorization failure.
        }else{
            return getDBAccount.getUserPoints();
        }
    }






}
