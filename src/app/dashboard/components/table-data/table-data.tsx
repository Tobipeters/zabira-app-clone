"use client";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import * as React from "react";
import { TableBox } from "./table.style";

interface Props extends DataGridProps {
  height?: string | number | any;
  setPaginationModel?: React.Dispatch<
    React.SetStateAction<{
      page: number;
      pageSize: number;
    }>
  >;
}

export const DataTable: React.FC<Props> = ({
  height = "calc(100vh - 170px)",
  setPaginationModel,
  hideFooterPagination = false,
  ...props
}) => {
  return (
    <TableBox style={{ height: height, minHeight: "fit-content" }}>
      <DataGrid
        key={
          props.rowCount && props.rows && props.paginationModel
            ? props.rowCount + props.rows.length + props.paginationModel?.page
            : 0
        }
        disableRowSelectionOnClick
        disableColumnMenu
        disableColumnSorting
        disableColumnSelector
        disableDensitySelector
        rowCount={props.rowCount}
        paginationMode="server"
        paginationModel={props.paginationModel}
        pageSizeOptions={[10, 20, 30, 40, 50, 100]}
        onPaginationModelChange={setPaginationModel}
        hideFooterPagination={hideFooterPagination}
        hideFooter={hideFooterPagination}
        getRowHeight={() => "auto"}
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "#FAFAFA",
          },

          "& .MuiDataGrid-scrollbar": {
            width: "0.5rem",
            overflowY: "auto",
          },
        }}
        {...props}
      />
    </TableBox>
  );
};
