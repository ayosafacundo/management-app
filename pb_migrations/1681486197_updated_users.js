migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nidffn2t",
    "name": "privileges",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "admin",
        "treasurer",
        "teacher",
        "librarian",
        "advisor",
        "student"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nidffn2t",
    "name": "privileges",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "admin",
        "treasurer",
        "teacher",
        "librarian",
        "advisor",
        "student"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
