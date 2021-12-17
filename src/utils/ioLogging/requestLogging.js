const { createLogger, format, transports } = require('winston')
const { combine, timestamp, printf, colorize, label } = format


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `[${level}] [${timestamp}] :: ${message}`;
})

const ioLogger = createLogger({
    level: 'info',
    format: combine(
        colorize(),
        timestamp(),
        myFormat,
    ),
    transports: [
        new transports.Console()
    ]
})


const requestLogging = (request, h) => {
    const msg = `[Incoming Request] ${request.method.toUpperCase()} ${request.path}`;
    ioLogger.info(msg);
    return h.continue;
}

exports.requestLogging = requestLogging