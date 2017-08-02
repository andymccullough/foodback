class MyComp{
    constructor(){        
    }
    
    getText(){
        return 'my text again';
    }
}

function component() {
  var element = document.getElementById('root');  
  element.innerHTML = new MyComp().getText();
}

component();