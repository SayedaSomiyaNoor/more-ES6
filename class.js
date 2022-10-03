class Support{
    name;
    designation='support web dev'
    address='';
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    startSession(){
        console.log(this.name,"start a support session");
    }
}
const afridi= new Support('Shahin Afridi',"BD");
console.log(afridi);
afridi.startSession()
const amir= new Support('Amir khan','Dubai');
console.log(amir);
amir.startSession();