const _ = require('lodash');
const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
	const bundle = res.locals.bundle;

	console.log(bundle);

	if(bundle.errors){
		var errors = parseErrors(bundle.errors);
		res.status(500).json({errors: errors});
	} else {
		next();
	}
}

function parseErrors(nodeRestfulErrors) {
	const errors = [];

	console.log(nodeRestfulErrors);
	//_.forIn(nodeRestfulErrors, error => errors.push(error.message))
	_.forIn(nodeRestfulErrors, function (error) {
		errors.push(error.message);
	});
	return errors

}

BillingCycle.route('count', function(req, res, next) {
	BillingCycle.count(function(error, value) {
		if(error) {
			res.status(500).json({erros: [erros]});
		} else {
			res.json({ value: value });
		}
	});
});

module.exports = BillingCycle;