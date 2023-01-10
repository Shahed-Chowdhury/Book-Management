using DAL.EF.Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class AuthorDTO
    {
        public int Id { get; set; } = 0;
        public string Name { get; set; }
        public List<BookDTO3> Books { get; set; }

    }

    public class AuthorDTO2
    {
        public string Name { get; set; }
    }

    public class AuthorDTO3
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
