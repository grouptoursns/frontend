import React, {Component} from "react";
import './datepicker.css'
import calendar from '../img/calendar.png'
import {connect} from "react-redux";
import {tourDataFetch} from "../../../../../actions/tourData";
import List from '@material-ui/core/List';
import Paper from "@material-ui/core/Paper";


class Datepicker extends Component{

    constructor(props){
        super(props);
        this.state ={
            items: {},
            show: false,
            isLoaded: false,
            value: "",
            includesDates: false,
            index: 0,
            id: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`http://admin.tripsaround.me/api/tours/${this.props.detailsTours}`)
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    isLoaded: true,
                    items: json
                })
                console.log("JSON",json)
            });
        // this.checkItems()
    }


    showFunc(){
        this.setState({
            show: !this.state.show
        })
    }

    handleChange(event, index, id) {
        this.setState({value: event.target.value});
        this.props.setTourBookInfo({...this.props.tourBookInfo, value: event.target.value, index, id})
        console.log(this.props.tourBookInfo)
    }

    handleSubmit(event) {
        event.preventDefault();
    }


    render(){
        let { value } = this.state
        let { items = {}} = this.state
        let { isLoaded } = this.state
        let { includesDates } = this.state
        if (!isLoaded){
            return <div>No dates for this tour</div>
        }
        else {
            return (
                <div>
                    <form style={{"padding":"0px"}} onSubmit={this.handleSubmit}>
                        <div>
                            <input className="book-picker__date-inpt"
                                   onClick={() => this.showFunc()}
                                   type="text"
                                   value={this.state.value}
                            />
                            {
                                this.state.show ?
                                    <div className="book-picker__date">
                                        <Paper style={{maxHeight: 100, overflow: 'auto'}}>
                                            <List>
                                                {
                                                    this.state.items.group_tour.map((item, index)=> <input
                                                        value={item.start_time}
                                                        onClick={(e)=>this.handleChange(e, index, item.id)}
                                                        className="book-picker__date-elem"
                                                        type="submit"
                                                    />)
                                                }
                                            </List>
                                        </Paper>

                                    </div>
                                    : null
                            }
                        </div>
                    </form>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        tourData:state.tourData,
        detailsTours: state.detailsTour.detailsTour
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => {dispatch(tourDataFetch(url))}
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Datepicker);
