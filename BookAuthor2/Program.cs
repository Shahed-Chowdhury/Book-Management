using DAL.DataContext;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

// Injecting dbcontext using dependency injection
builder.Services.AddDbContext<BookAndAuthorContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("connectDB"))
);

//services cors


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.UseCors(
//options => options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()
options => options.WithOrigins("*").AllowAnyMethod().AllowAnyHeader()

);


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
