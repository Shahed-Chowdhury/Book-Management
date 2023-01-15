using AutoMapper;
using BLL.DTOs;
using DAL;
using DAL.EF.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class BookServices
    {
        public static BookDTO Add(BookDTO dto)
        {

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<BookDTO, Book>();
                cfg.CreateMap<Book, BookDTO>();
            });

            var mapper = new Mapper(config);

            var dataObj = mapper.Map<Book>(dto);

            var book = DataAccessFactory.BookDataAccess().Add(dataObj);

            var bookDTO = mapper.Map<BookDTO>(dto);

            return bookDTO;
        }

        public static List<BookDTO2> Get()
        {
            var config = new MapperConfiguration(cfg => { 
                cfg.CreateMap<Book, BookDTO2>();
                cfg.CreateMap<Publisher, PublisherDTO2>();
                cfg.CreateMap<Author, AuthorDTO2>();
            });

            var books = DataAccessFactory.BookDataAccess().Get();

            var mapper = new Mapper(config);

            return mapper.Map<List<BookDTO2>>(books);

        }

        public static BookDTO5 Get(int id)
        {

            var book = DataAccessFactory.BookDataAccess().Get(id);

             var config = new MapperConfiguration(cfg => {
                cfg.CreateMap<Book, BookDTO5>();
                cfg.CreateMap<Publisher, PublisherDTO2>();
            }); 

            var mapper = new Mapper(config);

            return mapper.Map<BookDTO5>(book); 
          
        }

        public static BookDTO Delete(int id)
        {
            var book = DataAccessFactory.BookDataAccess().Delete(id);

            if (book == null) return null;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Book, BookDTO>();
            });

            var mapper = new Mapper(config);

            return mapper.Map<BookDTO>(book);
        }

        public static BookDTO4 Update(BookDTO4 dto)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Book, BookDTO4>();
                cfg.CreateMap<BookDTO4, Book>();
            });

            var mapper = new Mapper(config);

            var dbObj = mapper.Map<Book>(dto);

            var data = DataAccessFactory.BookDataAccess().Update(dbObj);

            var dt = mapper.Map<BookDTO4>(data);

            return dt;

        }
    }
}

