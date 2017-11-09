import equals from '../equals';

describe('equals', () => {
  describe('one level', () => {
    describe('when all keys are the same', () => {
      it('returns true', () => {
        const object1 = {
          a: 'a',
          b: 'b',
        };
        const object2 = {
          a: 'a',
          b: 'b',
        };
        expect(equals(object1, object2)).toBe(true);
      });
    });

    describe('when all keys are the not same', () => {
      it('returns false', () => {
        const object1 = {
          a: 'a',
          b: 'b',
        };
        const object2 = {
          a: 'a',
          b: 'c',
        };
        expect(equals(object1, object2)).toBe(false);
      });
    });

    describe('when not the same number of keys', () => {
      it('returns false', () => {
        const object1 = {
          a: 'a',
          b: 'b',
          c: 'c',
        };
        const object2 = {
          a: 'a',
          b: 'b',
        };
        expect(equals(object1, object2)).toBe(false);
      });
    });
  });

  describe('two levels', () => {
    describe('when all sub keys are the same', () => {
      it('returns true', () => {
        const object1 = {
          a: {
            b: 'b',
          },
        };
        const object2 = {
          a: {
            b: 'b',
          },
        };
        expect(equals(object1, object2)).toBe(true);
      });
    });
  });

  describe('when all sub keys are the not same', () => {
    it('returns false', () => {
      const object1 = {
        a: {
          b: 'b',
        },
      };
      const object2 = {
        a: {
          c: 'c',
        },
      };
      expect(equals(object1, object2)).toBe(false);
    });
  });

  describe('three levels', () => {
    describe('when all sub keys are the same', () => {
      it('returns true', () => {
        const object1 = {
          a: {
            b: {
              c: 'c',
            },
          },
        };
        const object2 = {
          a: {
            b: {
              c: 'c',
            },
          },
        };
        expect(equals(object1, object2)).toBe(true);
      });
    });
  });

  describe('when all sub keys are the not same', () => {
    it('returns false', () => {
      const object1 = {
        a: {
          b: {
            c: 'c',
          },
        },
      };
      const object2 = {
        a: {
          b: {
            d: 'd',
          },
        },
      };
      expect(equals(object1, object2)).toBe(false);
    });
  });
});
