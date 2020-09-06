import React, { useEffect, useState } from "react";
import "./groups.css";
import PropTypes from "prop-types";
import Modal from "react-modal";
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
import { getGroupList } from "../../../../actions/admin-panel/group-list/getGroupList";
import { deleteGroupAdmin } from "../../../../actions/admin-panel/deleteGroup/deleteGroup";
import { detailGroup } from "../../../../actions/admin-panel/detailsGroup/detailGroup";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Status from "./status/status";
import {trigerModalExitOff} from "../../../../actions/admin-panel/detailsGroup/detailGroup"
import {updateGroupAdmin} from "../../../../actions/admin-panel/updateGroup/updateGroup"

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

function Groups(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [idTour, setIdTour] = useState();
  const [idGroup, setIdGroup] = useState();
  const [id, setId] = useState();
  const [open2, setOpen2] = useState(false);
  const [update,setUpdate]=useState(false)

  const [data, setData] = useState({
    name: "",
    start_time: "",
    finish_time: "",
    status_group: "",
    price: "",
    count_people: "",
    free_slots: "",
  });
  let rows = [];
  useEffect(() => {
    props.getGroupList("http://161.35.199.172/api/company/groups/");
    setUpdate(false)
    setIsDelete(false)
  },[isDelete,update]);
  console.log(props.groupList);
  if (props.groupList === undefined) {
    rows = [];
  } else {
    rows = props.groupList.map((item) => {
      return {
        name:item.name,
        id: item.id,
        id_tour: item.tour_id,
        tour: item.tour,
        status: item.status_group_tour,
        start_time:item.start_time,
        finish_time: item.finish_time,
        price: item.price,
        count: item.count_of_people,
        free_slots:item.free_slots
      };
    });
  }
 

  
  const submitHandlerGroup = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
 props.updateGroup(idTour,idGroup,data)

  };
  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const OnclickDelete = (e) => {
    console.log(e.target.name);
    let id_tour = e.target.name;
    let id_group = e.target.id;
    setIdTour(id_tour);
    setIdGroup(id_group);
    setOpen(true);
  };

let data2={}

  const clickExit = (e) => {
    let id_tour = e.target.name;
    let id_group = e.target.id;
    console.log(id_tour)
    console.log(id_group)
    setIdTour(id_tour);
    setIdGroup(id_group);
    setUpdate(true)
    data2=rows.filter((item)=>item.id==e.target.id)
    
    setData({
      ...data,
      id:e.target.id,
      tour:data2[0].tour,
      name: data2[0].name,
      start_time: data2[0].start_time,
      status_group: data2[0].status,
      finish_time: data2[0].finish_time,
      price: data2[0].price,
      count_people: data2[0].count,
      free_slots:data2[0].free_slots
    });
    console.log(data2)
    setOpen2(!false)
  };

  if (isDelete) {
    props.deleteGroup(idTour, idGroup);
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
  const modalOnclickYes = () => {
    setOpen(false);
    setIsDelete(true);
  };

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
        isOpen={open2}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setOpen2(false)}
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
        <h3 className="add-group-title">Group changes</h3>
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
                  value={data.name}
                  id="defaultFormRegisterPasswordEx4"
                  onChange={changeHandler}
                  name="name"
                  placeholder=""
                  className="form-control input "
                  required
                />

                <div className="invalid-feedback">
                  Please provide a valid text.
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
                  status={(e) =>
                    setData({
                      ...data,
                      status_group: e,
                    })
                  }
                  statusProps={data.status_group}
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
          <MDBRow mb="3">
            <MDBCol md="12">
            <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Free slots
                </label>

                <input
                  type="number"
                  value={data.free_slots}
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
            </MDBCol>
          </MDBRow>
          <div className="block-bot-button">
            <button
              className="form-group-close1"
              onClick={() =>setOpen2(false)}
            >
              CLOSE
            </button>
            <MDBBtn type="submit" className="submit submit-add-group1" >
              SAVE
            </MDBBtn>
          </div>
        </form>
      </Modal>
      <div className="table-adminPanel">
        <TableContainer component={Paper}>
          <div className="admin-table-title">
            <span className="name-group">Tour</span>
            <span className="status-group">Status</span>
            <span className="time-group">Time</span>
            <span className="price-group">Price</span>
            <span className="places-group">Places</span>
            <span className="action-group">Action</span>
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
                <TableRow key={row.id}>
                  <TableCell component="th" style={{ width: 200 }} scope="row">
                    {row.tour}
                  </TableCell>
                  <TableCell
                    style={{ width: 100 }}
                    className="list-text"
                    align="left"
                  >
                    {row.status}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="left">
                    {row.finish_time}
                  </TableCell>
                  <TableCell style={{ width: 60 }} align="left">
                    {row.price}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="left">
                    {row.count}
                  </TableCell>
                  <TableCell style={{ width: 40 }} align="right">
                    <button
                      className="tour-list-btn tourl-list-delete"
                      name={row.id_tour}
                      id={row.id}
                      onClick={(e)=>OnclickDelete(e)}
                    >
                      DELETE
                    </button>
                  </TableCell>
                  <TableCell style={{ width: 40 }} align="center">
                    <button
                      className="tour-list-btn tour-list-edit"
                      name={row.id_tour}
                      id={row.id}
                      onClick={clickExit}
                    >
                      EDIT
                    </button>
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
    groupList: state.GroupListAdmin.state,
    dataGropsAdmin: state.dataGroupAdmin.state,
    modalTriger:state.ModalEdit.modalEdit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGroupList: (url) => dispatch(getGroupList(url)),
    deleteGroup: (id_tour, id_group) =>
      dispatch(deleteGroupAdmin(id_tour, id_group)),
    detailGroup2: (id_tour2, id_group2) =>
      dispatch(detailGroup(id_tour2, id_group2)),
      updateGroup:(id1,id2,data)=>dispatch(updateGroupAdmin(id1,id2,data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
