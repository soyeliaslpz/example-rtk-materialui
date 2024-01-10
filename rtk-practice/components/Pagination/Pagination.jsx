import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ count }) {
  return (
    <Stack
      spacing={2}
      style={{
        margin: "2rem auto",
      }}
    >
      <Pagination
        style={{ justifyContent: "center" }}
        count={count}
        variant='outlined'
        shape='rounded'
      />
    </Stack>
  );
}
