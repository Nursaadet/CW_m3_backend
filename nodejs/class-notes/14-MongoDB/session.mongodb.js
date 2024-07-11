	/* MongoSH */
	// https://www.mongodb.com/developer/products/mongodb/cheat-sheet/
	// https://www.mongodb.com/docs/manual/reference/sql-comparison/
	// https://www.w3schools.com/mongodb/index.php

	/* General */
	// help
	help
	// clearScreen:
	cls // console.clear()

	// exit from mongosh:
	exit // exit() // .exit
	quit // quit()

	/* Databases */
	show('dbs') // show dbs // show databases
	// Create/Swicth to Database:
	use('newdb') // use newdb
	// Drop/Reset:
	db.dropDatabase()


	/* Collections (Tables) */
	// mongodb.com/docs/manual/reference/method/js-collection/
	show('collections') // show collections // show tables
	db.getCollectionNames() // List by array.
	db.getCollectionInfos() // List by array with details.
	db.createCollection('collName') // Create
	db.collName.renameCollection('collName2') // Update
	db.collName2.drop() // Drop


	/* Documents (Records/Rows) */

	// INSERT:
	// db.coll.insertOne( { new_values } )
	// db.coll.insertMany( [ { new_values } ] )
	db.coll.insertOne({ firstName: 'Test', lastName: 'Test', age: 10 })
	db.coll.insertMany([ // in array[]
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
		{ firstName: 'Test', lastName: 'Test', age: 10 },
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
		{ firstName: 'Test', lastName: 'Test', age: 10 },
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
	])
	// db.coll.insert() method is depracated.

	