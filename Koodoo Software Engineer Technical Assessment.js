const accountTypeChecker = (accountBalanceHistory) => {
    let counter = accountBalanceHistory.length-1; 
    let result = false;
  
    for(let ind=0;ind<counter;ind++){
      
      let cb = parseInt(accountBalanceHistory[ind].account.balance.amount);//get current month balance
      
      let nb = parseInt(accountBalanceHistory[ind+1].account.balance.amount);//get previous month balance
      

      if(ind===0){
        diff = nb-cb; //calculate difference amount
      }else{
        if((nb-cb)===diff){//compare difference amount with previous balance if match then each month balance amount goes down by the same value 
          result = false;
        }else{
          result = true;
        } 
      }        
    }
  return result ? "A" : "B";   
};

/*
1]

  const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }   
  ]

  let data = accountTypeChecker(accountBalanceHistory);
  console.log(data);
  result : B

2]

  const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 300 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }   
  ]

  let data = accountTypeChecker(accountBalanceHistory);
  console.log(data);
  result : A  
*/