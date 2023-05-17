migrate((db) => {
  const collection = new Collection({
    "id": "kcm0em9vld2jo2l",
    "created": "2023-04-17 22:06:11.940Z",
    "updated": "2023-04-17 22:06:11.940Z",
    "name": "courses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "56ii9c3o",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "uakctdn2",
        "name": "teachers",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "deys0s1x",
        "name": "arrangedDays",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 7,
          "values": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
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
  const collection = dao.findCollectionByNameOrId("kcm0em9vld2jo2l");

  return dao.deleteCollection(collection);
})
