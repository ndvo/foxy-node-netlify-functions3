

async function fetch(endpoint, options) {
  if (endpoint.match(/token/)){
    return {
      json: async function() {
        return {
          data: {token: 'token'},
          success: true,
        }
      }
    }
  } else if (enpoint.match(/shipments/)) {
    return {
      json: async function() {
        return {
          success: true,
        }
      }
    }
  }
}


exports.fetch = fetch
