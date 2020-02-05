import React from 'react';
import './App.css';

class Graph extends React.Component{

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.draw = this.draw.bind(this);
        this.state = {
            canvas: undefined,
            ctx: undefined
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                ctx: this.canvasRef.current.getContext("2d")
            });
        }, 0);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.clear();
        if(this.props.data){
            let colors = ["black", "red", "green", "blue", "brown", "yellow", "white"];
            let colorIndex = 0;
            console.log(this.props)
            const scale = this.scale(Object.keys(this.props).filter(a=>a.includes("ata") && this.props[a] != null).map(a=>this.props[a]).reduce((a,c)=>a.concat(c)));
            for(let key in this.props.data){
                this.draw(this.props.data[key], colors[colorIndex++], scale);
            }
            if(this.props.avgData){
                for(let key in this.props.avgData){
                    this.draw(this.props.avgData[key], colors[colorIndex++], scale);
                }

            }
        }
    }

    scale(datas){
        console.log(datas);
        const maxVals = [];
        const minVals = [];
        for (let key in datas){
            if(datas.hasOwnProperty(key)){
                maxVals.push(Math.max(...datas[key]));
                minVals.push(Math.min(...datas[key]));
            }
        }
        return {
            maxVal: Math.max(...maxVals),
            minVal: Math.min(...minVals),
            distance: Math.max(...maxVals) - Math.min(...minVals)
        }
    }

    draw(data, color, scale){
        const ctx = this.state.ctx;
        const max = this.props.width?this.props.width:300;
        const points = data.length;
        const spacing = max/points;
        let scaledData = data.map(a=>max/20 + (((a-scale.minVal)/scale.distance))*(max*0.9));
        console.log(data);
        console.log(scaledData);
        ctx.beginPath();
        ctx.linewidth = 2;
        ctx.strokeStyle = color;
        for(let i = 0; i < points-1; i++){
            ctx.moveTo(i*spacing,scaledData[i]);
            ctx.lineTo((i+1)*spacing,scaledData[i+1]);
        }
        ctx.stroke();
    }

    clear(){
        const canvas = this.canvasRef.current;
        const ctx = this.state.ctx;
        ctx.moveTo(0,0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "#ffc965";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.stroke();
    }



    render() {
        return (
            <div className="graph">
                <canvas
                    ref={this.canvasRef}
                    height={this.props.height ? this.props.height : "300px"}
                    width={this.props.width ? this.props.width : "300px"}
                    style={{border:"1px solid #000000"}}
                >
                </canvas>
            </div>
        );
    }
}

export default Graph;
