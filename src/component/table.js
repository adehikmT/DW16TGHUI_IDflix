import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "../styles/dropdown.css";
import rows from "../api/transaction";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    backgroundColor: "#1f1f1f",
  },
  cel: {
    color: "white",
  },
  hed: {
    color: "red",
  },
}));

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.hed}>No</TableCell>
              <TableCell className={classes.hed} align="right">
                Nama
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Bukti Transaksi
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Remaining Active
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Status User
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Status Payment
              </TableCell>
              <TableCell className={classes.hed} align="right">
                Aksi
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell className={classes.cel} component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell className={classes.cel} align="right">
                  {row.name}
                </TableCell>
                <TableCell className={classes.cel} align="right">
                  {row.bukti}
                </TableCell>
                <TableCell className={classes.cel} align="right">
                  {row.remain}/hari
                </TableCell>
                <TableCell
                  style={{
                    color: row.active === "Active" ? "#0ACF83" : "#FF0742",
                  }}
                  align="right"
                >
                  {row.active}
                </TableCell>
                <TableCell
                  style={{
                    color:
                      row.paymen === "Approve"
                        ? "#0ACF83"
                        : row.paymen === "Pending"
                        ? "#F7941E"
                        : "#FF0742",
                  }}
                  align="right"
                >
                  {row.paymen}
                </TableCell>
                <TableCell className={classes.cel} align="right">
                  <div class="dropdown">
                    <ArrowDropDownIcon className="dropbtn" />
                    <div class="dropdown-content">
                      <span>Aprove</span>
                      <span>Cencel</span>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
