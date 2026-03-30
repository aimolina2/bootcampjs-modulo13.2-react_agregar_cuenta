import { AppLayout } from "@/layouts";
import React from "react";
import { Account } from "./create-account.vm";
import { CreateAccountFormComponent } from "./components";

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
      <div>Create New Account</div>
      <CreateAccountFormComponent
        newAccount={accounts}
        onCreateAccount={handleCreateAccount}
      />
    </AppLayout>
  );
};
