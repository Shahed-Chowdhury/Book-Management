using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EF.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Title { get; set; }

        [Required,StringLength(50)]
        public DateTime PublishedDate { get; set; }

        [Required]
        public BookType Type { get; set; }

        [Required, ForeignKey("Publisher")]
        public int PublisherId { get; set; }
        public Publisher Publisher { get; set; }
      
    }

    public enum BookType
    {
            Fantasy,
            Science,
            Horror
    }
}
