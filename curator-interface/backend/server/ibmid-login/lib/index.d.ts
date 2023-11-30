import { Router, Handler } from "express"

interface Response {
    statusCode: number,
    headers?: { [key: string]: any },
    body?: any
}

interface ExpressAdapter extends Router {
    authenticate: ({ fallback_url: string }) => Handler
}

declare class IBMidService {

    static default: IBMidService

    expressAdapter: ExpressAdapter

    constructor(options: {
        IAM_URL?: string,
        ACCOUNTS_URL?: string,
        RESOURCE_CONTROLLER_URL?: string,
        GLOBAL_CATALOG_URL?: string,
        RESOURCE_SERVICE_CACHE_TIMEOUT?: number,
        GLOBAL_CATALOG_API_CACHE_TIMEOUT?: number,
        IAM_OPENID_CONFIG_CACHE_TIMEOUT?: number,
        
        ALLOWED_ACCOUNTS?: string[],
        ALLOWED_USERS?: string[],
        IBMID_APIKEY?: string,
        IBMID_APIKEY_LOGIN_CACHE_TIMEOUT?: number
    })

    getPasscode(): Promise<Response>

    login(options: { apikey: string, passcode: string }): Promise<Response>

    logout(): Promise<Response>

    switchAccount(options: { refreshToken: string, accountID: string }): Promise<Response>

    getOwnUser(options: { token: string }): Promise<Response>

    listAccounts(options: { token: string }): Promise<Response>

    listResources(options: { token: string, resourceType: string }): Promise<Response>

    listCuratorResources(options: { token: string, refreshToken: string }): Promise<Response>

    listCuratorAssistants(options: { token: string; resourceID: string }): Promise<Response>;
  
    getCuratorResourcesKeys(options: { token: string, resources: object }): Promise<Response>

    manageCuratorWorkspace(options: { token: string, resources: object }): Promise<Response>

    getCuratorWorkspaces(options: { token: string }): Promise<Response>
    
    runCuratorExperiment(options: { token: string, resources: object }): Promise<Response>

    getCuratorWorkspace(options: { token: string, workspaceId: string,resourceId: string }): Promise<Response>
    
    listCuratorBuckets(options: { region: string, id: string }): Promise<Response>
    
    manageResource(options: { token: string, resourceID: string, url: string, method?: string, params?: any, data?: any }): Promise<Response>

    proxy(options: { token: string, resourceID: string, url: string, method?: string, headers?: any, params?: any, data?: any }): Promise<Response>

}

export default IBMidService
