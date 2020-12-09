using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using aspnetcore.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace aspnetcore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<RgbColorDbContext>(options => options.UseNpgsql(Configuration.GetConnectionString("postgres")));

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, RgbColorDbContext dbContext)
        {
            app.UseRouting();
            app.UseCors();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            dbContext.Database.EnsureCreated(); // no migrations this time
            addFirstColorIfMissing(dbContext);
        }

        private void addFirstColorIfMissing(RgbColorDbContext dbContext)
        {
            if (dbContext.rgbColors.Find(1L) == null)
            {
                dbContext.rgbColors.Add(new RgbColor(1, 255, 0, 0, 255));
                dbContext.SaveChanges();
            }
        }
    }
}
