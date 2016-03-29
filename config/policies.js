/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/

    '*': ['flash','getModel','clientPage'],
    '404': 'clientPage',
    'session':{
	'destroy':  ['flash','authentificated','clientPage']
    },
    'user':{
	'*': ['flash','authentificated','selfProfile','clientPage'],
	'new': ['flash','clientPage'],
	'create': ['flash','clientPage'],
	'subscribe': ['flash','clientPage'],
	'index': ['flash','admin','clientPage']
    },
    'blog':{
	'index': ['flash','getModel','clientPage'],
	'show': ['flash','getModel','clientPage'],
	'list': ['flash','getModel','clientPage','authentificated'],
	'edit': ['flash','getModel','clientPage','authentificated'],
	'destroy': ['flash','getModel','clientPage','authentificated'],
	'new':  ['flash','getModel','clientPage','authentificated'],
	'create':  ['flash','getModel','clientPage','authentificated'],
	'newSticker':  ['flash','getModel','clientPage','authentificated'],
	'newBanner':  ['flash','getModel','clientPage','authentificated'],
	'newImage':  ['flash','getModel','clientPage','authentificated'],
	'deleteSticker':  ['flash','getModel','clientPage','authentificated'],
	'deleteBanner':  ['flash','getModel','clientPage','authentificated'],
	'deleteImage':  ['flash','getModel','clientPage','authentificated']
    },
    'tag':{
	'*': ['flash','getModel','clientPage','authentificated']
    },
    'leadin':{
	'*': ['flash','getModel','clientPage','authentificated']
    },
    'comment':{
	'*': ['flash','getModel','clientPage','authentificated'],
	'create': ['flash','getModel','clientPage']
    }

  /***************************************************************************
  *                                                                          *
  * Here's an example of mapping some policies to run before a controller    *
  * and its actions                                                          *
  *                                                                          *
  ***************************************************************************/
	// RabbitController: {

		// Apply the `false` policy as the default for all of RabbitController's actions
		// (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
		// '*': false,

		// For the action `nurture`, apply the 'isRabbitMother' policy
		// (this overrides `false` above)
		// nurture	: 'isRabbitMother',

		// Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
		// before letting any users feed our rabbits
		// feed : ['isNiceToAnimals', 'hasRabbitFood']
	// }
};
