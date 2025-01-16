export const useStatistics = () => {
    const handleTotals = (total: number) => {
        const map = {
            K: 1000,
            M: 1000000,
        };

        return total >= map.K && total < map.M
            ? "K"
            : total >= map.M
            ? "M"
            : "";
    };

    return {
        handleTotals,
    };
};
