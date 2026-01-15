"use client";
import {
  ArrowNarrowDownIcon,
  ArrowNarrowUpIcon,
  CaretRightIcon,
} from "@/src/assets/svg";
import { ZaButton } from "@/src/components";
import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { DataTable } from "../table-data";
import { currencyFormatter, transactions } from "@/src/utils";
import { ITransaction } from "@/src/types";
import { TransactionStatus, TransactionType } from "@/src/utils/enum";

export const TransactionHistory = () => {
  const tableHeader: GridColDef<ITransaction>[] = [
    {
      field: "channel",
      headerName: "Channel",
      minWidth: 120,
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      minWidth: 140,
      renderCell: ({ row }) => (
        <div className="inline-flex items-center">
          {row.type === TransactionType.Deposit && (
            <>
              <ArrowNarrowDownIcon />
              &nbsp; Deposit
            </>
          )}
          {row.type === TransactionType.Withdrawal && (
            <>
              <ArrowNarrowUpIcon />
              &nbsp; Withdrawal
            </>
          )}
        </div>
      ),
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth: 120,
      flex: 1,
      renderCell: ({ row }) => (
        <span>{currencyFormatter(row?.amount, "")} NGN</span>
      ),
    },
    {
      field: "fee",
      headerName: "Fee",
      minWidth: 120,
      flex: 1,
      renderCell: ({ row }) => (
        <span>{currencyFormatter(row?.fee, "")} USDT</span>
      ),
    },
    {
      field: "total",
      headerName: "Total",
      minWidth: 120,
      flex: 1,
      renderCell: ({ row }) => (
        <span>{currencyFormatter(row?.total, "")} NGN</span>
      ),
    },
    {
      field: "reference",
      headerName: "Reference ID",
      minWidth: 200,
      renderCell: ({ row }) => (
        <span className="text-[#718096] font-medium">{row.reference}</span>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      renderCell: ({ row }) => (
        <>
          {row.status === TransactionStatus.Success && (
            <div className="w-fit rounded-sm py-1 px-2 leading-[160%] text-[#0CAF60] bg-[#EFFBF7]">
              {row.status}
            </div>
          )}
          {row.status === TransactionStatus.Cancelled && (
            <div className="w-fit rounded-sm py-1 px-2 leading-[160%] text-[#FD6A6A] bg-[#FFF0F0]">
              {row.status}
            </div>
          )}
          {row.status === TransactionStatus.Pending && (
            <div className="w-fit rounded-sm py-1 px-2 leading-[160%] text-[#FE964A] bg-[#FFF0E6]">
              {row.status}
            </div>
          )}
        </>
      ),
    },
    {
      field: "date",
      minWidth: 120,
      flex: 1,
      headerName: "Date",
      renderCell: ({ row }) => (
        <div className="inline-flex flex-col gap-1 font-medium text-sm text-[#111827] leading-[150%]">
          {dayjs(row?.date).format("MMM D, YYYY")}
          <span className="text-[#718096] text-xs">
            {dayjs(row?.date).format("HH:mm:ss A")}
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="hidden lg:flex flex-col gap-6 p-6 bg-white rounded-2xl">
      <div className="flex items-center justify-between w-full py-2.5 px-3">
        <h4 className="text-base text-[#1A1A1A] font-bold leading-[124%]">
          Recent Transactions
        </h4>

        <ZaButton
          className="text-[#0044EE]! bg-transparent! h-6! px-0!"
          text={
            <>
              View All <CaretRightIcon bg="#0044EE" opacity="1" />
            </>
          }
        />
      </div>

      <DataTable
        height={"fit-content"}
        rows={transactions}
        columns={tableHeader}
        rowCount={0}
        hideFooter
      />
    </section>
  );
};
