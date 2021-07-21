export const formatDate = (date: string): string => {
    const result = date.split('T', 1);
    return result[0];
};