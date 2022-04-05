package ChecklistApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
        accountRepository.save(newAccount);
        return 200; //return successful code 200
    }

    @PostMapping(path = "/login")
    public @ResponseBody Integer loginToUserAccount(@RequestParam("emailAddress")String emailAddress,
                                                    @RequestParam("password") String password){
        
        return 200; // return successful code 200
    }




}
