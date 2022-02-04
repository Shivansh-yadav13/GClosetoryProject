package database

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func RemoveData(id primitive.ObjectID) error {
	client := InitDatabase()
	coll := client.Database("sample").Collection("data")
	_, err := coll.DeleteOne(context.TODO(), bson.D{{"_id", id}})
	return err
}
