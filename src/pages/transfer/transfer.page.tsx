import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components/transfer-form.component";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import {
  mapAccountListFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mapper";

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getAccountList().then((accountListApi) => {
      const accountListVm = accountListApi.map(mapAccountListFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);

  const handleTranfer = (transferInfo: TransferVm) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    saveTransfer(transfer).then((result) => {
      if (result) {
        alert("Transferencia realizada con éxito");
      } else {
        alert("Error al realizar la transferencia");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias nacionales</h1>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTranfer}
          defaultAccountId={id}
        />
      </div>
    </AppLayout>
  );
};
