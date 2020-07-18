class PixelArt extends React.Component { 
    constructor(props){
        super(props);
        this.state ={
            clicks: 'PixelArt',
            BackgroundsColors:['white','white','white','white','white','white','white','white','white'],
            ActualColor: 'red'
    }
}

Colors(box){
let temporalcolors = this.state.BackgroundsColors;
temporalcolors[box]=this.state.ActualColor;
let hello = 'nuestro PixelArt';
this.setState(
        {BackgroundsColors:temporalcolors}
        )
    this.setState(
        {clicks:hello}
        )
}

    render(){
        return(
            <div className= 'contenedor'>
            <p>Bienvenido a {this.state.clicks}</p>

            <div style={this.contenedro}>
              <button className='square' onClick={()=>this.Colors(0)} style={{'background-color':this.state.BackgroundsColors[0]}} >{this.props.text}</button>
              <button className='square' onClick={()=>this.Colors(1)} style={{'background-color':this.state.BackgroundsColors[1]}} >{this.props.text}</button>
              <button className='square' onClick={()=>this.Colors(2)} style={{'background-color':this.state.BackgroundsColors[2]}} >{this.props.text}</button>

              <button className='square' onClick={()=>this.Colors(3)} style={{'background-color':this.state.BackgroundsColors[3]}} >{this.props.text}</button>
              <button className='square' onClick={()=>this.Colors(4)} style={{'background-color':this.state.BackgroundsColors[4]}} >{this.props.text}</button>
              <button className='square' onClick={()=>this.Colors(5)} style={{'background-color':this.state.BackgroundsColors[5]}} >{this.props.text}</button>

              <button className='square' onClick={()=>this.Colors(6)} style={{'background-color':this.state.BackgroundsColors[6]}} >{this.props.text}</button>
              <button className='square' onClick={()=>this.Colors(7)} style={{'background-color':this.state.BackgroundsColors[7]}} >{this.props.text}</button>
              <button className='square' onClick={()=>this.Colors(8)} style={{'background-color':this.state.BackgroundsColors[8]}} >{this.props.text}</button>
              </div>
              <button  style={this.tools} >{this.props.text}</button>
              <button  style={this.tools} >{this.props.text}</button>
            </div>
        )
    }

}

ReactDOM.render(<PixelArt text='ELPUTO AMO'/>, document.getElementById("app"));