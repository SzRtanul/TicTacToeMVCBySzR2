import { TicTacToe } from "../model/TicTacToe";
import { TicTacToeView } from "../view/TicTacToeView";

export class TicTacToeCT{
    
    constructor(view = new TicTacToeView(this), model=new TicTacToe()){
        this.view = view;
        this.model = model;
        this.#doBetolt();
        window.addEventListener("katt", () => {
            this.doKattint();
        })
    }

    #doBetolt(){
        this.view.megjelen(this.model.getTabla());
    }
    
    doKattint(hely){
        if(this.model.doLep(hely)){
            this.view.frissit(this.model.getTabla());
        }
        else{
            this.view.nyeresistatisztika(this.model.getNyert());
        }
    }
}