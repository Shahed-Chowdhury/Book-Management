﻿using DAL.EF.Models;
using DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class BookRepo : Repo, IRepo<Book>
    {
        public Book Add(Book c)
        {
            
            c.PublishedDate = DateTime.Now;
            
            _context.Books.Add(c);

            if (_context.SaveChanges() > 0) return c;

            return null;

        }

        public Book Delete(int id)
        {
            var book = _context.Books.Find(id);

            if (book == null) return null;

            _context.Books.Remove(book);

            if (_context.SaveChanges() > 0) return book;

            return null;

        }

        public List<Book> Get()
        {
            return _context.Books.Select(n => new Book
            {
                Id = n.Id,
                AuthorId = n.AuthorId,
                Title = n.Title,
                PublishedDate = n.PublishedDate,
                Author = n.Author
            }).ToList();

            
        }

        public Book Get(int id)
        {
            var data = _context.Books.Select(n => new Book
            {
               Id = n.Id,
               AuthorId = n.AuthorId,
               Title = n.Title,
               PublishedDate = n.PublishedDate,
               Author = n.Author
            }).FirstOrDefault(p => p.Id == id);
          
            return data;
           
        }

        public Book Update(Book c)
        {
            var data = _context.Books.Where(x => x.Id == c.Id).SingleOrDefault();

            if (data != null)
            {
                _context.Entry(data).CurrentValues.SetValues(c);

                if (_context.SaveChanges() > 0) return data;

                return null;
            }

            return null;


        } 
    }
}
