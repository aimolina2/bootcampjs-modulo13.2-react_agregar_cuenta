import React from "react";
import { Account, createEmptyAccountVm } from "../create-account.vm";

interface Props {
  newAccount: Account;
  onCreateAccount: (newAccountInfo: Account) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { newAccount, onCreateAccount } = props;
  const [] = React.useState<Account>(createEmptyAccountVm());

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateAccount(newAccount);
    console.log("va");
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleCreateAccount}>
        <div>
          <div>
            <label>Tipo de cuenta:</label>
            <select name="" id="">
              <option value="">Seleccionar</option>
              <option value="1">Cuenta corriente</option>
              <option value="2">Ahorro</option>
            </select>
          </div>
          <div>
            <label>Alias:</label>
            <input type="text" name="name" id="" />
          </div>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};
