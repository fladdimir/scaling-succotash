using Microsoft.AspNetCore.Mvc;
using aspnetcore.Models;

namespace aspnetcore.Controllers
{
    [ApiController]
    [Route("rgbColors")]
    public class RgbColorController : ControllerBase
    {
        private RgbColorDbContext dbContext;

        public RgbColorController(RgbColorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public ActionResult<RgbColor> Get(long id)
        {
            var result = dbContext.rgbColors.Find(id);
            return result != null ? result : NotFound();
        }

        [HttpPut("{id}")]
        public ActionResult<RgbColor> Put(long id, RgbColor dto)
        {
            dto.id = id;
            RgbColor entity = dbContext.rgbColors.Find(dto.id);
            if (entity == null)
            {
                entity = dbContext.Add(dto).Entity;
            }
            else
            {
                // tedious mapping...
                entity.r = dto.r;
                entity.g = dto.g;
                entity.b = dto.b;
                entity.max = dto.max;
            }
            dbContext.SaveChanges();
            return entity;
        }
    }
}
