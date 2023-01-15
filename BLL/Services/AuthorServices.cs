using AutoMapper;
using Azure.Core;
using BLL.DTOs;
using DAL;
using DAL.EF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class AuthorServices
    {
        // returns all authors
        public static List<AuthorDTO3> Get()
        {
            var data = DataAccessFactory.AuthorDataAccess().Get();

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Publisher, AuthorDTO3>();

            });

            var mapper = new Mapper(config);

            return mapper.Map<List<AuthorDTO3>>(data);
        }

        // save authors
        public static AuthorDTO3 Add(AuthorDTO3 dto)
        {

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<AuthorDTO3, Publisher>();
                cfg.CreateMap<Publisher, AuthorDTO3>();

            });

            var mapper = new Mapper(config);

            var dbObj = mapper.Map<Publisher>(dto);

            var data = DataAccessFactory.AuthorDataAccess().Add(dbObj);

            return mapper.Map<AuthorDTO3>(data);

        }

        // get author by id
        public static AuthorDTO3 Get(int id)
        {
            var config = new MapperConfiguration(cfg => { cfg.CreateMap<Publisher, AuthorDTO3>(); });

            var mapper = new Mapper(config);

            var dbObj = DataAccessFactory.AuthorDataAccess().Get(id);

            return mapper.Map<Publisher, AuthorDTO3>(dbObj);

        }

        // update author
        public static AuthorDTO3 Update(AuthorDTO3 dto)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<AuthorDTO3, Publisher>();
                cfg.CreateMap<Publisher, AuthorDTO3>();
            });

            var mapper = new Mapper(config);

            var dbObj = mapper.Map<Publisher>(dto);

            var db_obj = DataAccessFactory.AuthorDataAccess().Update(dbObj);

            return mapper.Map<AuthorDTO3>(db_obj);

        }

        // delete an author
        public static AuthorDTO Delete(int Id)
        {

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Publisher, AuthorDTO>();
            });

            var mapper = new Mapper(config);

            var dbObj = DataAccessFactory.AuthorDataAccess().Delete(Id);

            return mapper.Map<AuthorDTO>(dbObj);

        }

        // Get authors by book
        public static AuthorDTO GetBooks(int Id)
        {
            var dbObj = DataAccessFactory.AuthorDataAccessV2().GetAllBooksByAuthorId(Id);

            if (dbObj == null) return null;

            AuthorDTO dto = new AuthorDTO();

            dto.Id = dbObj.Id;

            dto.Name = dbObj.Name;

            dto.Books = dbObj.Books.AsEnumerable().Select(s => new BookDTO3
            {
                Title = s.Title,
                Type = s.Type,
                PublishedDate = s.PublishedDate
                
            }).ToList();

            return dto;

        }
    }
}
