import React from "react";
import classes from "./movement-list-header.component.module.css";
import { Account } from "../api";

interface Props {
  accountInfo: Account;
}

export const MovementListHeader: React.FC<Props> = (props) => {
  const { accountInfo } = props;

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h1>Saldos y últimos movimientos</h1>
        <div className={classes.balanceData}>
          <h3>SALDO DISPONIBLE</h3>
          <p className={classes.balanceEuros}>{accountInfo.balance}</p>
        </div>
      </div>
      <div className={classes.accountContainer}>
        <p>Alias: {accountInfo.name}</p>
        <p>IBAN: {accountInfo.iban}</p>
      </div>
    </div>
  );
};
