package rgbcolor

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Db - gorm db connection
var Db *gorm.DB

// InitDb - creates a connection and migrates
func InitDb() {
	// open a db connection
	dsn := "user=postgres password=postgres dbname=postgres host=localhost port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// migrate the schema
	db.AutoMigrate(&RgbColor{})

	Db = db

	saveColor1()
}

func saveColor1() {
	var color RgbColor
	result := Db.First(&color, 1)
	if result.Error != nil {
		color = RgbColor{ID: 1, R: 255, G: 0, B: 0, MAX: 255}
		Db.Save(color)
	}
}
