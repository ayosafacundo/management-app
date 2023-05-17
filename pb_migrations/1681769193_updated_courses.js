migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcm0em9vld2jo2l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erdstkim",
    "name": "prerequisites",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kcm0em9vld2jo2l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcm0em9vld2jo2l")

  // remove
  collection.schema.removeField("erdstkim")

  return dao.saveCollection(collection)
})
