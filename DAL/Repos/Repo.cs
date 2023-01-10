using DAL.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class Repo
    {
       protected BookAndAuthorContext _context;

        public Repo()
        {
            _context = new BookAndAuthorContext(BookAndAuthorContext.options.dbOps);
        }
    }
}
