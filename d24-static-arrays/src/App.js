import logo from './logo.svg';
import './App.css';
import MarkSheet from './classes/MarkSheet';

function App() {

  let Indwcpalyers2007=["GautamGambhir", "YusufPathan", "RobinUthappa", "YuvrajSingh", 
    "MS Dhoni (c)", "RohitSharma", "IrfanPathan", "HarbhajanSingh", "JoginderSharma", 
    "Sreesanth", "RPSingh","Gary Kirsten"]

  let Indwcpalyers2011=["Gautam Gambhir","Sehwag","Virat Kohil","Yuvraj Singh", 
      "MS Dhoni (c)", "Suresh Raina", "Sachin", "Harbhajan Singh", "ZaheerKhan", 
      "AshishNehra", "MunafPatel","Ashwin","PitushChawla"]
      
  let Indwcpalyers2024=["RohitSharma (c)", "HardikPandya", "YashasviJaiswal", "ViratKohli",
     "SuryakumarYadav", "RishabhPant", "SanjuSamson", "ShivamDube", "RavindraJadeja",
      "AxarPatel", "KuldeepYadav", "YuzvendraChahal", "ArshdeepSingh", "JaspritBumrah", 
      "Mohd.Siraj"]
  


  let mahesh=new MarkSheet();
  mahesh.mathsMarks=96;
  mahesh.teluguMarks=78;
  mahesh.hindiMarks=88;
  mahesh.scienceMarks=90;
  mahesh.englishMarks=80;
  mahesh.socialMarks=89;
  mahesh.calculateResult();
console.log(MarkSheet.passMarks);

  return (

    <div className="App">
      <h1>India Squard</h1>
      <h3>Array Methods</h3>
   
    <button onClick={()=>{
   console.log(Indwcpalyers2007.length);
    console.log(Indwcpalyers2007);
    for(let a=0;a<Indwcpalyers2007.length;a++){
     
    }
    }}>Length</button>

    <button onClick={()=>{
      console.log(Indwcpalyers2011[13]);
      console.log(Indwcpalyers2011.at(4));
    }}>at</button>

    <button onClick={()=>{
      console.log(Indwcpalyers2011);
      console.log(Indwcpalyers2011.toString());
      console.log(Indwcpalyers2011.join("---"));
    }}>toString,join</button>

    <button onClick={()=>{
      Indwcpalyers2011.push("Gary Kirsten")
      console.log(Indwcpalyers2011)
    }}>Push</button>

    <button onClick={()=>{
      Indwcpalyers2011.pop()
      console.log(Indwcpalyers2011);
    }}>Pop</button>

    <button onClick={()=>{
        console.log(Indwcpalyers2024);
        Indwcpalyers2024.shift();
    }}>shift</button>

    <button onClick={()=>{
      console.log(Indwcpalyers2024);
      Indwcpalyers2024.unshift("RahulDravid");
    }}>unshift</button>

    <button onClick={()=>{
      console.log(Indwcpalyers2024);
     //Indwcpalyers2024.splice(2,3)
       Indwcpalyers2024.splice(2,3,
      "RahulDravid","RaviShastri","KapilDev")
    }}>Splice</button>
    
    </div> 
  );
}

export default App;
