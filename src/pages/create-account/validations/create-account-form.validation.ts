import { Account, AccountError } from "../create-account.vm";
import { FormValidationResult } from "@/common/validations/validation.model";
import {
  validateNameField,
  validateTypeField,
} from "./create-account-field.validation";

export const validateForm = (
  account: Account,
): FormValidationResult<AccountError> => {
  const fieldValidationsResults = [
    validateTypeField(account.type),
    validateNameField(account.name),
  ];

  return {
    succeeded: fieldValidationsResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationsResults[0].errorMessage ?? "",
      name: fieldValidationsResults[1].errorMessage ?? "",
    },
  };
};
