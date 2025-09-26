export class TicTacToe{
    constructor(oszlop, hossz){
        this.tabla = [];
        this.kovetkezik=true;
        this.oszlop=0;
        this.hossz=0;
        this.nyert=0;
        this.vege=false;
        this.lepes=0;
        this.celszam=3;
        this.atlocheck=[];
        this.sorcheck=0;
    }

    doLep(hova=-1){
        let both = !this.vege && hova > -1 && hova < this.tabla.length;
        if(both){
            const hol = tabla[hova];
            tabla[hova] = hol == 0 && this.kovetkezik ? 1 : 3;
            this.kovetkezik = !this.kovetkezik;
            this.lepes++;

            vege = this.lepes == this.tabla.length || this.#checkNyert();
        }
        return both;
    }

    #checkNyert(){
        let both = this.lepes >= this.celszam;
        if(!both){
            let i = 0;
            const oszlop = this.getOszlop();
            let memHolCheck = -1;
            for(; i < this.tabla.length; i++){
                const hol = this.tabla[i];
                // Egyenes
                if(memHolCheck == hol){
                    this.sorcheck += hol & 0b1;
                }
                else{
                    this.sorcheck = 0;
                    memHolCheck = hol;
                }
                if(this.sorcheck == this.celszam) nyert = hol;
                if((i + 1) % oszlop == 0){
                    this.sorcheck = 0;
                    memHolCheck = -1;
                }
                //Átlók
                /*if(i >= this.celszam){

                }*/
               hol
                const atlokch=[
                    1, // Mem
                    1, // sorcheck
                ];
                for(let j = 0; j < 2; j++){
                    if(this.atlocheck[i+j] == hol){
                        this.atlocheck[i+j+1] += hol & 0b1;
                    }
                    else{
                        this.atlocheck[i+j+1] = 0;
                        this.atlocheck[i+j] = hol;
                    }
                    if(this.atlocheck[i+j+1] == this.celszam) nyert = hol;
                   /* 
                    if((i + 1) % oszlop == 0){
                        this.sorcheck = 0;
                        memHolCheck = -1;
                    } 
                    */
                }
            }
        }
    }

    getOszlop(){
        return this.oszlop;
    }

    getHossz(){
        return this.hossz;
    }

    getSor(){
        return Math.floor(this.getOszlop() / this.getHossz());
    }

    getTabla(){
        return this.tabla;
    }

    getNyert(){
        return this.nyert;
    }
}