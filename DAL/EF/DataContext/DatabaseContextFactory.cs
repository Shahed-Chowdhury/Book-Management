using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;

namespace DAL.DataContext
{
    public class DatabaseContextFactory : IDesignTimeDbContextFactory<BookAndAuthorContext>
    {
        public BookAndAuthorContext CreateDbContext(string[] args)
        {
            AppConfiguration appConfiguration = new AppConfiguration();
            var opsBuilder = new DbContextOptionsBuilder<BookAndAuthorContext>();
            opsBuilder.UseSqlServer(appConfiguration.sqlConnectionString);
            return new BookAndAuthorContext(opsBuilder.Options);
        }
    }
}
