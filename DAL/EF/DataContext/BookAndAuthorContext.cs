using DAL.EF.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DataContext
{
    public class BookAndAuthorContext : DbContext
    {
        public class optionsBuild
        {
            public optionsBuild()
            {
                settings = new AppConfiguration();
                optionsBuilder = new DbContextOptionsBuilder<BookAndAuthorContext>();
                optionsBuilder.UseSqlServer(settings.sqlConnectionString);
                dbOps = optionsBuilder.Options;
            }

            public DbContextOptionsBuilder<BookAndAuthorContext> optionsBuilder { get; set; }

            public DbContextOptions<BookAndAuthorContext> dbOps { get; set; }

            private AppConfiguration settings { get; set; }
        }

        public static optionsBuild options = new optionsBuild();

        public BookAndAuthorContext(DbContextOptions<BookAndAuthorContext> options) : base(options) { }

        public BookAndAuthorContext()
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
        }

        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<Book> Books { get; set; }
    }
}
