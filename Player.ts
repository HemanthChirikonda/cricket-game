export class player{
    name:string;
    totalscore:number;
    out:boolean=false;
    noOfballs:number=0;
    ball:number[]=[];
            constructor(name:string){
              this.name=name;
              for (let index = 0; index < 6; index++) {
                  this.ball.push(null);
              }
            }
   getScoreOFEachBall(val:number):boolean{
   
  if(val!==0 && this.noOfballs<this.ball.length)  {
          this.ball[this.noOfballs]=val;
                console.log(this.ball);
                this.noOfballs++;
                return this.out;
    } else{
   this.out=true;
   return this.out;
    }
    }

    getTotalScore():number{
        this.totalscore= this.ball.reduce((total,item)=>(total+item),0);
        return this.totalscore;
    }

}