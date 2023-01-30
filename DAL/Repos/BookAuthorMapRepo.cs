using DAL.EF.Models;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class BookAuthorMapRepo : Repo, IRepo<BookAuthorMap>
    {
        public BookAuthorMap Add(BookAuthorMap c)
        {
            _context.BookAuthorMaps.Add(c);
            if(_context.SaveChanges()>0) { return c; }
            return null;
        }

        public BookAuthorMap Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<BookAuthorMap> Get(int page = 1, int pageSize = 10)
        {
            throw new NotImplementedException();
        }

        public BookAuthorMap Get(int id)
        {
            throw new NotImplementedException();
        }

        public BookAuthorMap Update(BookAuthorMap c)
        {
            throw new NotImplementedException();
        }
    }
}
