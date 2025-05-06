import { Component } from "react";

class Home extends Component{
    constructor(props){
        super(props); 
        this.state = {
            count: 0,
        }
        console.log("Constructor Runs");
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return null;
    }

    componentDidMount(){
        console.log("Component Mount Runs");
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Snap shot before update")
        return 100;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did update happens")
        console.log("snapshot >>", snapshot); //snapshot is what above function returns i.e getSnapshotBeforeUpdate
    }

    onBtnClick(){
        this.setState({count: 10})
    }

    render(){
        console.log('Render Runs');
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onBtnClick.bind(this)}>
                    Hello
                </button>

            </div>
        )
    }
}

export default Home;