using DAL.EF.Models;
using DAL.Interfaces;
using DAL.Repos;

namespace DAL
{
    public class DataAccessFactory
    {
        public static IRepo<Author> AuthorDataAccess()
        {
            return new AuthorRepo();
        }

        public static IAuthor AuthorDataAccessV2()
        {
            return new AuthorRepo();
        }

        public static IRepo<Book> BookDataAccess()
        {
            return new BookRepo();
        }
    }
}