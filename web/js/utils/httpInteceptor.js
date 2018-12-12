services
  .factory('HttpInterceptorSvc', [
    'env',
    'Base64',
    function testInterceptor(env,Base64) {
      return {
        request: function(config) {
          if(config.url.indexOf(env.api) !== -1){
            config.headers['Content-Type'] = "application/json";
            config.headers['Authorization'] = 'Basic ' + Base64.encode(env.user + ':' + env.pass);
          }
          return config;
        },

        requestError: function(config) {
          return config;
        },

        response: function(res) {
          return res;
        },

        responseError: function(res) {
          return res;
        }
      }
    }
  ]);
