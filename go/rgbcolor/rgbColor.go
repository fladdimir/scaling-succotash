package rgbcolor

type (
	// RgbColor - color information
	RgbColor struct {
		ID  int `json:"id" gorm:"primary_key"`
		R   int `json:"r"`
		G   int `json:"g"`
		B   int `json:"b"`
		MAX int `json:"max" binding:"required"`
	}
)

// TableName - called by GORM upon migration if present
func (RgbColor) TableName() string {
	return "rgb_color" // singular
}
