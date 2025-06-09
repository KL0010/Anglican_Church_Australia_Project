using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Anglican_Church_Australia.Data
{
    public class DbUserContext : IdentityDbContext
    {
        public DbUserContext(DbContextOptions<DbUserContext> options) : base(options) { }
    }
}
