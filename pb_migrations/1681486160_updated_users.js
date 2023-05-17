migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "users_name",
    "name": "type",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("nidffn2t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "users_name",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
