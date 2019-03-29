// There is no reason to populate it.

// async function DbUserMain() {
//   // Create some people.
//   const sylvester = await Person.query().insertGraph({
//     firstName: 'Sylvester',

//     children: [
//       {
//         firstName: 'Sage'
//       },
//       {
//         firstName: 'Sophia'
//       }
//     ]
//   });

//   console.log('created:', sylvester);

//   // Fetch all people named Sylvester and sort them by id.
//   // Load `children` relation eagerly.
//   const sylvesters = await Person.query()
//     .where('firstName', 'Sylvester')
//     .eager('children')
//     .orderBy('id');

//   console.log('sylvesters:', sylvesters);
// }

// createSchema().then(() => main()).catch(console.error);
