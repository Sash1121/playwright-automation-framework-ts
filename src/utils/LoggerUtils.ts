export class LoggerUtils {
    static logInfo(message: string): void {
        console.log(`INFO: ${message}`);
    }

    static logError(message: string): void {
        console.log(`ERROR: ${message}`);
    }
}