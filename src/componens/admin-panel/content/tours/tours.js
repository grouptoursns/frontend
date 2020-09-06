import React, { useEffect, useState } from "react";
import "./tours.css";
import Modal from "react-modal";
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
import { getToursAdmin } from "../../../../actions/admin-panel/tours-list/getToursAdmin";
import { deleteTourAdmin } from "../../../../actions/admin-panel/deleteTour/deleteTour";
import { detailsTourAdmin } from "../../../../actions/admin-panel/detailsTour/detailstTourAdmin";
import Status from "./status-group/status";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import addGroupAdmin from "../../../../actions/admin-panel/addGroup/addGroup";
import { Redirect } from "react-router";
import { closePortal } from "../../../../actions/admin-panel/detailsTour/detailstTourAdmin";
import {Link}from "react-router-dom"
import {detailsTour} from "../../../../actions/detailsTour";
import {updateTourImage} from "../../../../actions/admin-panel/updateTour-image/updateTour-imge"

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
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [idTour, setIdTour] = useState();
  const [idGroup, setIdGroup] = useState();
  const [addGroup, setAddGroup] = useState(false);
  const [editTour,setEditTour]= useState(false)

  const [data, setData] = useState({
    name: "",
    start_time: "",
    finish_time: "",
    status_group: "Open",
    price: "",
    count_people: "",
  });
  console.log(data);
  let rows = [];

  if (props.ToursList === undefined) {
    rows = [];
  } else {
    rows = props.ToursList.map((item) => {
      return {
        id: item.id,
        name: item.name,
        status: item.tour_status,
        groups: item.count_of_groups,
        reviews: item.avg_rate_tour[0].count_of_voices,
        rating: item.avg_rate_tour[0].rating,
      };
    });
  }
  console.log(rows)
  if (isDelete) {
    props.deleteTour(idTour);
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id === idTour) {
        rows.splice(i, 1);
      }
    }
  }
  useEffect(() => {
    props.getTours("http://161.35.199.172/api/company/tours/");
    setIsDelete(false);
    setEditTour(false)
    props.closeUpdate();
  }, [isDelete,editTour]);
  const clickAddGroup = (e) => {
    setAddGroup(true);
    setIdGroup(e.target.id);
  };
  const onClickDelete = (e) => {
    console.log(e.target.id);

    setIdTour(e.target.id);
    setOpen(true);
  };

  const onClickEdit = (e) => {
    console.log(e.target.id);
    props.detailsTourAdmin(e.target.id);
    setEditTour(true);
    props.getArrImage(e.target.id)
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const modalOnclickYes = () => {
    setOpen(false);
    setIsDelete(true);
  };
  const submitHandlerGroup = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    console.log(event.target.name);
    props.addGroup(idGroup, data);
  };
  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  if (props.isOpenUpdateTour) {
    return <Redirect to="/admin-panel/ubdate-tour" />;
  } else {
    const clickView=(e)=>{
      console.log(e.target.id)
      props.detailsTour(e.target.id)
    }
    return (
      <div className="wrapperr-addTour">
        <BlockBtn />
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
          <h3>Do you really want to delete?</h3>
          <div className="madal-btn">
     
            <button className="modal-btn-yes" onClick={() => setOpen(false)}>
              NO
            </button>
            <button className="modal-btn-no" onClick={modalOnclickYes}>
              YES
            </button>
          </div>
        </Modal>

        <Modal
          isOpen={addGroup}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setAddGroup(false)}
          style={{
            content: {
              position: "absolute",
              top: "10%",
              left: "30%",
              right: "30%",
              bottom: "10%",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "none",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            },
          }}
        >
          <h3 className="add-group-title">Add group</h3>
          <form
            className="needs-validation settings-form form-admin"
            onSubmit={submitHandlerGroup}
            noValidate
          >
            <MDBRow className="form-add-group">
              <MDBCol md="6">
                <MDBRow mb="3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    value={data.name}
                    id="defaultFormRegisterPasswordEx4"
                    onChange={changeHandler}
                    name="name"
                    placeholder=""
                    className="form-control input "
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
                <MDBRow mb="3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Start time
                  </label>

                  <input
                   required
                    type="date"
                    value={data.start_time}
                    id="defaultFormRegisterPasswordEx4"
                    onChange={changeHandler}
                    name="start_time"
                    placeholder=""
                    className="form-control input "
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
                <MDBRow mb="3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Status group
                  </label>

                  <Status
                   required
                    status={data.status_group}
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
              </MDBCol>
              <MDBCol md="6">
                <MDBRow mb="3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Price
                  </label>

                  <input
                   required
                    type="number"
                    value={data.price}
                    id="defaultFormRegisterPasswordEx4"
                    onChange={changeHandler}
                    name="price"
                    placeholder=""
                    className="form-control input "
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
                <MDBRow mb="3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Finish time
                  </label>

                  <input
                   required
                    type="date"
                    value={data.finish_time}
                    id="defaultFormRegisterPasswordEx4"
                    onChange={changeHandler}
                    name="finish_time"
                    placeholder=""
                    className="form-control input "
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
                <MDBRow mb="3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Count of people
                  </label>

                  <input
                    type="number"
                    value={data.count_people}
                    id="defaultFormRegisterPasswordEx4"
                    onChange={changeHandler}
                    name="count_people"
                    placeholder=""
                    className="form-control input "
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <div className="block-bot-button">
              <button
                className="form-group-close"
                onClick={() => setAddGroup(false)}
              >
                CLOSE
              </button>
              <MDBBtn type="submit" className="submit submit-add-group">
                ADD
              </MDBBtn>
            </div>
          </form>
        </Modal>
        <div className="table-adminPanel">
          <TableContainer component={Paper}>
            <div className="admin-table-title">
              <span className="name-admin">Name</span>
              <span className="status-admin">Status</span>
              <span className="groups-admin">Raiting</span>
              <span className="reviews-admin">Reviews</span>
              <span className="raiting-admin">Groups</span>
              <span className="action-admin">Action</span>
            </div>
            <Table
              className={classes.table}
              aria-label="custom pagination table"
            >
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      component="th"
                      className="text-table"
                      style={{ width: 200 }}
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      style={{ width: 100 }}
                      className="list-text"
                      align="left"
                      className="text-table"
                    >
                      {row.status}
                    </TableCell>
                    <TableCell
                      style={{ width: 60 }}
                      align="left"
                      className="text-table"
                    >
                      {row.rating}
                    </TableCell>
                    <TableCell
                      style={{ width: 60 }}
                      align="left"
                      className="text-table"
                    >
                      {row.reviews}
                    </TableCell>
                    <TableCell
                      style={{ width: 100 }}
                      align="left"
                      className="text-table"
                    >
                      <span>{row.groups}</span>
                      <button
                        className="btn-add-group"
                        id={row.id}
                        onClick={clickAddGroup}
                      >
                        &#43;
                      </button>
                    </TableCell>
                    <TableCell style={{ width: 40 }} align="right">
                      <button
                        className="tour-list-btn tourl-list-delete"
                        id={row.id}
                        onClick={onClickDelete}
                      >
                        DELETE
                      </button>
                    </TableCell>
                    <TableCell style={{ width: 40 }} align="center">
                      <button
                        className="tour-list-btn tour-list-edit"
                        id={row.id}
                        onClick={onClickEdit}
                      >
                        EDIT
                      </button>
                    </TableCell>
                    <TableCell style={{ width: 40 }} align="left">
                      <Link to="/tourspage">
                        <button id={row.id} className="tour-list-btn tour-list-view" onClick={clickView}>
                          VIEW
                        </button>
                      </Link>

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
}
const mapStateToProps = (state) => {
  return {
    ToursList: state.ToursListAdmin.state,
    isOpenUpdateTour: state.detailTourAdmin.isOpenPortal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTours: (url) => dispatch(getToursAdmin(url)),
    deleteTour: (id) => dispatch(deleteTourAdmin(id)),
detailsTourAdmin:(id)=>dispatch(detailsTourAdmin(id)),
    addGroup: (id, data) => dispatch(addGroupAdmin(id, data)),
    closeUpdate: () => dispatch(closePortal()),
    detailsTour: (id) => dispatch(detailsTour(id)),
    getArrImage: (id) => dispatch(updateTourImage(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tours);
