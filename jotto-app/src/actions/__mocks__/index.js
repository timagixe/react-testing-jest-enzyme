module.exports = {
    ...jest.requireActual(".."),
    __esModule: true,
    getSecretWord: jest.fn(() => ({ type: "mock" })),
};
