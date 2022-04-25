package ChecklistApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping(path = "/account")
public class AccountRestController {
    @Autowired

    private AccountRepository accountRepository; //initialize the repository

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/register")
    public @ResponseBody Account registerNewUser (@RequestParam("emailAddress")String emailAddress,
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
        return newAccount;
    }

    @GetMapping(path = "/login")
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
    @GetMapping(path = "/locateEmail")
    public @ResponseBody Integer locateAccountByEmail(@RequestParam("emailAddress")String emailAddress){
        Account findAccount = accountRepository.findByUserEmailAddress(emailAddress);
        if(!findAccount.getUserEmailAddress().equals(emailAddress)){ //account does not exist.
            return 401; // authorization failure.
        }else{
            return 200; // account exists

        }
    }
    @PostMapping(path = "/resetPassword")
    public @ResponseBody Integer resetPassword(@RequestParam("emailAddress")String emailAddress,
                                               @RequestParam("newPassword")String newPassword){
        Account locateAccount = accountRepository.findByUserEmailAddress(emailAddress);
        if(!locateAccount.getUserEmailAddress().equals(emailAddress)){
            return 401;
        }else{
            locateAccount.setUserPass(newPassword);
            return 200;
        }

    }






}
