import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as apiModel from "./api";
import * as viewModel from "./login.vm";

describe("login.mapper specs", () => {
  it("should return a credential with same properties", () => {
    // arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };
    const expectedApiCredentials: apiModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };

    // act
    const result: apiModel.Credentials =
      mapCredentialsFromVmToApi(vmCredentials);

    //assert
    expect(result).toEqual(expectedApiCredentials);
  });
});
