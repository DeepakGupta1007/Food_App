import { sum } from "../Sum"

test('Sum Function should calculate the sum of ywo numbers.', () => {
    const result = sum(2,3);

    //Known as Assertion
    expect(result).toBe(5);

    //Wrong result
    // expect(result).toBe(6);
});

//First argument is the description of the test.