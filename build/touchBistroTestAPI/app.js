"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
// Create a new express application instance
const app = express();
const port = 3000;
// setting up CORS for connecting with Angular HTTP calls
app.use(cors({
    origin: 'http://localhost:2707',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}));
// class for finding Prime Numbers
class CheckPrime {
    constructor(num, isPrime = true) {
        this.num = num;
        this.isPrime = isPrime;
    }
}
// method to find All Prime Numbers to the maximum number
exports.findAllPrime = (max) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => {
        try {
            let retVal;
            let checkPrime = new Array();
            // Implementaion of Sieve of Eratosthenes algorithm
            for (let index = 2; index <= max; index++) {
                checkPrime.push(new CheckPrime(index));
            }
            ;
            for (let i = 2; i <= Math.sqrt(max); i++) {
                if (checkPrime.find(n => n.num === i).isPrime) {
                    for (let j = Math.pow(i, 2), t = i; j <= max; j = ((Math.pow(i, 2)) + ((t++ - 2) * i))) {
                        checkPrime.find(num => num.num === j).isPrime = false;
                    }
                }
            }
            retVal = new Array();
            checkPrime.filter(num => num.isPrime).forEach((prime) => retVal.push(prime.num));
            res(retVal);
        }
        catch (error) {
            rej(error);
        }
    });
});
exports.findMedianOfPrime = (primeNum) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => {
        try {
            let retVal = new Array();
            if (primeNum.length % 2 == 0) {
                retVal.push(primeNum[primeNum.length / 2 - 1]);
                retVal.push(primeNum[primeNum.length / 2]);
            }
            else {
                retVal.push(primeNum[Math.floor(primeNum.length / 2)]);
            }
            res(retVal);
        }
        catch (error) {
            rej(error);
        }
    });
});
app.get('/medianPrime/:number', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    exports.findAllPrime(+req.params.number).then((primeNums) => exports.findMedianOfPrime(primeNums).then((medianNums) => res.json(medianNums)))
        .catch(next);
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
