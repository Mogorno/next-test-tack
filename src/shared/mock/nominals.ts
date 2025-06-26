const nominals = [10, 20, 50, 100, 200, 500, 1000, 5000];

export default nominals.map((nominal) => ({
    nominal,
    inStock: Math.floor(Math.random() * 5),
}));
