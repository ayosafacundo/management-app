import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})

const userState = {
    "id": 0,
    "userData": {
        "username": "Admin",
        "email": "admin@placeholder.com",
        "password": "Abc123!",
        "type": "student",
        "privileges": {
            "admin": true,
            "treasurer": true,
            "teacher": true,
            "librarian": true,
            "advisor": true,
            "student": true
        }
    },
    "library": {
        "books": {
            "retrieved": [],
            "bought": [],
            "needed": []
        },
        "shoppingList": []
    },
    "fees": {
        "paid": [
            {
                "feeTitle": "title",
                "value": 69,
                "paidDate": "01-01-1998"
            }
        ],
        "upcoming": [
            {
                "feeTitle": "title",
                "value": 69,
                "dueDate": "01-01-1999"
            }
        ]
    },
    "courses": [
        {
            "id": 0,
            "courseTitle": "title",
            "teachers": [],
            "prerequisite": [
                {
                    "courseID": 15
                }
            ],
            "arrangedDays": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ],
            "assignments": {
                "submitted": [
                    {
                        "assignmentTitle": "title",
                        "assignmentDescription": "Description",
                        "pointsObtained": 10,
                        "maxPointsPossible": 10,
                        "submissionDate": "1-1-1999",
                        "submissionTime": "16:00",
                        "assignmentDoc": "DOC"
                    }
                ],
                "due": [
                    {
                        "assignmentTitle": "title",
                        "assignmentDescription": "Description",
                        "maxPointsPossible": 10,
                        "dueDate": "1-1-1999"
                    }
                ]
            }
        }
    ]
}

export default store;