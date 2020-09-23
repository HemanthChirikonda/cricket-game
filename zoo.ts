import { game } from "./game";
import { team } from "./team";
import { player } from "./Player";


let container = document.createElement('div');
container.classList.add('container', 'container-sm');
let header = document.createElement('div');
header.classList.add('header', 'display-5', 'border-bottom');
header.style.textAlign = "center";
header.innerHTML = 'CRICKET-10';
container.append(header);
let row1 = document.createElement('div');
row1.classList.add('row', 'border-bottom', 'mb-3')
let row1col1 = document.createElement('div');
row1col1.classList.add('col-4');
row1col1.style.margin = "auto"
let scoreheader1 = document.createElement('header');
scoreheader1.classList.add('header');
scoreheader1.style.textAlign = "center";
scoreheader1.innerHTML = "Team 1 Total Score "
row1col1.append(scoreheader1);
let scoredisplay1 = document.createElement('div');
scoredisplay1.classList.add('col-12')
scoredisplay1.id = 'scoredisplay1';
scoredisplay1.style.textAlign = "center";
scoredisplay1.innerText = "0"
row1col1.append(scoredisplay1);
let hitbutton1 = document.createElement('button');
hitbutton1.classList.add('btn-outline', 'btn-primary')
hitbutton1.id = 'hitbutton1';
hitbutton1.innerText='Hit 1'

row1col1.append(hitbutton1);
row1.append(row1col1);
let row1col2 = document.createElement('div');
row1col2.classList.add('col');
let timerheader = document.createElement('header');
timerheader.classList.add('header', 'display-5');
timerheader.style.textAlign = "center";
timerheader.innerHTML = "Timer "
row1col2.append(timerheader);
let timerdisplay = document.createElement('div');
timerdisplay.classList.add('col-12', 'display-5')
timerdisplay.style.textAlign = "center";
timerdisplay.id='timerdisplay'
timerdisplay.innerText = "60"
row1col2.append(timerdisplay);



row1.append(row1col2);
let row1col3 = document.createElement('div');
row1col3.classList.add('col-4');
let scoreheader2 = document.createElement('header');
scoreheader2.classList.add('header');
scoreheader2.style.textAlign = "center";
scoreheader2.innerHTML = "Team 2 Total Score "
row1col3.append(scoreheader2);
let scoredisplay2 = document.createElement('div');
scoredisplay2.classList.add('col-12')
scoredisplay2.id = 'scoredisplay2';
scoredisplay2.style.textAlign = "center";
scoredisplay2.innerText = "0"
row1col3.append(scoredisplay2);
let hitbutton2 = document.createElement('button');
hitbutton2.classList.add('btn-outline', 'btn-primary')
hitbutton2.id = 'hitbutton2';
hitbutton2.innerText='Hit 2'
row1col3.append(hitbutton2);
row1.append(row1col3);
container.append(row1);





let row = document.createElement('div');
row.classList.add('row');
let game1 = new game();
game1.teams.forEach((element: team) => {
    if ((game1.teams.indexOf(element)) === 0) {
        let tableCol = document.createElement('div');
        tableCol.classList.add('col-md-5','col-sm-12', 'border', 'rounded', 'p-0','table-responsive');
        tableCol.style.fontSize = 70 + '%';
        let teamHeader = document.createElement('header');
        teamHeader.classList.add('header', 'display-5');
        teamHeader.style.textAlign = "center";
        teamHeader.innerHTML = "TEAM" + ' ' + '' + (game1.teams.indexOf(element) + 1) + '';
        tableCol.append(teamHeader);
        let teamTable = document.createElement('table');
        teamTable.classList.add('table', 'border')
        teamTable.id = "Team" + game1.teams.indexOf(element);
        let teamthead = document.createElement('thead');
        teamthead.classList.add()
        let th = document.createElement('th');
        th.scope = "col"
        th.innerHTML = "#"
        teamthead.append(th);
        for (let index = 0; index < 6; index++) {
            let th = document.createElement('th');
            th.scope = "col"
            th.innerHTML = "Ball" + index;
            teamthead.append(th);

        }
        let totalTh = document.createElement('th');
        totalTh.scope = "col"
        totalTh.innerHTML = 'Total';
        teamthead.append(totalTh);

        teamTable.append(teamthead);

        let teamTbody = document.createElement('tbody');
        element.players.forEach((element1: player) => {
            let teamTableRow = document.createElement('tr');
            let nametd = document.createElement('th');
            nametd.scope = 'row';
            nametd.innerHTML = '' + element1.name + ''
            teamTableRow.append(nametd);

            for (let index = 0; index < element1.ball.length; index++) {
                let teamTableRowCol = document.createElement('td');
                teamTableRowCol.classList.add('border')
                teamTableRowCol.id = '' + element.name + '' + '' + element1.name + '' + 'ball' + '' + (index + 1) + '';
                teamTableRowCol.innerHTML = '';
                teamTableRow.append(teamTableRowCol);
            }


            let teamTableRowCol = document.createElement('td');
            teamTableRowCol.classList.add('border')
            teamTableRowCol.id = '' + element.name + '' + '' + element1.name + '' + 'total';
            teamTableRowCol.innerHTML = '';
            teamTableRow.append(teamTableRowCol);
            teamTbody.append(teamTableRow);
            teamTable.append(teamTbody);


        });
        tableCol.append(teamTable);
        row.append(tableCol);
    }
});
let middleDiv = document.createElement('div');
middleDiv.classList.add('col-md-2','col-sm-12');
middleDiv.style.textAlign='center'
middleDiv.id='middleDiv'
let genareteResults= document.createElement('button');
genareteResults.classList.add('btn','btn-primary','p-0','mb-3');
genareteResults.setAttribute('hidden','true');
genareteResults.id='genareteResults';
genareteResults.innerText='Genarete Results'
middleDiv.append(genareteResults);
let middleDivMatchDecisionDiv = document.createElement('div');
middleDivMatchDecisionDiv.classList.add('col-12')
middleDivMatchDecisionDiv.id = 'MatchDecision';
middleDivMatchDecisionDiv.innerText = '';
middleDiv.append(middleDivMatchDecisionDiv);
let manOfTheMatchDiv = document.createElement('div');
manOfTheMatchDiv.classList.add('col-12')
manOfTheMatchDiv.id = 'manOfTheMatch';
manOfTheMatchDiv.innerText = '';
middleDiv.append(manOfTheMatchDiv);
let playagain= document.createElement('button');
playagain.classList.add('btn','btn-primary','p-0','mt-3');
playagain.setAttribute('hidden','true');
playagain.id='playagain';
playagain.innerText='Play Again.'
middleDiv.append(playagain);
row.append(middleDiv);


game1.teams.forEach((element: team) => {
    if ((game1.teams.indexOf(element)) === 1) {
        let tableCol = document.createElement('div');
        tableCol.classList.add('col-md-5','col-sm-12', 'border', 'rounded', 'p-0');
        tableCol.style.fontSize = 70 + '%';
        let teamHeader = document.createElement('header');
        teamHeader.classList.add('header', 'display-5');
        teamHeader.style.textAlign = "center";
        teamHeader.innerHTML = "TEAM" + ' ' + '' + (game1.teams.indexOf(element) + 1) + ''
        tableCol.append(teamHeader);
        let teamTable = document.createElement('table');
        teamTable.classList.add('border','table')
        teamTable.id = "Team" + game1.teams.indexOf(element);
        let teamthead = document.createElement('thead');
        teamthead.classList.add()
        let th = document.createElement('th');
        th.scope = "col"
        th.innerHTML = "#"
        teamthead.append(th);
        for (let index = 0; index < 6; index++) {
            let th = document.createElement('th');
            th.scope = "col"
            th.innerHTML = "Ball" + index;
            teamthead.append(th);

        }
        let totalTh = document.createElement('th');
        totalTh.scope = "col"
        totalTh.innerHTML = 'Total';
        teamthead.append(totalTh);

        teamTable.append(teamthead);

        let teamTbody = document.createElement('tbody');
        element.players.forEach((element1: player) => {
            let teamTableRow = document.createElement('tr');
            let nametd = document.createElement('th');
            nametd.scope = 'row';
            nametd.innerHTML = '' + element1.name + ''
            teamTableRow.append(nametd);

            for (let index = 0; index < element1.ball.length; index++) {
                let teamTableRowCol = document.createElement('td');
                teamTableRowCol.classList.add('border')
                teamTableRowCol.id = '' + element.name + '' + '' + element1.name + '' + 'ball' + '' + (index + 1) + '';
                teamTableRowCol.innerHTML = '';
                teamTableRow.append(teamTableRowCol);
            }


            let teamTableRowCol = document.createElement('td');
            teamTableRowCol.classList.add('border')
            teamTableRowCol.id = '' + element.name + '' + '' + element1.name + '' + 'total';
            teamTableRowCol.innerHTML = '';
            teamTableRow.append(teamTableRowCol);
            teamTbody.append(teamTableRow);
            teamTable.append(teamTbody);


        });
        tableCol.append(teamTable);
        row.append(tableCol);
    }
});


container.append(row);
document.body.append(container);





let team1Start=false;
let team2Start= false;


function startCountdown(seconds:number,team:number) {
    let counter = seconds;
      
    const interval = setInterval(() => {
       
      document.getElementById('timerdisplay').innerText= ''+counter+''
      if (game1.teams[team].checkstatus()){
        counter=0;
    }
      counter--;
     
      if (counter < 0 ) {
      
        if(team===0){
            hitbutton1.setAttribute('disabled', 'true'); 
            if(team1Start){
                hitbutton2.removeAttribute('disabled')
            } 
          
           
        }else if(team===1){
            hitbutton2.setAttribute('disabled', 'true'); 
            if(team2Start){
                hitbutton1.removeAttribute('disabled')    
                }
        }
       ;
        game1.teams[team].teamGameCompleted=true;
         let flag=true;
        game1.teams.forEach(element => {
            if(!element.teamGameCompleted){
             flag=false;
            }
        });
        if(flag===true){
            console.log('gameCompleted')
            genareteResults.removeAttribute('hidden');
            hitbutton1.setAttribute('disabled', 'true'); 
            hitbutton2.setAttribute('disabled', 'true'); 
        }
        clearInterval(interval);
      }

      
    }, 1000);
  }

genareteResults.addEventListener('click',()=>{
  playagain.removeAttribute('hidden')
    document.getElementById('MatchDecision').innerText = 'MATCH WON BY ' + '' + game1.getTheWinner() + '';
    document.getElementById('manOfTheMatch').innerText = 'Man Of The Match ' + '' + game1.getManOfTheMatch() + '';
})

playagain.addEventListener('click',()=>{
   location.reload();
  })
hitbutton1.addEventListener('click', () => {
    if(!team1Start){
        startCountdown(60,0);
        team1Start=true;
        hitbutton2.setAttribute('disabled', 'true');
    }
    let ramdomNumber = (): number => {
        let ramdom = Math.random();
        ramdom = Math.floor(ramdom * 10);
        //console.log(ramdom);
        if (0 <= ramdom && ramdom < 7) {
            //console.log(ramdom);
            return ramdom;
        } else {
            return ramdomNumber();
        }
    }
    let randomScore: number = ramdomNumber();
    if (!game1.teams[0].checkstatus()) {
        game1.teams[0].givescore(randomScore);
        console.log(1);
        document.getElementById('scoredisplay1').innerText = '' + game1.teams[0].getTeamscore() + '';
        //game1.teams[0].updateallhtmlelements();
    } 
})


hitbutton2.addEventListener('click', () => {
    if(!team2Start){
        startCountdown(60,1);
        team2Start=true;
        hitbutton1.setAttribute('disabled', 'true');
    }
    let ramdomNumber = (): number => {
        let ramdom = Math.random();
        ramdom = Math.floor(ramdom * 10);
        //console.log(ramdom);
        if (0 <= ramdom && ramdom < 7) {
            //console.log(ramdom);
            return ramdom;
        } else {
            return ramdomNumber();
        }
    }
    let randomScore: number = ramdomNumber();
    if (!game1.teams[1].checkstatus()) {
        game1.teams[1].givescore(randomScore);
        console.log(1);
        document.getElementById('scoredisplay2').innerText = '' + game1.teams[1].getTeamscore() + '';
        //game1.teams[0].updateallhtmlelements();
    }
})






