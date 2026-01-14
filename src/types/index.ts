export interface ITransaction {
  id: number;
  channel: string;
  type: number;
  amount: number;
  fee: number;
  total: number;
  reference: string;
  status: string;
  date: string;
}
