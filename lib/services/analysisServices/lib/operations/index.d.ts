/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Servers
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AnalysisServicesManagementClient.
 */
export interface Servers {

    /**
     * Gets details about the specified Analysis Services server
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDetails(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalysisServicesServer>): void;
    getDetails(resourceGroupName: string, serverName: string, callback: ServiceCallback<models.AnalysisServicesServer>): void;

    /**
     * Provisions the specified Analysis Services server based on the
     * configuration specified in the request
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} serverParameters Request body for provisioning
     * 
     * @param {object} [serverParameters.asAdministrators]
     * 
     * @param {array} [serverParameters.asAdministrators.members] Collection of
     * administrator user identities
     * 
     * @param {string} serverParameters.location Location of the Analysis Services
     * resource
     * 
     * @param {object} serverParameters.sku Sku of the Analysis Services resource
     * 
     * @param {string} serverParameters.sku.name Name of the Sku level for the
     * server being provisioned. Possible values include: 'S1', 'S2', 'S4', 'D1'
     * 
     * @param {string} [serverParameters.sku.tier] Name of the tier to which the
     * Sku applies. Possible values include: 'Development', 'Standard'
     * 
     * @param {object} [serverParameters.tags] Key value pairs of additional
     * properties that can ebe specified
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(resourceGroupName: string, serverName: string, serverParameters: models.AnalysisServicesServer, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalysisServicesServer>): void;
    create(resourceGroupName: string, serverName: string, serverParameters: models.AnalysisServicesServer, callback: ServiceCallback<models.AnalysisServicesServer>): void;

    /**
     * Provisions the specified Analysis Services server based on the
     * configuration specified in the request
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} serverParameters Request body for provisioning
     * 
     * @param {object} [serverParameters.asAdministrators]
     * 
     * @param {array} [serverParameters.asAdministrators.members] Collection of
     * administrator user identities
     * 
     * @param {string} serverParameters.location Location of the Analysis Services
     * resource
     * 
     * @param {object} serverParameters.sku Sku of the Analysis Services resource
     * 
     * @param {string} serverParameters.sku.name Name of the Sku level for the
     * server being provisioned. Possible values include: 'S1', 'S2', 'S4', 'D1'
     * 
     * @param {string} [serverParameters.sku.tier] Name of the tier to which the
     * Sku applies. Possible values include: 'Development', 'Standard'
     * 
     * @param {object} [serverParameters.tags] Key value pairs of additional
     * properties that can ebe specified
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreate(resourceGroupName: string, serverName: string, serverParameters: models.AnalysisServicesServer, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalysisServicesServer>): void;
    beginCreate(resourceGroupName: string, serverName: string, serverParameters: models.AnalysisServicesServer, callback: ServiceCallback<models.AnalysisServicesServer>): void;

    /**
     * Deletes the specified Analysis Services server.
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, serverName: string, callback: ServiceCallback<void>): void;

    /**
     * Deletes the specified Analysis Services server.
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, serverName: string, callback: ServiceCallback<void>): void;

    /**
     * Updates the current state of the specified Analysis Services server
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} serverUpdateParameters Request object for updating the
     * server
     * 
     * @param {object} [serverUpdateParameters.sku] Sku of the Analysis Services
     * resource
     * 
     * @param {string} serverUpdateParameters.sku.name Name of the Sku level for
     * the server being provisioned. Possible values include: 'S1', 'S2', 'S4',
     * 'D1'
     * 
     * @param {string} [serverUpdateParameters.sku.tier] Name of the tier to which
     * the Sku applies. Possible values include: 'Development', 'Standard'
     * 
     * @param {object} [serverUpdateParameters.tags] Key value pairs of additional
     * properties that can ebe specified
     * 
     * @param {object} [serverUpdateParameters.asAdministrators]
     * 
     * @param {array} [serverUpdateParameters.asAdministrators.members] Collection
     * of administrator user identities
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, serverName: string, serverUpdateParameters: models.AnalysisServicesServerUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalysisServicesServer>): void;
    update(resourceGroupName: string, serverName: string, serverUpdateParameters: models.AnalysisServicesServerUpdateParameters, callback: ServiceCallback<models.AnalysisServicesServer>): void;

    /**
     * Supends the specified Analysis Services server instance
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    suspend(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    suspend(resourceGroupName: string, serverName: string, callback: ServiceCallback<void>): void;

    /**
     * Supends the specified Analysis Services server instance
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginSuspend(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginSuspend(resourceGroupName: string, serverName: string, callback: ServiceCallback<void>): void;

    /**
     * Resumes the specified Analysis Services server instance
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    resume(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    resume(resourceGroupName: string, serverName: string, callback: ServiceCallback<void>): void;

    /**
     * Resumes the specified Analysis Services server instance
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {string} serverName Name of the Analysis Services server
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginResume(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginResume(resourceGroupName: string, serverName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets all the Analysis Services servers for the given resource group
     *
     * @param {string} resourceGroupName Name of the Azure Resource group which a
     * given Analysis Services server is part of.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalysisServicesServers>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.AnalysisServicesServers>): void;

    /**
     * List all the Analysis Services servers for the given subscription
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalysisServicesServers>): void;
    list(callback: ServiceCallback<models.AnalysisServicesServers>): void;
}
