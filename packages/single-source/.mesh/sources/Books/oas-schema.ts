// @ts-nocheck
export default [
  {
    "openapi": "3.0.0",
    "paths": {
      "/books": {
        "get": {
          "operationId": "AppController_listBooks",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Book"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "books"
          ]
        }
      },
      "/categories": {
        "get": {
          "operationId": "AppController_listBookCategories",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Category"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "books"
          ]
        }
      },
      "/books/{id}": {
        "get": {
          "operationId": "AppController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Book"
                  }
                }
              }
            },
            "404": {
              "description": ""
            }
          },
          "tags": [
            "books"
          ]
        }
      }
    },
    "info": {
      "title": "Books service example",
      "description": "Everything about books",
      "version": "1.0",
      "contact": {}
    },
    "tags": [
      {
        "name": "books",
        "description": ""
      }
    ],
    "servers": [],
    "components": {
      "schemas": {
        "Book": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": "1"
            },
            "authorId": {
              "type": "string",
              "example": "1"
            },
            "categorieId": {
              "type": "string",
              "example": "1"
            },
            "title": {
              "type": "string",
              "example": "Dune"
            }
          },
          "required": [
            "id",
            "authorId",
            "categorieId",
            "title"
          ]
        },
        "Category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": "1"
            },
            "name": {
              "type": "string",
              "example": "Fiction"
            }
          },
          "required": [
            "id",
            "name"
          ]
        }
      }
    }
  }
] as any;