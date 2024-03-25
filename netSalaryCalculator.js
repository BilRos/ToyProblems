/*
Write a program whose major task is to calculate an individual’s Net Salary
 by getting the inputs of basic salary and benefits. 
 Calculate the payee (i.e. Tax),
  NHIFDeductions, 
  NSSFDeductions,
   gross salary, 
   and net salary.

**NB:** Use KRA, NHIF, and NSSF values provided in the link below.

- [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF and NSSF rates](https://www.aren.co.ke/payroll/taxrates.htm)

*/

//Net Salary calculator


function calculate (basicSalary,benefits){

//Here  I am describing different aspects of the salary
    let netSalary;
    let payee;
    let NHIFDeductions;
    let NSSFDeductions;
    let grossSalary;

     grossSalary=basicSalary+benefits;

    netSalary = grossSalary - (payee+NHIFDeductions+NSSFDeductions);
//Formula for calculating PAYE
    payee = (mSalary) => {
        mSalary= grossSalary;

        if (mSalary <= 24000){
            return mSalary * (10/100);
    
        }
        else if (mSalary >= 24001 && mSalary <= 32333){
            return ((mSalary-24000) * 0.25) + (24000 * 0.1)
        }
        else if (mSalary >= 32334 && mSalary <= 500000){
            return ((mSalary - 32333) * 0.3) + (24000 * 0.1) +  (32333 * 0.25);
        }
        else if (mSalary >= 500001 && mSalary <= 800000){
            return ((mSalary - 500000) * 0.32) + (24000 * 0.1) + (500000 * 0.3);
        }
        else {
            return mSalary * 0.35;
        }
    
    }
//Formula for calculating NHIF deductions
    NHIFDeductions = (grossPay) => {

        grossPay =grossSalary;

        if (grossPay <= 5999){
            return 150;
        }
        else if (grossPay >= 6000 && grossPay <= 7999){
            return 300;
        }
        else if (grossPay >= 8000 && grossPay <= 11999){
            return 400;
        }
        else if (grossPay >= 12000 && grossPay <= 14999){
            return 500;
        }
        else if (grossPay >= 15000 && grossPay <= 19999){
            return 600;
        }
        else if (grossPay >= 20000 && grossPay <= 24999){
            return 750;
        }
        else if (grossPay >= 25000 && grossPay <= 29999){
            return 850;
        }
        else if (grossPay >= 30000 && grossPay <= 34999){
            return 900;
        }
        else if (grossPay >= 35000 && grossPay <= 39999){
            return 950;
        }
        else if (grossPay >= 40000 && grossPay <= 44999){
            return 1000;
        }
        else if (grossPay >= 45000 && grossPay <= 49999){
            return 1100;
        }
        else if (grossPay >= 50000 && grossPay <= 59999){
            return 1200;
        }
        else if (grossPay >= 60000 && grossPay <= 69999){
            return 1300;
        }
        else if (grossPay >= 70000 && grossPay <= 79999){
            return 1400;
        }
        else if (grossPay >= 80000 && grossPay <= 89999){
            return 1500;
        }
        else if (grossPay >= 90000 && grossPay <= 99999){
            return 1600;
        }
        else if (grossPay >= 100000 ){
            return 1700;
        }
        
    }

//I got abit confused here . I didnot know how exaclty to compute this function
    NSSFDeductions = (pensionScheme) => {
        //Here I was able to come up with a value for the pension scheme
       
        if (pensionScheme<=7000) {
             return pensionScheme*0.06;
        } 
        else if (pensionScheme>7000 && pensionScheme<36000) {
            return pensionScheme *0.06;
            }
            NSSFDeductions(35000);
            NSSFDeductions(35000);
            NSSFDeductions(20000);
            NSSFDeductions(3200);
            
    
    
}

}
//Valus for basicSalary and benefits
calculate(5000000,490000);
calculate(8000000,490000);
calculate(500000,49000);
calculate(50000,4900);