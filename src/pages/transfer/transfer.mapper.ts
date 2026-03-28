import * as apiModel from "./api";
import * as viewModel from "./transfer.vm";

export const mapAccountListFromApiToVm = (
  account: apiModel.Account,
): viewModel.AccountVm => ({
  id: account.id,
  alias: account.name,
  iban: account.iban,
});

export const mapTransferFromVmToApi = (
  transfer: viewModel.TransferVm,
): apiModel.Transfer => ({
  accountId: transfer.accountId,
  iban: transfer.iban,
  name: transfer.name,
  amount: transfer.amount,
  concept: transfer.concept,
  notes: transfer.notes,
  transferDate: new Date().toDateString(),
  realTransferDate: transfer.realDateTransfer?.toDateString() ?? "",
});
