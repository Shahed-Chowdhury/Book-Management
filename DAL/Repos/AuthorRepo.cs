using DAL.DataContext;
using DAL.EF.Models;
using DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class AuthorRepo : Repo, IRepo<Author>, IAuthor
    {
        public Author Add(Author c)
        {
            c.Id = 0;

            _context.Authors.Add(c);

            if (_context.SaveChanges() > 0) return c;

            return null;

        }

        public Author Delete(int id)
        {
            var author = Get(id);

            _context.Authors.Remove(author);

            if(_context.SaveChanges() > 0) return author;   

            return null;
        }

        public List<Author> Get()
        {
            return _context.Authors.ToList();
        }

        public Author Get(int id)
        {
            return _context.Authors.SingleOrDefault(x => x.Id == id);
        }

        public Author Update(Author c)
        {
            var author = Get(c.Id);

            _context.Entry(author).CurrentValues.SetValues(c);

            if(_context.SaveChanges() > 0) return c;

            return null;
        }

        public Author GetAllBooksByAuthorId(int AuthorId)
        {
           var author = _context.Authors.Select(b => new Author
             {
                 Name = b.Name,
                 Books = b.Books,
                 Id = b.Id

             }).SingleOrDefault(x => x.Id == AuthorId);

             return author; 

           // return _context.Authors.Include(x => x.Books).Where(a => a.Id == AuthorId).FirstOrDefault();

            //var dbObj = _context.Authors.Where(a => a.Id == AuthorId).SingleOrDefault();

           // return dbObj;

        }

    }
}
