import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "{url}/api/v3/admin/stats?apiKey={key}&{endpoint}",
  proxyHandler: genericProxyHandler,

  mappings: {
    groups: {
      endpoint: "params=groups&groups=publisher,series,comic"
    },
  },
};

export default widget;
