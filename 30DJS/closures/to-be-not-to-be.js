// 2704. To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

const expect = (val) => {
    return {
        toBe: (tbVal) => {
            if (val === tbVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (ntbVal) => {
            if (val !== ntbVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};
