import { TransferVm } from "../transfer.vm";
import { vi } from "vitest";
import * as transferFieldValidation from "./transfer-field.validation";
import { validateForm } from "./transfer-form.validation";

describe("transfer-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are correct", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "John Doe",
        amount: 1,
        concept: "Test",
        notes: "",
        realDateTransfer: undefined,
        email: "",
        dateTranfer: "",
      };

      vi.spyOn(transferFieldValidation, "validateIbanField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        },
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDataTransferField",
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(transfer);

      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "",
        amount: "",
        concept: "",
        notes: "",
        realDateTransfer: "",
        email: "",
        dateTranfer: "",
      });
    });

    it("should return false when validateNameField is incorrect", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "",
        amount: 1,
        concept: "Test",
        notes: "",
        email: "",
        dateTranfer: "",
      };
      vi.spyOn(transferFieldValidation, "validateIbanField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });

      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        },
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDataTransferField",
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });
      // Act
      const result = validateForm(transfer);
      // Assert

      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "Error",
        amount: "",
        concept: "",
        notes: "",
        realDateTransfer: "",
        email: "",
        dateTranfer: "",
      });
    });

    it("should return false when validateAmountField is negative", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "Jonh Doe",
        amount: -1,
        concept: "Test",
        notes: "",
        email: "",
        dateTranfer: "",
      };
      vi.spyOn(transferFieldValidation, "validateIbanField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        },
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDataTransferField",
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });
      // Act
      const result = validateForm(transfer);
      // Assert

      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "",
        amount: "Error",
        concept: "",
        notes: "",
        realDateTransfer: "",
        email: "",
        dateTranfer: "",
      });
    });

    it("should return false when validateEmailField is incorrect", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "Jonh Doe",
        amount: 1,
        concept: "Test",
        notes: "",
        email: "john@email",
        dateTranfer: "",
      };
      vi.spyOn(transferFieldValidation, "validateIbanField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        },
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDataTransferField",
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });
      // Act
      const result = validateForm(transfer);
      // Assert

      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "",
        amount: "",
        concept: "",
        notes: "",
        realDateTransfer: "",
        email: "Error",
        dateTranfer: "",
      });
    });
  });
});
