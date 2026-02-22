import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

describe('sum - full coverage', () => {
    // Skenario 1: kedua argumen adalah bilangan positif
    it('should return the correct sum of two positive numbers', () => {
        assert.equal(sum(3, 4), 7);
    });

    // Skenario 2: kedua argumen adalah 0
    it('should return 0 when both arguments are 0', () => {
        assert.equal(sum(0, 0), 0);
    });

    // Skenario 3: salah satu argumen adalah 0
    it('should return correct sum when one argument is 0', () => {
        assert.equal(sum(0, 10), 10);
        assert.equal(sum(10, 0), 10);
    });

    // Skenario 4: argumen pertama negatif -> return 0
    it('should return 0 when the first argument is negative', () => {
        assert.equal(sum(-1, 5), 0);
    });

    // Skenario 5: argumen kedua negatif -> return 0
    it('should return 0 when the second argument is negative', () => {
        assert.equal(sum(5, -1), 0);
    });

    // Skenario 6: kedua argumen negatif -> return 0
    it('should return 0 when both arguments are negative', () => {
        assert.equal(sum(-3, -4), 0);
    });

    // Skenario 7: argumen pertama bukan number -> return 0
    it('should return 0 when the first argument is not a number', () => {
        assert.equal(sum('hello', 5), 0);
    });

    // Skenario 8: argumen kedua bukan number -> return 0
    it('should return 0 when the second argument is not a number', () => {
        assert.equal(sum(5, 'world'), 0);
    });

    // Skenario 9: kedua argumen bukan number -> return 0
    it('should return 0 when both arguments are not numbers', () => {
        assert.equal(sum('a', 'b'), 0);
    });

    // Skenario 10: argumen bertipe boolean -> return 0 (bukan number)
    it('should return 0 when arguments are booleans', () => {
        assert.equal(sum(true, 2), 0);
        assert.equal(sum(2, false), 0);
    });

    // Skenario 11: argumen null atau undefined -> return 0
    it('should return 0 when arguments are null or undefined', () => {
        assert.equal(sum(null, 5), 0);
        assert.equal(sum(5, undefined), 0);
    });
});
