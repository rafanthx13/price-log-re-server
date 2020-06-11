// Swagger don't works with tester Jest
if(!process.env.JEST_WORKER_ID){

	const swaggerUi = require('swagger-ui-express');
	const YAML = require('yamljs'); // Convert YAML to JSON
	const swaggerDocument = YAML.load('src/config/swagger.yaml');

	module.exports = app => {

		app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	}
}