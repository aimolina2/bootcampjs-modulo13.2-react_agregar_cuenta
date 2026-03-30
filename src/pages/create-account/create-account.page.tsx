import { AppLayout } from "@/layouts";
import React from "react";
import { Account } from "./create-account.vm";
import { CreateAccountFormComponent } from "./components";
import classes from "./create-account.page.module.css";
import { saveAccount } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const CreateAccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [accounts] = React.useState<Account>({
    type: "",
    name: "",
  });

  const handleCreateAccount = (newAccountInfo: Account) => {
    saveAccount(newAccountInfo).then((result) => {
      if (result) {
        alert("Cuenta creada correctamente");
        navigate(appRoutes.accountList);
      } else {
        alert("Error al crear la cuenta");
      }
    });
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
