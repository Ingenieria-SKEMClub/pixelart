class PixelArt extends React.Component { 
    constructor(props){
        super(props);
        this.state ={
            clicks: 'PixelArt',
            BackgroundsSetBoxColor: [],
            ActualColor: 'white',
            SetBoxColoreleccionado: "None"
        }
    }  
    componentDidMount(){
        let temporalVector = Array(25);
        temporalVector.fill("white");
        this.setState({BackgroundsSetBoxColor: temporalVector});
    }
    SetBoxColor(box){
        let temporalSetBoxColor = this.state.BackgroundsSetBoxColor;
        temporalSetBoxColor[box]=this.state.ActualColor;
        this.setState({BackgroundsSetBoxColor: temporalSetBoxColor});
    }
    ChangeColor(color){
        if(color === "white"){
            this.setState({SetBoxColoreleccionado: "None"});
        }else{
            this.setState({SetBoxColoreleccionado: color});
        }
        this.setState({ActualColor: color});
    }
    CleanEverything(){
        let vectorTemporal = this.state.BackgroundsSetBoxColor;
        for(let i = 0; i < vectorTemporal.length; i++ ){
            vectorTemporal[i] = "white"
        }
        this.setState({BackgroundsSetBoxColor: vectorTemporal});
    }
    render(){
        return(
            <div id='editor'>
            <p>Bienvenido a {this.state.clicks}</p>
                <div className="contenedor">
                    <button className='square' onClick={()=>this.SetBoxColor(0)} style={{'background-color':this.state.BackgroundsSetBoxColor[0]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(1)} style={{'background-color':this.state.BackgroundsSetBoxColor[1]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(2)} style={{'background-color':this.state.BackgroundsSetBoxColor[2]}} >{this.props.text}</button>

                    <button className='square' onClick={()=>this.SetBoxColor(3)} style={{'background-color':this.state.BackgroundsSetBoxColor[3]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(4)} style={{'background-color':this.state.BackgroundsSetBoxColor[4]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(5)} style={{'background-color':this.state.BackgroundsSetBoxColor[5]}} >{this.props.text}</button>

                    <button className='square' onClick={()=>this.SetBoxColor(6)} style={{'background-color':this.state.BackgroundsSetBoxColor[6]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(7)} style={{'background-color':this.state.BackgroundsSetBoxColor[7]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(8)} style={{'background-color':this.state.BackgroundsSetBoxColor[8]}} >{this.props.text}</button>

                    <button className='square' onClick={()=>this.SetBoxColor(9)} style={{'background-color':this.state.BackgroundsSetBoxColor[9]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(10)} style={{'background-color':this.state.BackgroundsSetBoxColor[10]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(11)} style={{'background-color':this.state.BackgroundsSetBoxColor[11]}} >{this.props.text}</button>

                    <button className='square' onClick={()=>this.SetBoxColor(12)} style={{'background-color':this.state.BackgroundsSetBoxColor[12]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(13)} style={{'background-color':this.state.BackgroundsSetBoxColor[13]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(14)} style={{'background-color':this.state.BackgroundsSetBoxColor[14]}} >{this.props.text}</button>

                    <button className='square' onClick={()=>this.SetBoxColor(15)} style={{'background-color':this.state.BackgroundsSetBoxColor[15]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(16)} style={{'background-color':this.state.BackgroundsSetBoxColor[16]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(17)} style={{'background-color':this.state.BackgroundsSetBoxColor[17]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(18)} style={{'background-color':this.state.BackgroundsSetBoxColor[18]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(19)} style={{'background-color':this.state.BackgroundsSetBoxColor[19]}} >{this.props.text}</button>

                    <button className='square' onClick={()=>this.SetBoxColor(20)} style={{'background-color':this.state.BackgroundsSetBoxColor[20]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(21)} style={{'background-color':this.state.BackgroundsSetBoxColor[21]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(22)} style={{'background-color':this.state.BackgroundsSetBoxColor[22]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(23)} style={{'background-color':this.state.BackgroundsSetBoxColor[23]}} >{this.props.text}</button>
                    <button className='square' onClick={()=>this.SetBoxColor(24)} style={{'background-color':this.state.BackgroundsSetBoxColor[24]}} >{this.props.text}</button>
                </div>
                <button  style={this.tools} onClick={()=> this.ChangeColor("green")} >Verde</button>
                <button  style={this.tools} onClick={()=> this.ChangeColor("blue")}>Azul</button>
                <button  style={this.tools} onClick={()=> this.ChangeColor("red")}>Rojo</button>
                <button  style={this.tools} onClick={()=> this.ChangeColor("yellow")}>Amarillo</button>
                <button  style={this.tools} onClick={()=> this.ChangeColor("purple")}>Morado</button>
                <button  style={this.tools} onClick={()=> this.ChangeColor("white")}>Borrador</button>
                <button  style={this.tools} onClick={()=> this.CleanEverything()}>Borrar Todo</button>
                <p>El color actual es: <span style={
                    {color: this.state.ActualColor}
                }
                >{this.state.SetBoxColoreleccionado}</span> </p>

            </div>
        )
    }

}

ReactDOM.render(<PixelArt/>, document.getElementById("app"));