import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(), // Include timestamp
        winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'log.txt', level: "info" })
    ]
});

const logMiddlware = (req, res, next) => {
    const logMessage = `${req.method} ${req.originalUrl} - Body: ${JSON.stringify(req.body)} - IP: ${req.ip}`;
    logger.info(logMessage);
    next();
};

export default logMiddlware;
