import { environment } from 'src/environments/environment';

export const ENDPOINT: any = {
    USER: `${ environment.endpoint }/user`,
    LOGIN: `${ environment.endpoint }/login`,
    CONTEST: `${ environment.endpoint }/contest`
};
