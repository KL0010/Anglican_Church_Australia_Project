using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Anglican_Church_Australia.Data;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DbContextConnection' not found.");
builder.Services.AddDbContext<DbUserContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true).AddRoles<IdentityRole>().AddEntityFrameworkStores<DbUserContext>();
builder.Services.Configure<IdentityOptions>(opts => {opts.SignIn.RequireConfirmedEmail = true; });

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapRazorPages();

app.Run();
