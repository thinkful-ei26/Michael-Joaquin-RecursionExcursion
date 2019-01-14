const info = {
    zuckerberg:{
        Schroepfer:{
            Bosworth:{
                Steve:{},
                Kyle:{},
                Andra:{}
            },
            Zhoa:{
                Richie:{},
                Sophia:{},
                Jen:{}
            }
        },
        Schrage:{
            VanDyck:{
                Sabrina:{},
                Michelle:{},
                Josh:{}
            },
            Swain:{
                Blanch:{},
                Tom:{},
                Joe:{}
            }
        },
        Sandberg:{
            Goler:{
                Eddie:{},
                Julie:{},
                Annie:{}
            },
            Hernandez:{
                Rowi:{},
                Inga:{},
                Morgan:{}
            },
            Moissinac: {
                Amy: {},
                Chuck:{},
                Vinny: {}
            },
            Kelley: {
                Eric:{},
                Anna:{},
                Wes:{}
            }
        }
    }
}

const employeeInfo = [
    {id:"Zuckerberg", boss:null},
    {id:"Schroepfer", boss:"Zuckerberg"},
    {id:"Schrage", boss:"Zuckerberg"},
    {id:"Sandberg", boss:"Zuckerberg"},
    {id:"Bosworth", boss:"Schroepfer"},
    {id:"Zhoa", boss:"Schroepfer"},
    {id:"VanDyck", boss:"Schrage"},
    {id:"Swain", boss:"Schrage"},
    {id:"Goler", boss:"Sandberg"},
    {id:"Hernandez", boss:"Sandberg"},
    {id:"Moissinac", boss:"Sandberg"},
    {id:"Kelley", boss:"Sandberg"},
    {id:"Steve", boss:"Bosworth"},
    {id:"Kyle", boss:"Bosworth"},
    {id:"Andra", boss:"Bosworth"},
    {id:"Richie", boss:"Zhoa"},
    {id:"Sophia", boss:"Zhoa"},
    {id:"Jen", boss:"Zhoa"},
    {id:"Sabrina", boss:"VanDyck"},
    {id:"Michelle", boss:"VanDyck"},
    {id:"Josh", boss:"VanDyck"},
    {id:"Blanch", boss:"Swain"},
    {id:"Tom", boss:"Swain"},
    {id:"Joe", boss:"Swain"},
    {id:"Eddie", boss:"Goler"},
    {id:"Julie", boss:"Goler"},
    {id:"Annie", boss:"Goler"},
    {id:"Rowi", boss:"Hernandez"},
    {id:"Inga", boss:"Hernandez"},
    {id:"Morgan", boss:"Hernandez"},
    {id:"Amy", boss:"Moissinac"},
    {id:"Chuck", boss:"Moissinac"},
    {id:"Vinny", boss:"Moissinac"},
    {id:"Eric", boss:"Kelley"},
    {id:"Anna", boss:"Kelley"},
    {id:"Wes", boss:"Kelley"}
]


function traverse(employeeInfo, boss) {
    let node = {};
    employeeInfo.filter(item => item.boss === boss)
                   .forEach(item => node[item.id] = traverse(employeeInfo, item.id));
    return node;  
}
// console.log(JSON.stringify(traverse(employeeInfo, null),null,4));
// console.log(traverse(employeeInfo, null));

//iterate the indent on each function call
function formatter(obj, indent=0){
    
    let temp = Object.keys(obj);
    for (let i = 0; i < temp.length; i++) {
       console.log(" ".repeat(indent) + temp[i]);
    //    console.log(Object.keys(obj[temp[i]]));
       formatter(obj[temp[i]], indent+1); 
    }
}
// 

formatter(traverse(employeeInfo, null));