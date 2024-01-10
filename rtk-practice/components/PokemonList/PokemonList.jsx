import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function createData(name, url) {
  return { name, url };
}

export default function PokemonList() {
  const { pokemons } = useSelector((state) => state.PokeApi);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(pokemons);
  }, [pokemons]);

  return (
    <TableContainer component={Paper}>
      {/* <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </TableContainer>
  );
}
