import { player } from "./Player";

export class team{
    name:string;
    currentPlayer:number=0;
    players:player[]=[];
  teamtotalScore:number=0;
  teamGameCompleted:boolean;
    constructor(name:string){
  this.name=name;
  for (let index = 0; index < 10; index++) {
     this.players.push(new player("Player"+(index+1)));
      
  }
}
givescore(val:number){
    if(this.players[this.currentPlayer].getScoreOFEachBall(val)){
        document.getElementById('' + this.name + '' + '' + this.players[this.currentPlayer].name + '' + 'total').innerHTML=''+this.players[this.currentPlayer].getTotalScore()+''
this.currentPlayer++
console.log(this.players)
    }else{
        this.updateallhtmlelements();
    }
}
checkstatus(){
              if(this.currentPlayer===(this.players.length)){
          return true;
     }
    }

    getTeamscore(){
       return this.teamtotalScore= this.players.reduce((total,item)=>(total+item.getTotalScore()),0);
    }

    updateallhtmlelements(){
   document.getElementById(''+this.name+''+''+this.players[this.currentPlayer].name+''+'ball'+''+(this.players[this.currentPlayer].noOfballs)+'').innerHTML= ''+(this.players[this.currentPlayer].ball[(this.players[this.currentPlayer].noOfballs-1)])+''

}



}