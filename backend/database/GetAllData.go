package database

import (
	"context"
	"shivansh-yadav13/closetory/backend/mocks"
	"shivansh-yadav13/closetory/backend/models"

	"go.mongodb.org/mongo-driver/bson"
)

func GetAllData() {
	client := InitDatabase()

	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	coll := client.Database("sample").Collection("data")

	var results bson.A
	cursor, err := coll.Find(context.TODO(), bson.D{})
	if err != nil {
		panic(err)
	}
	err = cursor.All(context.TODO(), &results)
	if err != nil {
		panic(err)
	}
	mocks.DisplayData = nil
	for _, result := range results {
		var dataToBeAdded models.Data
		mares, _ := bson.Marshal(result)
		bson.Unmarshal(mares, &dataToBeAdded)
		mocks.DisplayData = append(mocks.DisplayData, dataToBeAdded)
	}

}
