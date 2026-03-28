import * as apiModel from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

describe("pages/movement-list/movement-list.mapper test", () => {
  describe("mapMovementListFromApiToVm", () => {
    it("should return empty array when it feeds an empty array", () => {
      // arrange
      const movementList: apiModel.Movement[] = [];
      // act
      const result = mapMovementListFromApiToVm(movementList);
      // assert
      expect(result).toEqual([]);
    });

    it("should return the same array but using VM model structure", () => {
      // arrange
      const movementList: apiModel.Movement[] = [
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: "2019-12-09T21:30:00",
          realTransaction: "2019-12-09T21:30:00",
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: "2019-12-07T11:30:00",
          realTransaction: "2019-12-08T20:00:10",
          accountId: "1",
        },
      ];

      // act
      const result = mapMovementListFromApiToVm(movementList);

      // assert
      expect(result).toEqual([
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: new Date("2019-12-09T21:30:00"),
          realTransaction: new Date("2019-12-09T21:30:00"),
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: new Date("2019-12-07T11:30:00"),
          realTransaction: new Date("2019-12-08T20:00:10"),
          accountId: "1",
        },
      ]);
    });
  });
});
