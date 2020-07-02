class Form{
    constructor(){
        this.input=createInput('NAME');
        this.button = createButton('playButton');
        this.greeting = createElement('h3');
        this.title=createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        
        this.title.html('Car Racing Game');
        this.title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount=playerCount+1;
            player.index=player
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("welcome"+ name);
            this.greeting.position(displayWidth/2-7,displayHeight/4);

        })
    }
}