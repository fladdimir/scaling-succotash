using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace aspnetcore.Models
{
    [Table("rgb_color")]
    public class RgbColor
    {
        public RgbColor()
        {
        }

        public RgbColor(long id, int r, int g, int b, int max)
        {
            this.id = id;
            this.r = r;
            this.g = g;
            this.b = b;
            this.max = max;
        }

        public long id { get; set; }

        public int r { get; set; }

        public int g { get; set; }

        public int b { get; set; }

        public int max { get; set; } = 255;

    }

    public class RgbColorDbContext : DbContext
    {
        public RgbColorDbContext(DbContextOptions<RgbColorDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSnakeCaseNamingConvention();

        public DbSet<RgbColor> rgbColors { get; set; }
    }

}
