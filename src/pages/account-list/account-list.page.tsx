import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { getAccountList } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result)),
    );
  }, []);

  const handleAddNewAccount = () => {
    navigate(appRoutes.createAccount);
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <button onClick={handleAddNewAccount}>AGREGAR NUEVA CUENTA</button>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
