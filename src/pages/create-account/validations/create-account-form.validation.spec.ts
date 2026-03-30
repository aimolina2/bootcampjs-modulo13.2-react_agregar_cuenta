import { Account } from "../create-account.vm";
import { vi } from "vitest";
import * as createAccountFieldValidation from "./create-account-field.validation";
import { validateForm } from "./create-account-form.validation";

describe("create-account-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are correct", () => {
      // Arrange
      const account: Account = {
        type: "1",
        name: "My Account",
      };
      vi.spyOn(
        createAccountFieldValidation,
        "validateTypeField",
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        createAccountFieldValidation,
        "validateNameField",
      ).mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: "",
      });
    });
    it("should return false when validateTypeField is empty ", () => {
      // Arrange
      const account: Account = {
        type: "",
        name: "My Account",
      };
      vi.spyOn(
        createAccountFieldValidation,
        "validateTypeField",
      ).mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });
      vi.spyOn(
        createAccountFieldValidation,
        "validateNameField",
      ).mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "Error",
        name: "",
      });
    });
    it("should return false when valitadeNameField is empty", () => {
      // Arrange
      const account: Account = {
        type: "1",
        name: "",
      };
      vi.spyOn(
        createAccountFieldValidation,
        "validateTypeField",
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        createAccountFieldValidation,
        "validateNameField",
      ).mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: "Error",
      });
    });
  });
});
