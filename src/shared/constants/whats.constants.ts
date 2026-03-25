const openWhats = (message: string, number: string) => {
    return `https://wa.me/55${number}?text=${message}`;
};

export default openWhats;