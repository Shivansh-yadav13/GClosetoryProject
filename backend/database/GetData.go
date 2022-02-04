package database

import (
	"context"
	"shivansh-yadav13/closetory/backend/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetData(id primitive.ObjectID) models.Data {
	client := InitDatabase()

	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	coll := client.Database("sample").Collection("data")
	var result models.Data
	err := coll.FindOne(context.TODO(), bson.D{{"_id", id}}).Decode(&result)
	if err != nil {
		panic(err)
	}
	return result
}
