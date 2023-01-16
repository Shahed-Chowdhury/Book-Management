using BLL.DTOs;
using BLL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookAuthor2.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : ControllerBase
    {
        [HttpPost("add")]
        public IActionResult Add(BookDTO dto)
        {
            try
            {
                return Ok(new { status = "success", data = BookServices.Add(dto) });
            }
            catch (Exception ex)
            {
                return BadRequest(new { status = "Failed", message = ex.Message });
            }
        }

        [HttpGet]
        public IActionResult GetAll(int page = 1, int pageSize = 10)
        {
            try
            {
                return Ok(new { status="success", data=BookServices.GetAll(page, pageSize) });
            }
            catch (Exception ex)
            {
                return BadRequest(new {status="Failed", message=ex.Message});
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(new {status="success", data=BookServices.Get(id) });
            }
            catch(Exception ex)
            {
                return BadRequest(new { status = "Failed", message = ex.Message });

            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
              var bookDTO = BookServices.Delete(id);

                if(bookDTO != null) return NoContent();

                throw new Exception("Unable to delete book");
            }
            catch(Exception ex)
            {
                return BadRequest(new {status="Failed", message=ex.Message});
            }
        }

        [HttpPatch]
        public IActionResult Update(BookDTO4 dto)
        {
            try
            {
                return Ok(new {status="success", data=BookServices.Update(dto)});
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
