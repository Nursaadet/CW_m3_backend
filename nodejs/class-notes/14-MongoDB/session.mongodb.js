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