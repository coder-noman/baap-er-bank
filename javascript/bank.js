
// banking page js

// deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    // get deposit Input
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);

    const previousDepositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = previousDepositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(previousDepositTotalText);

    const depositAmount = previousDepositTotalAmount + newDepositAmount;

    previousDepositTotal.innerText = depositAmount;

    // update account Balance
    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);

    const balanceAmount = previousBalanceTotalAmount + newDepositAmount;

    previousBalanceTotal.innerText = balanceAmount;


    // clear the deposit input field
    depositInput.value = '' ;
});

// withdraw button 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    const previousWithdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = previousWithdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    
    const withdrawAmount = previousWithdrawTotalAmount + newWithdrawAmount;

    previousWithdrawTotal.innerText = withdrawAmount;

    // update account Balance
    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);

    const balanceAmount = previousBalanceTotalAmount - newWithdrawAmount;

    previousBalanceTotal.innerText = balanceAmount;



    // clear the withdraw input field
    withdrawInput.value = '' ;

});