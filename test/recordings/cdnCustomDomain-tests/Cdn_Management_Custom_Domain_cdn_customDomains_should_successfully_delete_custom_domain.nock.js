// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2543/providers/Microsoft.Cdn/profiles/cdnTestProfile9208/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain4653?api-version=2016-10-02')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '5a063903-c035-4f5f-9382-ce5fa1f358c2',
  'x-ms-client-request-id': '43ed0d09-ff5b-488a-971d-01e1d8e53347',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '5ea979d3-f148-419b-a56d-8ac5c183e25e',
  'x-ms-routing-request-id': 'WESTUS2:20161028T022118Z:5ea979d3-f148-419b-a56d-8ac5c183e25e',
  date: 'Fri, 28 Oct 2016 02:21:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2543/providers/Microsoft.Cdn/profiles/cdnTestProfile9208/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain4653?api-version=2016-10-02')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '5a063903-c035-4f5f-9382-ce5fa1f358c2',
  'x-ms-client-request-id': '43ed0d09-ff5b-488a-971d-01e1d8e53347',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '5ea979d3-f148-419b-a56d-8ac5c183e25e',
  'x-ms-routing-request-id': 'WESTUS2:20161028T022118Z:5ea979d3-f148-419b-a56d-8ac5c183e25e',
  date: 'Fri, 28 Oct 2016 02:21:18 GMT',
  connection: 'close' });
 return result; }]];