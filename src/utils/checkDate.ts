const isDateInFuture = (date: Date) => new Date(date).getTime() > new Date().getTime();

export default isDateInFuture;
