

for (var num = 99;num >=0;num--) {
       if  (num > 2) {
           sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
       }
        else if (num == 2){
            sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottle of juice on the wall!");
        }
        else if (num === 1) {
            sub=num - 1;
           console.log(num +" bottle of juice on the wall! " + num+ " bottle of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
        }
           
    }