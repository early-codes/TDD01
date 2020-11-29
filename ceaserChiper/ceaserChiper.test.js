import ceaserChiper from './ceaserChiper'

test("alphabet to be shifted 3", () => {
    expect(ceaserChiper(3, "abcdefghijklmnopqrstuvwxyz")).toBe("defghijklmnopqrstuvwxyzabc")
})

test("alphabet to be shifted 5", () => {
    expect(ceaserChiper(5, "abcdefghijklmnopqrstuvwxyz")).toBe("fghijklmnopqrstuvwxyzabcde")
})

test("text to be shifted 9", () => {
    expect(ceaserChiper(9, "defend the east wall of the castle")).toBe("mnonwm cqn njbc fjuu xo cqn ljbcun")
})

test("capital text to be shifted 7", () => {
    expect(ceaserChiper(7, "ASDFGHJL QWERTYU")).toBe("HZKMNOQS XDLYAFB")
})