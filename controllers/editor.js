async function CreateNewDraft(collection, content, input) {
	const draft = {
		text: content,
		signed: input,
		dateUpdated: new Date().toISOString().slice(0, 10), // oorspronkelijk date is handiger voor aanpassen later
	}

	await collection.insertOne(draft)
}

// console.log(db)
function getDataFromDatabase(dbCollection) {
	// const db = client.db(dbName)
	let collection = db.collection(dbCollection) // collectie naam
	collection = GetDraftsFromDatabase(collection)

	return collection
}

async function GetDraftsFromDatabase(collection) {
	return collection.find().toArray()
}

exports.drafts = async (req, res) => {
	let draft = await getDataFromDatabase("letters")
	res.render("pages/drafts.ejs", {
		letters: draft,
	})
}

exports.letter = (req, res) => {
	res.render("pages/letter.ejs")
}

exports.bottle = (req, res) => {
	res.render("pages/bottle.ejs")
}

exports.bottle1 = (req, res) => {
	const collectionLetters = db.collection("letters")
	CreateNewDraft(collectionLetters, req.body.content, req.body.signed)
	res.render("pages/bottle.ejs")
}