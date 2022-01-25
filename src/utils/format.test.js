import SetNumberFormat from "./SetNumberFormat";

test('test1', () => {
    expect(SetNumberFormat(11.234234)).toBe("11.6");
});

test('test2', () => {
    expect(SetNumberFormat(0)).toBe("0.00");
});