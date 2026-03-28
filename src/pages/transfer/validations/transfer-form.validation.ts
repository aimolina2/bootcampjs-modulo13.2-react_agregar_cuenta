import { FormValidationResult } from "@/common/validations/validation.model";
import { TransferError, TransferVm } from "../transfer.vm";
import {
  validateAccountIdField,
  validateAmountField,
  validateConceptField,
  validateEmailField,
  validateIbanField,
  validateNameField,
  validateNotesField,
  validateRealDataTransferField,
} from "./transfer-field.validation";

export const validateForm = (
  transfer: TransferVm,
): FormValidationResult<TransferError> => {
  const fieldValidationResults = [
    validateAccountIdField(transfer.accountId),
    validateIbanField(transfer.iban),
    validateNameField(transfer.name),
    validateAmountField(transfer.amount),
    validateConceptField(transfer.concept),
    validateNotesField(transfer.notes),
    validateRealDataTransferField(transfer.realDateTransfer),
    validateEmailField(transfer.email),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      accountId: fieldValidationResults[0].errorMessage ?? "",
      iban: fieldValidationResults[1].errorMessage ?? "",
      name: fieldValidationResults[2].errorMessage ?? "",
      amount: fieldValidationResults[3].errorMessage ?? "",
      concept: fieldValidationResults[4].errorMessage ?? "",
      notes: fieldValidationResults[5].errorMessage ?? "",
      realDateTransfer: fieldValidationResults[6].errorMessage ?? "",
      email: fieldValidationResults[7].errorMessage ?? "",
      dateTranfer: "",
    },
  };
};
