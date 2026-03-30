import { AppLayout } from "@/layouts";
import React from "react";
import { Account } from "./create-account.vm";
import { CreateAccountFormComponent } from "./components";
import classes from "./create-account.page.module.css";

const createAccountMock: Account = { type: "Cuenta corriente", name: "coche" };

export const CreateAccountPage: React.FC = () => {
  const [accounts, setAccounts] = React.useState<Account>({
    type: "",
    name: "",
  });

  React.useEffect(() => {
    setAccounts(createAccountMock);
  }, []);

  const handleCreateAccount = (newAccountInfo: Account) => {
    console.log("Creating account with info:", newAccountInfo);
  };
  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>

        <CreateAccountFormComponent
          newAccount={accounts}
          onCreateAccount={handleCreateAccount}
        />
      </div>
    </AppLayout>
  );
};
