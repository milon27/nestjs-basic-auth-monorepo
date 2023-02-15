
export default () => ({
    AUTH_PORT: process.env.AUTH_PORT || 2727,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    KAFKA_BROKER: process.env.KAFKA_BROKER,
});
