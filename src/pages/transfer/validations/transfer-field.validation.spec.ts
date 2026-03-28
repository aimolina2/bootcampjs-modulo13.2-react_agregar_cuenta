import {
  INVALID_EMAIL_MESSAGE,
  INVALID_REAL_DATE_TRANSFER_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
  INVALID_AMOUNT_MESSAGE,
  INVALID_IBAN_MESSAGE,
} from "@/common/validations/validation.const";
import {
  validateIbanField,
  validateAccountIdField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  validateRealDataTransferField,
  validateEmailField,
} from "./transfer-field.validation";

describe("transfer-field.validation specs", () => {
  describe("validateEmailField specs", () => {
    it("should return true when email is not informed", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateEmailField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when email is not well informed", () => {
      // Arrange
      const value = "jonh@email";

      // Act
      const result = validateEmailField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_EMAIL_MESSAGE);
    });
    it("should return true when email is well informed", () => {
      // Arrange
      const value = "jonh@gmail.com";

      // Act
      const result = validateEmailField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateRealDataTransferField specs", () => {
    it("should return true when date transfer is not informed", () => {
      // Arrange
      const value = undefined;

      // Act
      const result = validateRealDataTransferField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when date transfer is before today", () => {
      // Arrange
      const value = new Date();
      value.setDate(value.getDate() - 1);

      // Act
      const result = validateRealDataTransferField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_REAL_DATE_TRANSFER_MESSAGE);
    });

    it("should return true when date transfer is after today", () => {
      // Arrange
      const value = new Date();
      value.setDate(value.getDate() + 1);

      // Act
      const result = validateRealDataTransferField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateConceptField specs", () => {
    it("should return false when concept is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateConceptField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when concept is informed", () => {
      // Arrange
      const value = "Concept";

      // Act
      const result = validateConceptField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateAmountField specs", () => {
    it("should return false when amount is negative", () => {
      // Arrange
      const value = -1;

      // Act
      const result = validateAmountField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
    });
    it("should return true when amount is positive", () => {
      // Arrange
      const value = 1;

      // Act
      const result = validateAmountField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateNameField specs", () => {
    it("should return false when name is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when name is informed", () => {
      // Arrange
      const value = "Jonh Doe";

      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateAccountIdField specs", () => {
    it("should return false when account id is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateAccountIdField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toBe(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when account id is informed", () => {
      // Arrange
      const value = "1";

      // Act
      const result = validateAccountIdField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateIbanField specs", () => {
    it("should return false when iban is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateIbanField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toBe(REQUIRED_FIELD_MESSAGE);
    });
    it("should return false when iban is not well formed", () => {
      // Arrange
      const value = "ES91 2100 0418 4502 0003 1332";

      // Act
      const result = validateIbanField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toBe(INVALID_IBAN_MESSAGE);
    });
  });
});
