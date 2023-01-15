using DAL.EF.Models;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class AuthorRepo : Repo, IRepo<Author>
    {
        public Author Add(Author c)
        {
            _context.Authors.Add(c);

            if(_context.SaveChanges() > 0) return c;

            return null;
            
        }

        public Author Delete(int id)
        {
            var author = _context.Authors.Find(id);

            if(author != null)
            {
                _context.Authors.Remove(author);

                if(_context.SaveChanges() > 0) return author;

                return null;
            }

            return null;

        }

        public List<Author> Get()
        {
            return _context.Authors.ToList();
        }

        public Author Get(int id)
        {
            return _context.Authors.Where(x => x.Id == id).FirstOrDefault();
        }

        public Author Update(Author c)
        {
            var author = _context.Authors.FirstOrDefault(x => x.Id == c.Id);

            if (author == null) return null;

            _context.Entry(author).CurrentValues.SetValues(c);

            if (_context.SaveChanges() > 0) return author;

            return null;
        }
    }
}
