// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/fakeOriginName?api-version=2016-10-02')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '81c2472a-fb9c-47fa-bc23-015e6a8435f1',
  'x-ms-client-request-id': '1e8493a7-64c1-4d8a-b071-6b34050f7d1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'b725b2d5-4ee2-422d-bb9f-71d2b664b7b4',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211619Z:b725b2d5-4ee2-422d-bb9f-71d2b664b7b4',
  date: 'Mon, 31 Oct 2016 21:16:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/fakeOriginName?api-version=2016-10-02')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '81c2472a-fb9c-47fa-bc23-015e6a8435f1',
  'x-ms-client-request-id': '1e8493a7-64c1-4d8a-b071-6b34050f7d1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'b725b2d5-4ee2-422d-bb9f-71d2b664b7b4',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211619Z:b725b2d5-4ee2-422d-bb9f-71d2b664b7b4',
  date: 'Mon, 31 Oct 2016 21:16:19 GMT',
  connection: 'close' });
 return result; }]];