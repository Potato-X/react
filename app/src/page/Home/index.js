import { Component } from "react";
import { getData } from '../../api/index'
import './index.scss'
export default class Home extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        getData({a:1,b:2}).then(res=>{
            console.log(res)
        })
    }
    render(){
        return(
            <div className="home">
                <div className="home-box"></div>
            </div>
        )
    }
}