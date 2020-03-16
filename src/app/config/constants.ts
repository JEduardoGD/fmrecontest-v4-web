import { environment } from 'src/environments/environment';

export const ENDPOINT: any = {
    USER: `${ environment.endpoint }/user`,
    LOGIN: `${ environment.endpoint }/login`,
    CONTEST: `${ environment.endpoint }/contest`,
    EDITION: `${ environment.endpoint }/edition`,
    EMAIL: `${ environment.endpoint }/emails`,
    CONTEOS: `${ environment.endpoint }/conteo`,
    CONTESTLOG: `${ environment.endpoint }/contestlogs`,
    QSOS: `${ environment.endpoint }/qsos`
};
