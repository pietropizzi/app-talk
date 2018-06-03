export default {
  type: 'object',
  required: true,
  properties: {
    info: {
      type: 'object',
      required: true,
      properties: {
        identifier: { type: 'string', required: true },
        name: { type: 'string', required: true },
        appstoreUrl: { type: 'string', required: true },
        documentationUrl: { type: 'string', required: true }
      }
    },
    actions: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        required: true,
        properties: {
          name: { type: 'string', required: true },
          description: { type: 'string' },
          url: { type: 'string', required: true },
          parameters: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: { type: 'string', required: true },
                description: { type: 'string' },
                required: { type: 'bool' },
                options: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      description: { type: 'string', required: true }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
