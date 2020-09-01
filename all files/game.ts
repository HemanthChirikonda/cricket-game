import { team  } from "./team";
import { player } from "./Player";
   

export class game{
    teams:team[]=[];
    Winner:string;
    ManOfTheMatch:string;
    gameCompleted:boolean;
    constructor(){
       this.teams[0]= new team("Team"+1);
       this.teams[1]= new team("Team"+2);
    }

gameMatchStatus(){
    let flag= true;
    this.teams.forEach(element => {
        element.players.forEach(element1 => {
            if(element1.out===true){
                flag=true;
            }else{
                flag=false;
            }
        });
    });

    if(flag===true){
        this.gameCompleted=flag;
        return true;
    }else{
        this.gameCompleted=flag; 
         return false;
    }
}
 


getTheWinner():string{
    let highScore=0;
    let winner:team;
    this.teams.forEach(element => {
       if(highScore<element.teamtotalScore) {
           highScore=element.teamtotalScore;
           winner=element;
       }
    });
    return winner.name;
}
getManOfTheMatch(){
    let highScore=0;
    let winnerTeam:team;
    let winner:player;
    this.teams.forEach(element => {
      element.players.forEach(element2 => {
        if(highScore<element2.totalscore) {
            highScore=element2.totalscore;
            winnerTeam= element;
            winner=element2;
        }
      });
    });
    return winnerTeam.name+'  '+winner.name;
}

}