//node modules//
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
const { connect } = require('http2');

//Inquirer To Generate Questions//
inquirer.prompt[
    [
        {
            type: 'input',
            message="what's the project title",
            name:'title',
            //validate property to cheek that user provides value//
            validate: (value)=>{ if(value){return true} else{return 'i need a value to continue'}},
        },
        {
            type:'input',
            massage:'how so you install your app?',
            name:'installation',
            validate: (value)=>{ if(value){return true} else{return 'i need a value to continue'}},
        },
        {
            type:'input',
            massage:'instructions to be fallow?',
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else{return 'i need a value to continue'}},
        },
        {
            type:'input',
            massage: 'any credits?',
            name:'installation',
            validate: (value)=>{ if(value){return true} else{return 'i need a value to continue'}},
        },
        {
            type:'input',
            massage: 'how do you use your app?',
            name:'usage',
            validate: (value)=>{ if(value){return true} else{return 'i need a value to continue'}},
        },
        {
            //List of License//
            type:'input',
            massage: 'what license did you used?',
            name:'license',
            choice:[ 'The MET License', 'The Gpl License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{ if(value){return true} else{return 'i need a value to continue'}},
        },
        {
            type:'input',
            massage: 'GitHub username',
            name:'github',
            validate: (value)=>{ if(value){return true} else{return 'i need a value to continue'}},
        },
        {
            type:'input',
            massage: 'E-mail?',
            name:'email',
            validate: (value)=>{ if(value){return true} else{return 'i need a value to continue'}},
        },
 ]
].then[({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    email,
    usage,
    contribution

})=>{
    //Template to be used//
    const template =`# ${title}

    * [installation](#insatallation)
    * [Usage](#usage)
    * [contribution](#contribution')
    * [Credits](#credits)
    * [License](#license)
    * Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ### installation
    ${installation}
    ## Credits
    ${credits}
    ## License
    ${license}

    # Contact
    * GitHub :${git}
    * E-mail :${email}`;
    
    //Function to creat our readme using fs//
    creatNowFile(title,template);
}
]
//creating our creatnewfile function//
function creatNowFile(fileName,data){
//fs
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,()=>{
    if(err){
        console.log(err)
    }
    console.log['Your ReadMe has been generated']
})
}
//New Lets Install Our Package//