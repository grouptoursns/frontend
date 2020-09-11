import React,{useState} from "react";
import "./booked.css";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { connect } from "react-redux";
import {updatTourUser} from "../../../actions/updateTour-user";
import Modal from "react-modal";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

function Booked(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [open,setOpen]=useState(false)
  const [idGroup,setIdGroup]=useState()
  let rows = [];
  if (props.custimerCabinetData === undefined) {
    rows = [];
  } else {
    console.log(props.custimerCabinetData.book_user);
    rows = props.custimerCabinetData.book_user.map((item) => {
      return {
        id:item.id,
        time: item.group.finish_time,
        name: item.group.name,
        people: item.count_of_extra_people,
        status: item.group.status_group_tour,
      };
    });
  }
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(props.tourList);
  const clickCancel=(e)=>{

props.updateTour(idGroup)
  }
  return (
   <>
    <Modal
      isOpen={open}
      shouldCloseOnOverlayClick={false}
      onRequestClose={() => setOpen(false)}
      style={{
        content: {
          position: "absolute",
          top: "30%",
          left: "30%",
          right: "30%",
          bottom: "30%",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        },
      }}
    >
      <h3>Are you sure you want to cancel your reservation</h3>
      <div className="madal-btn">
 
        <button className="modal-btn-yes" onClick={() => setOpen(false)}>
          NO
        </button>
        <button className="modal-btn-no" onClick={()=>{
          clickCancel()
          setOpen(false)
          }}>
          YES
        </button>
      </div>
    </Modal>
    <TableContainer component={Paper}>
      <div className="table-title">
        <span className="date">Date</span>
        <span className="tour-user">Tour</span>
        <span className="places">Reserved places</span>
        <span className="status">Status</span>
        <span align="right" className="action">
          Action
        </span>
      </div>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" style={{ width: 80 }} scope="row">
                {row.time}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                className="list-text"
                align="left"
              >
                {row.name}
              </TableCell>
              <TableCell style={{ width: 70 }} align="left">
                {row.people}
              </TableCell>
              <TableCell style={{ width: 100 }} align="center">
                {row.status}
              </TableCell>
              <TableCell style={{ width: 60 }} align="right">
 
                <button id={row.id} className="booking-cancel"  onClick={(e)=>{
                  setIdGroup(e.target.id)
                  setOpen(true)}}>CANCELING</button>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    custimerCabinetData: state.custimerCabinet.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTour:(id)=>dispatch(updatTourUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booked);
