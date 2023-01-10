using DAL.EF.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class BookDTO
    {
        //[Required]
        //public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required, EnumDataType(typeof(BookType))]
        public BookType Type { get; set; }

        [Required]
        public int AuthorId { get; set; }

         public AuthorDTO? Author { get; set; }

    }

    public class BookDTO2
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required, EnumDataType(typeof(BookType))]
        public BookType Type { get; set; }

        public AuthorDTO2? Author { get; set; }

    }

    public class BookDTO3
    {
        [Required]
        public string Title { get; set; }

        [Required, EnumDataType(typeof(BookType))]
        public BookType Type { get; set; }

        [Required, StringLength(50)]
        public DateTime PublishedDate { get; set; }
    }

    public class BookDTO4
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required, EnumDataType(typeof(BookType))]
        public BookType Type { get; set; }

        [Required]
        public int AuthorId { get; set; }

    }
}
