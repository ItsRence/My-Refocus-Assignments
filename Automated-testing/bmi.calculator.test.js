const calculate_BMI = require("./bmi_calculator")


test("Checks if the BMI of 16.9 105.4 equals 15.212671345088195", () => {
    expect(calculate_BMI.totalBMI(16.9, 105.4)).toBe(15.212671345088195);
})