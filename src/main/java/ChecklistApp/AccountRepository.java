package ChecklistApp;

import org.springframework.data.repository.CrudRepository;
import ChecklistApp.Account;

public interface AccountRepository extends CrudRepository<Account,Integer> {

}
