"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../touchBistroTestAPI/app");
var expect = require('chai').expect;
describe('Node.js API test cases:', () => {
    it('Test Prime Numbers for 10', () => {
        app_1.findAllPrime(10).then((val) => {
            expect(val).eq([2, 3, 5, 7]);
        });
    });
    it('Test Prime Numbers for 18', () => {
        app_1.findAllPrime(18).then((val) => {
            expect(val).eq([2, 3, 5, 7, 11, 13, 17]);
        });
    });
    it('Test Prime Numbers for decimal', () => {
        app_1.findAllPrime(18.9).then((val) => {
            expect(val).eq([2, 3, 5, 7, 11, 13, 17]);
        });
    });
    it('Test Prime Numbers for string', () => {
        app_1.findAllPrime(+'y').then((val) => { }).catch(() => expect(true).eq(true));
    });
    it('Test Median for even list', () => {
        app_1.findMedianOfPrime([2, 3, 5, 7]).then((val => {
            expect(val).eq([3, 5]);
        }));
    });
    it('Test Median for odd list', () => {
        app_1.findMedianOfPrime([2, 3, 5, 7, 11]).then((val => {
            expect(val).eq([5]);
        }));
    });
});
