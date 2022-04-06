package ChecklistApp;

import org.springframework.data.repository.CrudRepository;
import ChecklistApp.Account;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends CrudRepository<Account,Integer> {
    Account findByUserEmailAddress(String emailAddress);
}
