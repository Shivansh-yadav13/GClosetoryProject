package database

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func UpdateData(id primitive.ObjectID, req_name string, req_price int64) (*mongo.UpdateResult, error) {
	client := InitDatabase()
	coll := client.Database("sample").Collection("data")
	upres, err := coll.UpdateOne(context.TODO(), bson.D{{"_id", id}}, bson.D{{"$set", bson.D{{"name", req_name}, {"price", req_price}}}})
	return upres, err
}
