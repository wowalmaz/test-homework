export function calcSum(sales) {
    let sum = 0;

    for (let sale of sales) {
        if (sale > 10000) {
            sale = sale * 1.05;
        }
        sum = sum + sale;
    }
    
    return sum;
}
