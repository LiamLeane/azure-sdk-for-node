/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.ArmPlan = require('./armPlan');
exports.Resource = require('./resource');
exports.CertificateOrderCertificate = require('./certificateOrderCertificate');
exports.SkuDescription = require('./skuDescription');
exports.CertificateOrder = require('./certificateOrder');
exports.CertificateDetails = require('./certificateDetails');
exports.ReissueCertificateOrderRequest = require('./reissueCertificateOrderRequest');
exports.RenewCertificateOrderRequest = require('./renewCertificateOrderRequest');
exports.CertificateOrderAction = require('./certificateOrderAction');
exports.CertificateEmail = require('./certificateEmail');
exports.Certificate = require('./certificate');
exports.HostingEnvironmentProfile = require('./hostingEnvironmentProfile');
exports.Csr = require('./csr');
exports.ClassicMobileService = require('./classicMobileService');
exports.Domain = require('./domain');
exports.Contact = require('./contact');
exports.Address = require('./address');
exports.HostName = require('./hostName');
exports.DomainPurchaseConsent = require('./domainPurchaseConsent');
exports.User = require('./user');
exports.GeoRegion = require('./geoRegion');
exports.ServerFarmWithRichSku = require('./serverFarmWithRichSku');
exports.Site = require('./site');
exports.HostNameSslState = require('./hostNameSslState');
exports.SiteConfig = require('./siteConfig');
exports.NameValuePair = require('./nameValuePair');
exports.ConnStringInfo = require('./connStringInfo');
exports.HandlerMapping = require('./handlerMapping');
exports.VirtualApplication = require('./virtualApplication');
exports.VirtualDirectory = require('./virtualDirectory');
exports.Experiments = require('./experiments');
exports.RampUpRule = require('./rampUpRule');
exports.SiteLimits = require('./siteLimits');
exports.AutoHealRules = require('./autoHealRules');
exports.AutoHealTriggers = require('./autoHealTriggers');
exports.RequestsBasedTrigger = require('./requestsBasedTrigger');
exports.StatusCodesBasedTrigger = require('./statusCodesBasedTrigger');
exports.SlowRequestsBasedTrigger = require('./slowRequestsBasedTrigger');
exports.AutoHealActions = require('./autoHealActions');
exports.AutoHealCustomAction = require('./autoHealCustomAction');
exports.CorsSettings = require('./corsSettings');
exports.ApiDefinitionInfo = require('./apiDefinitionInfo');
exports.IpSecurityRestriction = require('./ipSecurityRestriction');
exports.CloningInfo = require('./cloningInfo');
exports.SiteProperties = require('./siteProperties');
exports.RoutingRule = require('./routingRule');
exports.SiteAuthSettings = require('./siteAuthSettings');
exports.HostingEnvironment = require('./hostingEnvironment');
exports.VirtualNetworkProfile = require('./virtualNetworkProfile');
exports.WorkerPool = require('./workerPool');
exports.VirtualIPMapping = require('./virtualIPMapping');
exports.StampCapacity = require('./stampCapacity');
exports.NetworkAccessControlEntry = require('./networkAccessControlEntry');
exports.ManagedHostingEnvironment = require('./managedHostingEnvironment');
exports.ResourceNameAvailabilityRequest = require('./resourceNameAvailabilityRequest');
exports.ResourceNameAvailability = require('./resourceNameAvailability');
exports.DomainControlCenterSsoRequest = require('./domainControlCenterSsoRequest');
exports.DomainRegistrationInput = require('./domainRegistrationInput');
exports.NameIdentifier = require('./nameIdentifier');
exports.DomainAvailablilityCheckResult = require('./domainAvailablilityCheckResult');
exports.DomainRecommendationSearchParameters = require('./domainRecommendationSearchParameters');
exports.CsmMoveResourceEnvelope = require('./csmMoveResourceEnvelope');
exports.HostingEnvironmentDiagnostics = require('./hostingEnvironmentDiagnostics');
exports.AddressResponse = require('./addressResponse');
exports.ResourceMetric = require('./resourceMetric');
exports.ResourceMetricName = require('./resourceMetricName');
exports.ResourceMetricValue = require('./resourceMetricValue');
exports.KeyValuePairStringString = require('./keyValuePairStringString');
exports.MetricDefinition = require('./metricDefinition');
exports.MetricAvailabilily = require('./metricAvailabilily');
exports.CsmUsageQuota = require('./csmUsageQuota');
exports.LocalizableString = require('./localizableString');
exports.Usage = require('./usage');
exports.SkuInfo = require('./skuInfo');
exports.SkuCapacity = require('./skuCapacity');
exports.SourceControl = require('./sourceControl');
exports.Recommendation = require('./recommendation');
exports.RecommendationRule = require('./recommendationRule');
exports.VnetInfo = require('./vnetInfo');
exports.VnetRoute = require('./vnetRoute');
exports.VnetGateway = require('./vnetGateway');
exports.NetworkFeatures = require('./networkFeatures');
exports.RelayServiceConnectionEntity = require('./relayServiceConnectionEntity');
exports.CsmSlotEntity = require('./csmSlotEntity');
exports.SlotDifference = require('./slotDifference');
exports.SlotConfigNamesResource = require('./slotConfigNamesResource');
exports.SlotConfigNames = require('./slotConfigNames');
exports.SiteCloneability = require('./siteCloneability');
exports.SiteCloneabilityCriterion = require('./siteCloneabilityCriterion');
exports.CsmSiteRecoveryEntity = require('./csmSiteRecoveryEntity');
exports.DeletedSite = require('./deletedSite');
exports.Deployment = require('./deployment');
exports.SiteInstance = require('./siteInstance');
exports.HostNameBinding = require('./hostNameBinding');
exports.SiteSourceControl = require('./siteSourceControl');
exports.StringDictionary = require('./stringDictionary');
exports.ConnectionStringDictionary = require('./connectionStringDictionary');
exports.ConnStringValueTypePair = require('./connStringValueTypePair');
exports.SiteLogsConfig = require('./siteLogsConfig');
exports.ApplicationLogsConfig = require('./applicationLogsConfig');
exports.FileSystemApplicationLogsConfig = require('./fileSystemApplicationLogsConfig');
exports.AzureTableStorageApplicationLogsConfig = require('./azureTableStorageApplicationLogsConfig');
exports.AzureBlobStorageApplicationLogsConfig = require('./azureBlobStorageApplicationLogsConfig');
exports.HttpLogsConfig = require('./httpLogsConfig');
exports.FileSystemHttpLogsConfig = require('./fileSystemHttpLogsConfig');
exports.AzureBlobStorageHttpLogsConfig = require('./azureBlobStorageHttpLogsConfig');
exports.EnabledConfig = require('./enabledConfig');
exports.PremierAddOnRequest = require('./premierAddOnRequest');
exports.BackupRequest = require('./backupRequest');
exports.BackupSchedule = require('./backupSchedule');
exports.DatabaseBackupSetting = require('./databaseBackupSetting');
exports.BackupItem = require('./backupItem');
exports.RestoreRequest = require('./restoreRequest');
exports.RestoreResponse = require('./restoreResponse');
exports.CsmPublishingProfileOptions = require('./csmPublishingProfileOptions');
exports.TopLevelDomain = require('./topLevelDomain');
exports.TopLevelDomainAgreementOption = require('./topLevelDomainAgreementOption');
exports.TldLegalAgreement = require('./tldLegalAgreement');
exports.CertificateOrderCollection = require('./certificateOrderCollection');
exports.CertificateOrderCertificateCollection = require('./certificateOrderCertificateCollection');
exports.CertificateCollection = require('./certificateCollection');
exports.ClassicMobileServiceCollection = require('./classicMobileServiceCollection');
exports.DomainCollection = require('./domainCollection');
exports.GeoRegionCollection = require('./geoRegionCollection');
exports.ServerFarmCollection = require('./serverFarmCollection');
exports.SiteCollection = require('./siteCollection');
exports.HostingEnvironmentCollection = require('./hostingEnvironmentCollection');
exports.ManagedHostingEnvironmentCollection = require('./managedHostingEnvironmentCollection');
exports.NameIdentifierCollection = require('./nameIdentifierCollection');
exports.StampCapacityCollection = require('./stampCapacityCollection');
exports.ResourceMetricCollection = require('./resourceMetricCollection');
exports.CsmUsageQuotaCollection = require('./csmUsageQuotaCollection');
exports.MetricDefinitionCollection = require('./metricDefinitionCollection');
exports.UsageCollection = require('./usageCollection');
exports.WorkerPoolCollection = require('./workerPoolCollection');
exports.SkuInfoCollection = require('./skuInfoCollection');
exports.SourceControlCollection = require('./sourceControlCollection');
exports.SlotDifferenceCollection = require('./slotDifferenceCollection');
exports.DeletedSiteCollection = require('./deletedSiteCollection');
exports.DeploymentCollection = require('./deploymentCollection');
exports.SiteInstanceCollection = require('./siteInstanceCollection');
exports.HostNameBindingCollection = require('./hostNameBindingCollection');
exports.BackupItemCollection = require('./backupItemCollection');
exports.TopLevelDomainCollection = require('./topLevelDomainCollection');
exports.TldLegalAgreementCollection = require('./tldLegalAgreementCollection');