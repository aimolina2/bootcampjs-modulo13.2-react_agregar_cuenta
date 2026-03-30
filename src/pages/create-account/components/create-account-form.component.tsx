import React from "react";
import {
  Account,
  AccountError,
  createEmptyAccountError,
  createEmptyAccountVm,
} from "../create-account.vm";
import { validateForm } from "../validations";

import classes from "./create-account-form.component.module.css";

interface Props {
  newAccount: Account;
  onCreateAccount: (newAccountInfo: Account) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { onCreateAccount } = props;
  const [account, setAccount] = React.useState<Account>(createEmptyAccountVm());

  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError(),
  );

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onCreateAccount(account);
    }
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
      <form onSubmit={handleCreateAccount}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              id=""
              onChange={handleFieldChange}
              value={account.type}
              className={classes.accountSelect}
            >
              <option value="">Seleccionar</option>
              <option value="1">Cuenta corriente</option>
              <option value="2">Ahorro</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              type="text"
              name="name"
              id=""
              onChange={handleFieldChange}
              className={classes.medium}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          GUARDAR
        </button>
      </form>
    </div>
  );
};
