import React, {useEffect,useState} from "react";
import "./tours.css";
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
import BlockBtn from "../block-btn/block-btn";
import {getToursAdmin} from "../../../../actions/admin-panel/tours-list/getToursAdmin"

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

function Tours(props) {
  const[tours,setTours]=useState([])
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  let rows = [];
  useEffect(()=>{
    props.getTours('http://161.35.199.172/api/company/tours/');
   
  },[])
   if(props.ToursList===undefined){
    rows=[]
  }
  else{
    rows =props.ToursList.map((item)=>{
      return{
        name:item.name,
        status:item.tour_status,
        groups:"7",
        reviews:item.avg_rate_tour[0].count_of_voices,
        rating:item.avg_rate_tour[0].rating
      }
    })
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

  return (
    <div className="wrapperr-addTour">
      <BlockBtn />
      <div className="table-adminPanel">
        <TableContainer component={Paper}>
          <div className="admin-table-title">
            <span className="name-admin">Name</span>
            <span className="status-admin">Status</span>
            <span className="groups-admin">Groups</span>
            <span className="reviews-admin">Reviews</span>
            <span className="raiting-admin">Raiting</span>
            <span className="action-admin">Action</span>
          </div>
          <Table className={classes.table} aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" style={{ width: 200 }} scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell
                    style={{ width: 100 }}
                    className="list-text"
                    align="left"
                  >
                    {row.status}
                  </TableCell>
                  <TableCell style={{ width: 60 }} align="left">
                    {row.groups}
                  </TableCell>
                  <TableCell style={{ width: 60 }} align="left">
                    {row.reviews}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="left">
                    {row.rating}
                  </TableCell>
                  <TableCell style={{ width: 40 }} align="right">
                    <button className="tour-list-btn tourl-list-delete">DELETE</button>
                  </TableCell>
                  <TableCell style={{ width: 40 }} align="center">
                  <button className="tour-list-btn tour-list-edit">EDIT</button>
                  </TableCell>
                  <TableCell style={{ width: 40 }} align="left">
                  <button className="tour-list-btn tour-list-view">VIEW</button>
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
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ToursList:state.ToursListAdmin.state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      getTours:(url)=>dispatch(getToursAdmin(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tours);
