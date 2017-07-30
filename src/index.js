require('file-loader?name=[name].[ext]!../index.html');

class MyComp{    
    constructor(){        
    }
    
    getText(){
        return 'my text agains';
    }
}

function component() {
  var element = document.getElementById('root');  
  element.innerHTML = new MyComp().getText();
}

component();