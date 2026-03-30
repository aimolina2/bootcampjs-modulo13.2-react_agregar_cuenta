import React from "react";
import { Account, createEmptyAccountVm } from "../create-account.vm";

interface Props {
  newAccount: Account;
  onCreateAccount: (newAccountInfo: Account) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { onCreateAccount } = props;
  const [account, setAccount] = React.useState<Account>(createEmptyAccountVm());

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateAccount(account);
    console.log("va");
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleCreateAccount}>
        <div>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              id=""
              onChange={handleFieldChange}
              value={account.type}
            >
              <option value="">Seleccionar</option>
              <option value="1">Cuenta corriente</option>
              <option value="2">Ahorro</option>
            </select>
          </div>
          <div>
            <label>Alias:</label>
            <input type="text" name="name" id="" onChange={handleFieldChange} />
          </div>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};
