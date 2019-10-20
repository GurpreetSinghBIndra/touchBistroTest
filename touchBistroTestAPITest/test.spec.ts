import { findAllPrime, findMedianOfPrime } from '../touchBistroTestAPI/app';

var expect = require('chai').expect;

describe('Node.js API test cases:', () => {
    it('Test Prime Numbers for 10', () => {
        findAllPrime(10).then((val) => {
            expect(val).eq([2, 3, 5, 7]);
        });
    });

    it('Test Prime Numbers for 18', () => {
        findAllPrime(18).then((val) => {
            expect(val).eq([2, 3, 5, 7, 11, 13, 17]);
        });
    });

    it('Test Prime Numbers for decimal', () => {
        findAllPrime(18.9).then((val) => {
            expect(val).eq([2, 3, 5, 7, 11, 13, 17]);
        });
    });

    it('Test Prime Numbers for string', () => {
        findAllPrime(+'y').then((val) => { }).catch(() => expect(true).eq(true));
    });

    it('Test Median for even list', () => {
        findMedianOfPrime([2, 3, 5, 7]).then((val => {
            expect(val).eq([3, 5])
        }));
    });

    it('Test Median for odd list', () => {
        findMedianOfPrime([2, 3, 5, 7, 11]).then((val => {
            expect(val).eq([5])
        }));
    });
});