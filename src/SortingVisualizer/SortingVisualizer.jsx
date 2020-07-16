import React, { Component } from 'react';
import   './SortingVisualizer.css';
import { getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms';
import { Jumbotron } from 'reactstrap';
export default class SortingVisualizer extends Component{

    constructor(props){
        super(props);
        this.state = {
            array: [],
        };

    };

    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array=[];
        for(let i=0;i<310;i++){
            array.push(randomIntFromInterval(5,730));
        }

        this.setState({array});
    };
    mergesort(){
       
        const animations = getMergeSortAnimations(this.state.array);

        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const ColorChange = i % 3 !==2;
            if(ColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0?'red':'turquoise';
                setTimeout(() =>{
                  barOneStyle.backgroundColor= color;
                  barTwoStyle.backgroundColor= color;
                },i*3);
            }else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                   
                    
                },i*3);
            }

        }

    }

    render(){
        const {array} = this.state;
        return(
        <>
        <Jumbotron className="display-3 bg-color heading"><h1>Merge Sort Visualizer</h1></Jumbotron>
        <div className="container row justify-content-center">
            

            <div className='col-1 legend-bar'/>
            <div className='col-1'>Values</div> 
            <div className='col-1 legend-bar-compare ml-5'/>
            <div className='col-2'>Comparing Values</div> 
            
           
        </div>
    
        <div className="array-container ">
            {
                array.map((value,idx)=>(
                    <div className="array-bar" key={idx}
                    style={{height : `${value}px`}}
                    >
                           
                    </div>
                ))
            }
        </div>
        <div className='container row justify-content-center'>

            <button type="button" className="btn btn-danger text-white mr-3 mb-10" onClick={()=>this.resetArray()}>Get a New Array</button>
            <button type="button" className="btn btn-primary text-white mb-10" onClick={()=>this.mergesort()}>Merge Sort</button>
        </div>
        </>
        );
    };
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

