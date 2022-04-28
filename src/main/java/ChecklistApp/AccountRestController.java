package ChecklistApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@CrossOrigin(origins = {"*"})
@Controller
@RequestMapping(path = "/account")
public class AccountRestController {
    @Autowired

    private AccountRepository accountRepository; //initialize the repository

    @PostMapping(path = "/register")
    public @ResponseBody Integer registerNewUser (@RequestBody Map<String, String> requestBody){
//        ("emailAddress")String emailAddress,
//        @RequestParam("firstName") String firstName,
//        @RequestParam("lastName") String lastName,
//        @RequestParam("password") String password){
    
        Account newAccount = new Account();
        newAccount.setUserFirstName(requestBody.get("firstName"));
        newAccount.setUserLastName(requestBody.get("lastName"));
        newAccount.setUserEmailAddress(requestBody.get("emailAddress"));
        newAccount.setUserPass(requestBody.get("password"));
        newAccount.setUserPoints(0);
        if(checkIfEmailExists(requestBody.get("emailAddress"))){
            return 400;
        }
        accountRepository.save(newAccount);
        return 200;
    }

    @GetMapping(path = "/login")
    public @ResponseBody Integer loginToUserAccount(@RequestParam("emailAddress")String emailAddress,
                                                    @RequestParam("password") String password){

        Account DBAccount = accountRepository.findByUserEmailAddress(emailAddress);
        if(DBAccount == null){
            return 400;
        }
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
    public boolean checkIfEmailExists(String emailAddress){
        
        Account checkingDB = accountRepository.findByUserEmailAddress(emailAddress);
        if(checkingDB == null){
            return false;
        }else{
            return true;
        }
    }






}
