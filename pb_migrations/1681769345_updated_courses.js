migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcm0em9vld2jo2l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ayurh3nj",
    "name": "assignmentsDue",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ptfb8t0t58orvb4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcm0em9vld2jo2l")

  // remove
  collection.schema.removeField("ayurh3nj")

  return dao.saveCollection(collection)
})
