import { CancelToken, ResponseType } from "axios";

export interface IClientHttpRequest {
  responseType?: ResponseType;
  host?: string;
  cookies?: any;
  cancelToken?: CancelToken;
  Origin?: string;
}
