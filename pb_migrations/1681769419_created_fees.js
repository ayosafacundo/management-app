migrate((db) => {
  const collection = new Collection({
    "id": "9qoj1g408yrpj93",
    "created": "2023-04-17 22:10:19.561Z",
    "updated": "2023-04-17 22:10:19.561Z",
    "name": "fees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x2d4dfrj",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0ykdkupb",
        "name": "value",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "83zyei4e",
        "name": "paidDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9qoj1g408yrpj93");

  return dao.deleteCollection(collection);
})
