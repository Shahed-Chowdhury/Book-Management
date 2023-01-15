using AutoMapper;
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
        public static AuthorDTOs Add(AuthorDTOs dto)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<AuthorDTOs, Author>();
                cfg.CreateMap<Author, AuthorDTOs>();
            });

            var mapper = new Mapper(config);

 
            var obj = DataAccessFactory.AuthorDataAccess().Add(mapper.Map<Author>(dto)); 

            return mapper.Map<AuthorDTOs>(obj);
        }

        public static List<AuthorDTO3> Get()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Author, AuthorDTO3>();
            });

            var mapper = new Mapper(config);

            var obj = DataAccessFactory.AuthorDataAccess().Get();

            return mapper.Map<List<AuthorDTO3>>(obj);
        }

        public static AuthorDTO3 Get(int id)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Author, AuthorDTO3>();
            });

            var mapper = new Mapper(config);

            var obj = DataAccessFactory.AuthorDataAccess().Get(id);

            return mapper.Map<AuthorDTO3>(obj);
        }

        public static AuthorDTO2 Delete(int id)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Author, AuthorDTO2>();
            });

            var mapper = new Mapper(config);

            var dbObj = DataAccessFactory.AuthorDataAccess().Delete(id);

            if (dbObj != null) { return mapper.Map<AuthorDTO2>(dbObj);  }

            return null;
        }

        public static AuthorDTO3 Update(AuthorDTO3 dto)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Author, AuthorDTO3>();
                cfg.CreateMap<AuthorDTO3, Author>();
            });

            var mapper = new Mapper(config);

            var dbObj = DataAccessFactory.AuthorDataAccess().Update(mapper.Map<Author>(dto));

            return mapper.Map<AuthorDTO3>(dbObj);
        }
    }
}
