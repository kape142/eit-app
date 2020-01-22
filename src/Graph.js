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
        }, 100);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.draw(this.props.data)
    }

    draw(data){
        const canvas = this.canvasRef.current;
        const ctx = this.state.ctx;

        ctx.moveTo(0,0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const max = this.props.width?this.props.width:300;
        const points = data.length;
        const spacing = max/points;

        ctx.beginPath();
        ctx.fillStyle = "#ffc965";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.linewidth = 2;
        ctx.strokeStyle = "black";
        for(let i = 0; i < points-1; i++){
            ctx.moveTo(i*spacing,data[i]);
            ctx.lineTo((i+1)*spacing,data[i+1]);
        }
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
