import React, {Component, useEffect} from "react";
import './datepicker.css'
import calendar from '../img/calendar.png'


class Datepicker extends Component{

    constructor(props){
        super(props);
        this.state ={
            items: {},
            show: false,
            isLoaded: false,
            value: "",
            rememberDate: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('http://161.35.199.172/api/tours/2')
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }

    showFunc(){
        this.setState({
            show: !this.state.show
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.setTourBookInfo({...this.props.tourBookInfo, value: event.target.value})
        console.log(this.props.tourBookInfo)
    }

    handleSubmit(event) {
        event.preventDefault();

    }

    // handleFormSubmit = () => {
    //     let { rememberDate } = this.state;
    //     localStorage.setItem('rememberDate', rememberDate);
    // };

    render(){
        let { value } = this.state
        let { items = {}} = this.state;
        let { isLoaded } = this.state
        if (!isLoaded){
            return <div>No dates for this tour</div>
        }
        else {
            console.log(this.state.items)
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <div className="book-picker__form">
                                <img src={calendar} alt="calendar.icon" style={{"padding": "0px 10px"}}/>
                            <input className="book-picker__date-inpt"
                                   onClick={() => this.showFunc()}
                                   type="text"
                                   value={this.state.value}
                            />
                            </div>
                            {
                                this.state.show ?
                                    <div className="book-picker__date">
                                        <input
                                            className="book-picker__date-elem"
                                            type="submit"
                                            value={" From " + this.state.items.group_tour[0].start_time}
                                            onClick={this.handleChange}
                                        />
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


export default Datepicker;
