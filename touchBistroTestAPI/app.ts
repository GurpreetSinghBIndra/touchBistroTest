import express = require('express');
import cors = require('cors');

// Create a new express application instance
const app: express.Application = express();
const port: number = 3000;

// setting up CORS for connecting with Angular HTTP calls
app.use(cors({
    origin: 'http://localhost:2707',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}));

// class for finding Prime Numbers
class CheckPrime {
    constructor(public num: number, public isPrime: boolean = true) { }
}

// method to find All Prime Numbers to the maximum number
export const findAllPrime = async (max: number): Promise<number[]> => {
    return new Promise((res, rej) => {
        try {
            let retVal: Array<number>;
            let checkPrime: Array<CheckPrime> = new Array<CheckPrime>();

            // Implementaion of Sieve of Eratosthenes algorithm
            for (let index: number = 2; index <= max; index++) {
                checkPrime.push(new CheckPrime(index));
            };

            for (let i: number = 2; i <= Math.sqrt(max); i++) {
                if ((checkPrime.find(n => n.num === i) as CheckPrime).isPrime) {
                    for (let j: number = i ** 2, t: number = i; j <= max; j = ((i ** 2) + ((t++ - 2) * i))) {
                        (checkPrime.find(num => num.num === j) as CheckPrime).isPrime = false;
                    }
                }
            }

            retVal = new Array<number>();
            checkPrime.filter(num => num.isPrime).forEach((prime) => retVal.push(prime.num));
            res(retVal);
        } catch (error) {
            rej(error);
        }
    });
}

export const findMedianOfPrime = async (primeNum: Array<number>): Promise<number[]> => {
    return new Promise((res, rej) => {
        try {
            let retVal: Array<number> = new Array<number>();
            if (primeNum.length % 2 == 0) {
                retVal.push(primeNum[primeNum.length / 2 - 1]);
                retVal.push(primeNum[primeNum.length / 2]);
            }
            else {
                retVal.push(primeNum[Math.floor(primeNum.length / 2)]);
            }
            res(retVal);
        } catch (error) {
            rej(error);
        }
    });
}

app.get('/medianPrime/:number', async (req, res, next) => {
    findAllPrime(+req.params.number).then((primeNums: Array<number>) =>
        findMedianOfPrime(primeNums).then((medianNums: Array<number>) => res.json(medianNums)))
        .catch(next);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));