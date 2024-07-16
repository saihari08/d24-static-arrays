class MarkSheet{

    static aboutMarks=()=>{
        console.log(`In 10th class overall pass percentage is 87.7 `)
    }
    static passMarks=35;
    constructor(){
        console.log("inside MarkSheet constructor")

    this.mathsMarks=96;
    this.teluguMarks=78;
    this.hindiMarks=88;
    this.scienceMarks=90;
    this.englishMarks=80;
    this.socialMarks=89;
    
    }
    calculateResult=()=>{
        if(this.mathsMarks>=MarkSheet.passMarks &&
            this.teluguMarks>=MarkSheet.passMarks &&
            this.hindiMarks>=MarkSheet.passMarks &&
            this.scienceMarks>=MarkSheet.passMarks &&
            this.englishMarks>=MarkSheet.passMarks &&
            this.socialMarks>=MarkSheet.passMarks ){
                console.log(`Student Passed in Tenth`)
        }else{
             console.log(`Student failed in Tenth`)
        }
    }
}


export default MarkSheet;