export interface Account {
  type: string;
  name: string;
}

export const createEmptyAccountVm = (): Account => ({
  type: "",
  name: "",
});
