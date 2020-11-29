import capitalize from "./StringCapitalize"

test("to be capitalized", () => {
    expect(capitalize("banana")).toBe("BANANA")
})

test("to be capitalized", () => {
    expect(capitalize("ilker")).toBe("ILKER")
})