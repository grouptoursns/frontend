
import "./visited.css"


import React from "react"
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { connect } from "react-redux";

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
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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

 function Visited( props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  let rows=[]
  if(props.custimerCabinetData===undefined){
    rows=[]
  }
  else{
    rows =props.custimerCabinetData.map((item)=>{
      return{
        time:item.group.finish_time,
        name:item.group.name,
        people:item.count_of_extra_people,
        status:item.group.status_group_tour
      }
    })
  }
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  

  console.log(props.tourList)
  return (

    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
        <TableRow>
              <TableCell component="th" style={{ width: 160}} scope="row">
              Date
              </TableCell>
              <TableCell style={{ width: 230}} className="list-text" align="left">
              Tour
              </TableCell>
              <TableCell style={{ width: 60 }} align="right">
              Reserved places
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
               Status
              </TableCell>
            </TableRow>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" style={{ width: 160}} scope="row">
                {row.time}
              </TableCell>
              <TableCell style={{ width: 230}} className="list-text" align="left">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 60 }} align="right">
                {row.people}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.status}
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
  );
}
const mapStateToProps = (state) => {
  return {
      custimerCabinetData:state.custimerCabinet.data.book_user.filter((items) =>
      items.group.status_group_tour.includes("Successful")),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Visited);