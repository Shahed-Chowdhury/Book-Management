using DAL.EF.Models;
using DAL.Interfaces;
using DAL.Repos;

namespace DAL
{
    public class DataAccessFactory
    {
        public static IRepo<Publisher> PublisherDataAccess()
        {
            return new PublisherRepo();
        }

        public static IPublisher PublisherDataAccessV2()
        {
            return new PublisherRepo();
        }

        public static IRepo<Book> BookDataAccess()
        {
            return new BookRepo();
        }

        public static IRepo<Author> AuthorDataAccess()
        {
            return new AuthorRepo();
        }
    }
}