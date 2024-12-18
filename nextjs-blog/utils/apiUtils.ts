// eslint-disable @typescript-eslint/no-explicit-any
/* eslint-disable no-underscore-dangle */
/**
 * Utility methods to be used for invoking API methods
 */

import Axios, { AxiosRequestHeaders } from "axios";
import ct from "countries-and-timezones";
import moment from "moment-timezone";
import queryString from "querystring";
import { Cookies } from "react-cookie";

import { UriEndPoint } from "../Interface/index";

// Interfaces

// export const hostname = () => 'https://test-cms-site-api.sol-m.com';
export const hostname = () => "https://api.performancevisioneyecare.ca/api";

export const cookies = new Cookies();

/**
 * Use this to get backend appliation domain
 * @returns
 */

const hostUrl = hostname();
interface PathParams {
  [key: string]: string;
}
interface BodyParams {
  [key: string]: any;
}
interface QueryParams {
  [key: string]: string;
}

export const makeUrl = (
  {
    uri,
    pathParams,
    query,
    version,
  }: {
    pathParams?: PathParams;
    query?: QueryParams;
    uri: string;
    method: string;
    version: string;
    headerProps?: AxiosRequestHeaders;
  },
  host: string | undefined
): string => {
  const url = `${host || hostUrl}${version}${uri
    ?.split("/")
    .map((param: string) =>
      param.charAt(0) === ":"
        ? encodeURI(pathParams?.[param.slice(1)] || "")
        : param
    )
    .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;

  return url;
};

let userCountry: any;
const timezone = moment.tz.guess();
// eslint-disable-next-line prefer-const
userCountry = ct.getCountriesForTimezone(timezone);
export const getDefaultHeaders = () => ({
  Location: "IN" || null,
  "Content-Type": "application/json",
});

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 1.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callAxios
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */

interface CallAxiosInput {
  uriEndPoint: UriEndPoint;
  pathParams?: PathParams;
  query?: QueryParams;
  body?: BodyParams;
  apiHostUrl?: string;
}
const callAxios = ({
  uriEndPoint,
  pathParams,
  query,
  body,
  apiHostUrl,
}: CallAxiosInput) =>
  Axios({
    method: uriEndPoint.method,
    url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
    withCredentials: true,
    headers: {
      ...getDefaultHeaders(),
      ...uriEndPoint.headerProps,
    },
    data: body || {},
  });

/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 1.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callMockios
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */
const callMockios = ({
  uriEndPoint,
  pathParams,
  query,
  body,
}: CallAxiosInput) =>
  Axios({
    method: uriEndPoint.method,
    url: makeUrl(
      { ...uriEndPoint, pathParams, query },
      `${window.location.protocol}//${window.location.hostname}:3030`
    ),
    headers: {
      // ...getDefaultHeaders(),
      ...uriEndPoint.headerProps,
    },
    data: body || {},
  });

interface CallApiProps {
  uriEndPoint: UriEndPoint;
  pathParams?: PathParams;
  query?: QueryParams;
  body?: BodyParams;
  apiHostUrl?: string;
  mock?: boolean;
}
/**
 * Extract the error messages from a failed API response.
 * @param {} apiResponse
 */
// const extractErrors = () => {};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 2.0.0
 * @author Manjot Singh
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callApi
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {String} APIParamaters.apiHostUrl - Use this to override the host url for calling external apis, example weather api https://api.openweathermap.org.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */

export function callApi<ResponseType>({
  uriEndPoint,
  pathParams,
  query,
  body,
  apiHostUrl,
  mock,
}: CallApiProps): Promise<ResponseType> {
  return new Promise((resolve, reject) => {
    let callGenericApi = callAxios;
    if (mock) callGenericApi = callMockios;
    callGenericApi({
      uriEndPoint,
      pathParams,
      query,
      body,
      apiHostUrl,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
