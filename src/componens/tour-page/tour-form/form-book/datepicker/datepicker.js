import React, {Component} from "react";
import './datepicker.css'
import calendar from '../img/calendar.png'
import {connect} from "react-redux";
import {tourDataFetch} from "../../../../../actions/tourData";


class Datepicker extends Component{

    constructor(props){
        super(props);
        this.state ={
            items: {},
            show: false,
            isLoaded: false,
            value: "",
            includesDates: false,
            rememberDate: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`http://161.35.199.172:7000/api/tours/${this.props.detailsTours}`)
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

    // checkItems(){
    //     let time
    //     if(this.state.items?.group_tour?.length){
    //         time = this.state.items.group_tour[0].start_time
    //     }
    //     else {time = ""}
    //     // if (time === ""){
    //     //     this.setState({
    //     //         isLoaded: false
    //     //     })
    //     // }
    //     // else{ return time }
    //     console.log('loaded',this.state.isLoaded)
    // }

    showFunc(){
        this.setState({
            show: !this.state.show
        })

        // if (this.state.items.group_tour[0].start_time){
        //     this.setState({
        //         includesDates: true
        //     })
        // }  else
        //
        //     return this.state
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.setTourBookInfo({...this.props.tourBookInfo, value: event.target.value})
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
            // console.log(this.state   .items)
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            {/*<div className="book-picker__form">*/}
                            {/*    <img src={calendar} alt="calendar.icon" style={{"padding": "0px 10px"}}/>*/}
                            <input className="book-picker__date-inpt"
                                   onClick={() => this.showFunc()}
                                   type="text"
                                   value={this.state.value}
                            />
                            {/*</div>*/}
                            {
                                this.state.show ?
                                    <div className="book-picker__date">


                                        {
                                            this.state.items.group_tour.map((start_time)=><input
                                                className="book-picker__date-elem"
                                                type="submit"
                                                value={start_time}
                                                onClick={this.handleChange}
                                            />)
                                        }
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
