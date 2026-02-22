import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

describe('sum', () => {
    it('should return the sum of two positive numbers', () => {
        assert.equal(sum(2, 3), 5);
    });

    it('should return the sum when one number is zero', () => {
        assert.equal(sum(0, 5), 5);
        assert.equal(sum(5, 0), 5);
    });

    it('should return 0 when both numbers are zero', () => {
        assert.equal(sum(0, 0), 0);
    });

    it('should return the correct sum of large numbers', () => {
        assert.equal(sum(100, 200), 300);
    });

    it('should return the sum of two decimal numbers', () => {
        assert.equal(sum(1.5, 2.5), 4);
    });
});
