import { describe, expect, it } from 'vitest';

describe('V2 workspace', () => {
  it('runs the unit-test harness', () => {
    expect('portfolio-v2').toContain('v2');
  });
});
