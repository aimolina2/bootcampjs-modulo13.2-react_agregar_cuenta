import React from "react";
import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";
import { MovementListTable, MovementListHeader } from "./components";
import { MovementVM } from "./movement-list.vm";
import { Account, getAccountInfo, getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const [movementsList, setMovementsList] = React.useState<MovementVM[]>([]);
  const [accountInfo, setAccountInfo] = React.useState<Account>({
    name: "",
    iban: "",
    balance: 0,
    id: "",
  });
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      getMovements(id).then((result) =>
        setMovementsList(mapMovementListFromApiToVm(result)),
      );
      getAccountInfo(id).then((result) => setAccountInfo(result));
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeader accountInfo={accountInfo} />
        <MovementListTable movementsList={movementsList} />
      </div>
    </AppLayout>
  );
};
