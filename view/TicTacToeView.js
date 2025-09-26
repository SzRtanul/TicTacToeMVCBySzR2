import { TicTacToeCT } from "../controller/TicTacToeCt";

export class TicTacToeView{
    constructor(controller=new TicTacToeCT()){
        this.controller = controller;
    }

    megjelen(){
        document.addEventListener("click", ()=>{
            this.controller.doKattint(13);
        });
    }

    frissit(){

    }

    nyeresistatisztika(){

    }
}